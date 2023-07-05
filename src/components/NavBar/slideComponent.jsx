import React from 'react'
import { Box } from '@mui/material'
import Slide from '@mui/material/Slide';
import { getProducts } from '../../sdk/api';
import { CircularProgress } from '@mui/material';
import ItemCard from '../Item-Card/ItemCard';
const LIMIT = 4;

const SlideComponent = ({selectedPage}) => {
  const [productos, setProductos] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  
  React.useEffect(() => {
    getProducts(selectedPage, LIMIT)
      .then((res) => res.json())
      .then((res) => {
        setProductos(res.results);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      })
      .finally(
        setIsLoading(false)
      );
  }, [selectedPage]);
     
  return (
    <Slide direction="right" in={true} mountOnEnter unmountOnExit>
      <Box
        sx={{
          display: 'flex',
          gap: '2px',
          position: 'absolute',
          top: '100%',
          left: 0,
          backgroundColor: 'white',
          width: '100%',
          mt: '2px',
          zIndex: 1
        }}
      >
        {isLoading ? (
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            width: '100%',
            height: '100%',

          }}>
            <CircularProgress size={24} color='inherit' />
          </Box>
        ) : (
          productos.map((product) => <ItemCard data={product} key={product.id} />)
          )}
      </Box>
    </Slide>
  )
}

export default SlideComponent;