import React from 'react';

import albums from '../../data/music';

import {Artwork, Grid, Spacer} from './styles';

const AlbumCard = ({album}) => (
    <a href={album.url} name={album.name} rel="noopener noreferrer" target="_blank">
        <Artwork alt={album.name} src={`${album.artworkUrl}.jpg`} />
    </a>
);

const MusicGrid = () => (
    <Grid>
        {albums.map((album) => (
            <AlbumCard album={album} key={album.url} />
        ))}
        <Spacer />
    </Grid>
);

export default MusicGrid;
