import React from 'react'
import { AppContext } from '../../context/context';
import { Box } from '@mui/material';
import ItemCart from '../../components/Item-Cart/ItemCart';


const Cart = () => {
  const { carrito } = React.useContext(AppContext);


  return (
    <Box>
        { carrito.map((carrito, index)=><ItemCart data={carrito} key={index}/>)}
        
    </Box>
  )
}

export default Cart;
