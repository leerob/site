import Big from 'big.js';

const getProductSales = async (id) => {
  const response = await fetch(`https://api.gumroad.com/v2/products/${id}`, {
    headers: {
      Authorization: `Bearer ${process.env.GUMROAD_API_KEY}`,
      'Content-Type': 'application/json'
    },
    method: 'GET'
  });

  const { product } = await response.json();

  return new Big(product.sales_usd_cents).div(100);
};

export default async (_, res) => {
  const masteringNextSales = await getProductSales('sDpG');
  const react2025Sales = await getProductSales('TifxZ');

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  );

  return res.status(200).json({
    sales: masteringNextSales.plus(react2025Sales).toFixed(0)
  });
};
