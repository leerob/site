import 'server-only';
import { Octokit } from '@octokit/rest';
import { queryBuilder } from 'lib/planetscale';
import { cache } from 'react';

export const getBlogViews = cache(async () => {
  const data = await queryBuilder
    .selectFrom('views')
    .select(['count'])
    .execute();

  return data.reduce((acc, curr) => acc + Number(curr.count), 0);
});

export async function getTweetCount() {
  return 5342;
  const response = await fetch(
    `https://api.twitter.com/2/users/by/username/leeerob?user.fields=public_metrics`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_API_TOKEN}`,
      },
    }
  );

  const { data } = await response.json();
  return Number(data.public_metrics.tweet_count);
}

export const getCommitCount = cache(async () => {
  // trash, need to move to something else
  return '?';
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  const req = await octokit.request(
    'GET /repos/{owner}/{repo}/stats/commit_activity',
    {
      owner: 'leerob',
      repo: 'leerob.io',
    }
  );

  // @ts-ignore req.data is an array, types are wrong?
  return req.data.reduce((acc, curr) => acc + curr.total, 0) || 0;
});
