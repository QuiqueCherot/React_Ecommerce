const URL_BASE = 'https://fakestoreapi.com';

async function get(endpoint) {
  const response = await fetch(`${URL_BASE}${endpoint}`);
  const data = await response.json();
  return data;
}

export const fetchProducts = async (category) => {
  const limit = 4;
  const endpoint = `/products/category/${encodeURIComponent(category)}?limit=${limit}`;
  return get(endpoint);
};




 