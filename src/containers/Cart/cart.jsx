import React from 'react'
import { AppContext } from '../../context/context';
import { Box, Typography } from '@mui/material';
import ItemCart from '../../components/Item-Cart/ItemCart';


const Cart = () => {
  const { carrito, removeProduct } = React.useContext(AppContext);
  
  return (
    <Box>
      { carrito.length === 0 ? (
        <Typography variant='h5' sx={{
          textAlign: 'center',
          mt: 20
        }}>
          No hay productos agregados.
        </Typography>
      ) : (
        carrito.map((carritoItem, index) => (
          <ItemCart data={carritoItem} key={index} removeProduct={removeProduct} />
        ))
      )}
    </Box>
  );
};

export default Cart;

