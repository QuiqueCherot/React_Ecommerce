import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { Box, Button, Card, CardContent, CardMedia, CircularProgress, Typography } from '@mui/material';
import { getProduct } from '../../sdk/api';

const ItemDetail = () => {
    const { id } = useParams();
    const [producto, setProducto] = React.useState({});
    const [isLoading, setIsLoading] = React.useState(true);
    const { thumbnail, title, price, initial_quantity } = producto;

    React.useEffect(() => {
        getProduct(id)
          .then((res) => res.json())
          .then((res) => {
            setProducto(res);
          })
          .catch((error) => {
            console.error('Error fetching products:', error);
          })
          .finally(() => {
            setIsLoading(false);
          }
            
          );
      }, [id]);
  return (

    <Box
        sx={{
          display: 'flex',
          gap: '2px',
          position: 'absolute',
          left: 0,
          backgroundColor: 'white',
          width: '100%',
          mt: '2px',
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
            <Card
            key={producto.id}
            sx={{
                maxWidth: 800,
                margin: 'auto',
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center'
            }}
            >
                <CardMedia sx={{ height: 500, width: 300}} image={thumbnail} title={title} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        ${price}
                    </Typography>
                    <Button>
                        <Link to={`/cart`}>Añadir al Carrito</Link>
                    </Button>
                </CardContent>
            </Card>
          )}
      </Box>
  )
}

export default ItemDetail;
