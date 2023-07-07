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

export const getProducts = (producto, limit, id) => {
  
  if (limit) {
    return fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${producto}&limit=${limit}`);
  }
  return fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${producto}`);
};

export const getProduct = (id) =>{
    return fetch(`https://api.mercadolibre.com/items/${id}`);
  
}





 