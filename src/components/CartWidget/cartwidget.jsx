import React from 'react';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';

function CartWidget({cartQuantity}) {
    return (
      <IconButton>
        <Badge badgeContent={cartQuantity} color="primary">
          <ShoppingCartIcon color="action" />
        </Badge>
      </IconButton>
    );
  }
  export default CartWidget;

  