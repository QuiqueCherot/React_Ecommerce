import React from 'react'
import { Box, Card, CardContent, CardMedia, Rating, Typography } from '@mui/material'
import Slide from '@mui/material/Slide';
import { fetchProducts } from '../../sdk/api';


const SlideComponent = () => {
    const [productos, setProductos] = React.useState([]);
    React.useEffect(() => {
        const fetchData = async () => {
          try {
            const productsData = await fetchProducts();
            setProductos(productsData);
          } catch (error) {
            console.log('Error fetching data:', error);
          }
        };
      
        fetchData();
      }, []);
      
  return (
    <Slide direction="right" in={true} mountOnEnter unmountOnExit>
        <Box
                    sx={{
                    display: 'flex',
                    gap: '5px',
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    backgroundColor: 'white',
                    width: '100%',
                    mt: '2px'
                    }}
                >
                    {productos.map((product) => (
                        <Card key={product.id} sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 450, width: 350}}
                            image={product.image}
                            title={product.title}
                        />
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
                    ))}
                </Box>
    </Slide>
  )
}

export default SlideComponent;