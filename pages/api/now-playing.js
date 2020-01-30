/* eslint-disable no-console */
import {randomBytes} from 'crypto';

import SpotifyClient from 'spotify-web-api-node';

let spotify;
let accessToken;
let refreshToken;
let state;

const isDev = process.env.NOW_REGION === 'dev1' || process.env.NODE_ENV === 'development';

export default async (req, res) => {
    const host = isDev ? `http://localhost:3000` : `https://${req.headers.host}`;
    const redirectUri = `${host}/api/now-playing`;

    if (!state) {
        state = randomBytes(16).toString('hex');
    }

    if (!spotify) {
        spotify = new SpotifyClient({
            clientId: process.env.SPOTIFY_CLIENT_ID,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
            redirectUri
        });
    }

    if (req.query.code && req.query.state === state) {
        await spotify.authorizationCodeGrant(`${req.query.code}`).then((data) => {
            accessToken = data.body.access_token;
            spotify.setAccessToken(accessToken);

            refreshToken = data.body.refresh_token;
            spotify.setRefreshToken(refreshToken);
        });

        res.status(308);
        res.setHeader('Location', redirectUri);

        return res.end();
    }

    if (!accessToken && refreshToken) {
        spotify.setRefreshToken(refreshToken);
        await spotify.refreshAccessToken().then((data) => {
            accessToken = data.body.access_token;
            spotify.setAccessToken(accessToken);
        });
    }

    if (!accessToken && !refreshToken) {
        const scopes = ['user-read-currently-playing'];
        const authUrl = spotify.createAuthorizeURL(scopes, state);

        console.log(`> Authentication required (${authUrl})`);

        return res.status(401).json({
            message: 'Authentication required',
            ...(isDev ? {authUrl} : {})
        });
    }

    try {
        const data = await spotify.getMyCurrentPlayingTrack();

        if (!('is_playing' in data.body)) {
            console.log('> Currently not playing anything');

            return res.json({});
        }

        const isPlaying = data.body.is_playing;
        const title = data.body.item.name;
        const artist = data.body.item.artists.map((_artist) => _artist.name).join(', ');
        const album = data.body.item.album.name;
        const albumImageUrl = data.body.item.album.images[0].url;
        const songUrl = data.body.item.external_urls.spotify;

        return res.json({
            album,
            albumImageUrl,
            artist,
            isPlaying,
            songUrl,
            title
        });
    } catch (error) {
        console.error(error);

        return res.json(error);
    }
};
/* eslint-enable no-console */
