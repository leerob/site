export default async (_, res) => {
  const API_KEY = process.env.GUMROAD_API_KEY;
  const response = await fetch(`https://api.gumroad.com/v2/products/sDpG`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/json'
    },
    method: 'GET'
  });

  const { product } = await response.json();
  const sales = product.sales_usd_cents / 100;

  return res.status(200).json({ sales });
};
