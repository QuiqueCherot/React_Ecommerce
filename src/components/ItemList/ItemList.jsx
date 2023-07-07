import React from 'react';
import ItemCard from '../Item-Card/ItemCard';
import { Box, CircularProgress } from '@mui/material';

const ItemList = ({category, items, isLoading}) => {
  console.log(category)
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
        items && items.map((item) => <ItemCard data={item} key={item.id} />)
      )
      }
    </Box>
  )
}

export default ItemList