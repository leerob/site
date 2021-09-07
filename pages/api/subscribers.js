export default async function handler(_, res) {
  const API_KEY = process.env.REVUE_API_KEY;
  const response = await fetch('https://www.getrevue.co/api/v2/lists', {
    headers: {
      Authorization: `Token ${API_KEY}`,
      'Content-Type': 'application/json'
    },
    method: 'GET'
  });

  const test = await response.json();

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  );

  return res.status(200).json({ test });
}
