const URL_BASE = 'https://fakestoreapi.com';

async function get(endpoint) {
  const response = await fetch(`${URL_BASE}${endpoint}`);
  const data = await response.json();
  return data;
}

export const fetchProducts = async () => {
  const category = "men's clothing";
  const limit = 5;
  const endpoint = `/products/category/${encodeURIComponent(category)}?limit=${limit}`;
  return get(endpoint);
};


 