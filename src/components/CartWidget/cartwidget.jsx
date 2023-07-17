import React from 'react';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

function CartWidget({cartQuantity}) {
    return (
      <IconButton>
        <Box>
          <Link to={`/cart`}>
            <Badge badgeContent={cartQuantity} color="primary">
            <ShoppingCartIcon color="action" />
          </Badge>
          </Link>
        </Box>
      </IconButton>
    );
  }
  export default CartWidget;

  