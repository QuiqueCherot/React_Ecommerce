import { Card } from '@mui/material';
import React, {useEffect} from 'react'
import { fetchProducts } from '../../sdk/api';

//const products = [];

const ItemListContainer = ({ greeting }) => {
    useEffect(() => {
      fetchProducts()
        .then((products) => {
          console.log(products);
          products.push(products);
        })
        .catch((error) => {
          console.error('Error al obtener los productos:', error);
        });
    }, []);
  
    return (
      <div>
        <Card>
          <title ></title>
        </Card>
      </div>
    );
};

export default ItemListContainer;