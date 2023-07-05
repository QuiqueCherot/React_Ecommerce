import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { Box, Button, Card, CardContent, CardMedia, CircularProgress, Typography } from '@mui/material';
import { getProduct } from '../../sdk/api';

const ItemDetail = () => {
    const { category,id } = useParams();
    const [producto, setProducto] = React.useState();
    const [isLoading, setIsLoading] = React.useState(true);
/*EL PROBLEMA QUE TENGO ES QUE ESTÁ TIRANDO ERRORES POR TODAS PARTES.... PENSE EN PRINCIPIO
SI LA LLAMADA ESTABA BIEN PERO RECIBO ACÁ UN ARRAY POR LO QUE PARA MI, TENEMOS UN PROBLEMA EN 
LA LLAMADA. HABRÍA QUE VER CÓMO EJECUTAR DE ÚLTIMA LLAMAMOS OTRA QUE PUEDE SER GETPRODUCT logre conseguir 
que aparezca category y ID por lo que estoy 100% seguro que el problema es el link de llamada. */
    React.useEffect(() => {
        getProduct(category,id)
          .then((res) => res.json())
          .then((res) => {
            setProducto(res.results);
            console.log(res.results);
            console.log(category + id);
          })
          .catch((error) => {
            console.error('Error fetching products:', error);
          })
          .finally(
            setIsLoading(false)
            
          );
      }, [id,category]);
  return (

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
            <Card
            key={producto.id}
            sx={{
                maxWidth: 345,
                margin: '10px',
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center'
            }}
            >
                <CardMedia sx={{ height: 200, width: 100}} image={producto.thumbnail} title={producto.title} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {producto.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        ${producto.price}
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
