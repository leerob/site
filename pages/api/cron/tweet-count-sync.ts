import OAuth from "oauth-1.0a";
import crypto from "crypto";
import { NextApiRequest, NextApiResponse } from "next";
import { queryBuilder } from "lib/planetscale";

const getTweetCount = async (url: string, headers: HeadersInit) => {
  const response = await fetch(url, { headers }).then((res) => res.json());
  return response.data.public_metrics.tweet_count;
};

const updateTweetCount = (tweetCount: number) =>
  queryBuilder
    .insertInto("tweetCount")
    .values({
      count: tweetCount,
    })
    .onDuplicateKeyUpdate({
      count: tweetCount,
    })
    .execute();

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const consumerKey = process.env.TWITTER_API_KEY as string;
  const consumerSecret = process.env.TWITTER_API_KEY_SECRET as string;
  const accessToken = process.env.TWITTER_ACCESS_TOKEN as string;
  const accessTokenSecret = process.env.TWITTER_ACCESS_TOKEN_SECRET as string;
  const url = "https://api.twitter.com/2/users/me?user.fields=public_metrics";

  const oauth = new OAuth({
    consumer: { key: consumerKey, secret: consumerSecret },
    signature_method: "HMAC-SHA1",
    hash_function(baseString, key) {
      return crypto.createHmac("sha1", key).update(baseString).digest("base64");
    },
  });

  const requestData = {
    url: url,
    method: "GET",
  };

  const token = {
    key: accessToken,
    secret: accessTokenSecret,
  };

  const headers = oauth.toHeader(
    oauth.authorize(requestData, token)
  ) as unknown as Headers;

  try {
    const tweetCount = await getTweetCount(url, headers);
    await updateTweetCount(tweetCount);
    response.status(200).json({ tweetCount });
  } catch (error) {
    console.log(error);
    response.status(500).json({ error });
  }
}
