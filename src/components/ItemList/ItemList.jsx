import React from 'react';
import ItemCard from '../Item-Card/ItemCard';
import { Box, CircularProgress } from '@mui/material';

const ItemList = ({items, isLoading}) => {
  return (
    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    }}>
      {isLoading ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            width: '100%',
            height: '100%',
          }}
        >
          <CircularProgress size={24} color="inherit" />
        </Box>
      ) : (
        items && items.map((item, index) => <ItemCard data={item} key={index} />)
      )
      }
    </Box>
  )
}

export default ItemList