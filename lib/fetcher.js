import fetch from 'isomorphic-unfetch';

export default async (...args) => {
  const res = await fetch(...args);

  return res.json();
};
