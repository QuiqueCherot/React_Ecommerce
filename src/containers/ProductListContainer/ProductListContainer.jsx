import { Box, Card, CardContent, CardMedia, CircularProgress, Rating, Typography } from '@mui/material';
import React from 'react';
import { fetchProducts } from '../../sdk/api';

const ProductListContainer = ({ selectedPage}) => {
  const [products, setProducts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await fetchProducts(selectedPage);
        setProducts(productsData);
      } catch (error) {
        console.log('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    if (selectedPage) {
      fetchData();
    }
  }, [selectedPage]);

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '5px',
        position: 'absolute',
        top: '100%',
        left: 0,
        backgroundColor: 'white',
        width: '100%',
        mt: '2px',
      }}
    >
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
        products.map((product) => (
          <Card
            key={product.id}
            sx={{ maxWidth: 345 }}
          >
            <CardMedia sx={{ height: 450, width: 350 }} image={product.image} title={product.title} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ${product.price}
              </Typography>
              <Rating name="half-rating-read" defaultValue={product.rating.rate} precision={0.5} readOnly />
            </CardContent>
          </Card>
        ))
      )}
    </Box>
  );
};

export default ProductListContainer;

