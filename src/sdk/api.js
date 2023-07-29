export const getProducts = (producto, limit, id) => {
  
  if (limit) {
    return fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${producto}&limit=${limit}`);
  }
  return fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${producto}`);
};

export const getProduct = (id) =>{
    return fetch(`https://api.mercadolibre.com/items/${id}`);
  
}





 