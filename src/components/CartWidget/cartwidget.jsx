import React from 'react';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function CartWidget({cartQuantity}) {
  const navigate = useNavigate();

  const navegarCarrito = () => {
    navigate ('/cart');
  }
    return (
      <IconButton onClick={navegarCarrito}>
            <Badge badgeContent={cartQuantity} color="primary">
            <ShoppingCartIcon color="action" />
          </Badge>
        
      </IconButton>
    );
  }
  export default CartWidget;

  