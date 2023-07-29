import React from 'react'
import { Box } from '@mui/material'
import Slide from '@mui/material/Slide';
import { CircularProgress } from '@mui/material';
import ItemCard from '../Item-Card/ItemCard';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const SlideComponent = ({selectedPage, handleMouseLeave}) => {
  const [productos, setProductos] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  
  React.useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, 'productos');

    getDocs(productsCollection)
      .then((snapshot) => {
        const productos = snapshot.docs.map((doc) => doc.data());
        const productData = [];
        productos.map((product) => product.category === selectedPage ? productData.push(product): "");

        if (productData) {
          setProductos(productData);
        } else {
          console.error('Product not found.');
        }
      })
      .catch((error) => {
        console.error('Error fetching product:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [selectedPage]);
     
  return (
    <Slide direction="right" in={true} mountOnEnter unmountOnExit onExited={handleMouseLeave}>
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
          productos.map((product, index) => <ItemCard data={product} key={index} />)
          )}
      </Box>
    </Slide>
  )
}

export default SlideComponent;