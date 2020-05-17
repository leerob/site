export default async (_, res) => {
  const API_KEY = process.env.BUTTONDOWN_API_KEY;
  const response = await fetch('https://api.buttondown.email/v1/subscribers', {
    headers: {
      Authorization: `Token ${API_KEY}`,
      'Content-Type': 'application/json'
    },
    method: 'GET'
  });

  const { count } = await response.json();

  return res.status(200).json({ count });
};
