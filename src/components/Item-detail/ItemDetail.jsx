import React from 'react'
import { useParams } from 'react-router-dom';
import { Box, Button, Card, CardContent, CardMedia, CircularProgress, Typography } from '@mui/material';
import { AppContext } from '../../context/context';
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const ItemDetail = () => {
    const { id } = useParams();
    const [producto, setProducto] = React.useState({});
    const [isLoading, setIsLoading] = React.useState(true);
    const { thumbnail, title, price, initial_quantity } = producto;
    const [counter, setCounter] = React.useState(1);
    const { addProduct, carrito, setCarrito } = React.useContext(AppContext);
    

    const addItem = ()=>{
      if(producto.initial_quantity<=counter){
        return;
      }
      setCounter(counter + 1);    
    }

    const removeItem = ()=>{
      if(counter<=1){
        return;
      }
      setCounter(counter -1);
    }

    const addCarrito = ()=>{
      
      const existingProduct = carrito.find((product) => product.id === id);
    
      if (existingProduct) {
        const updatedProducts = carrito.map((product) =>
          product.id === id ? { ...product, cantidad: product.cantidad + 1 } : product
        );
        setCarrito([
          ...carrito.filter((product) => product.id !== id),
          ...updatedProducts,
        ]);
        producto.initial_quantity = producto.initial_quantity-counter;
      } else {
      addProduct({
        id: id,
        producto: title,
        image: thumbnail,
        precioUnitario: price,
        cantidad: counter
      });
      producto.initial_quantity = producto.initial_quantity-counter;
    }
  }
  React.useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, 'productos');

    getDocs(productsCollection)
      .then((snapshot) => {
        const productos = snapshot.docs.map((doc) => doc.data());
        const productData = productos.find((product) => product.productID === id);

        if (productData) {
          setProducto(productData);
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
                    <Typography variant="body2" color="text.secondary">
                        Cantidad:{initial_quantity}
                    </Typography>
                    <Button onClick={ addCarrito}> Añadir al Carrito </Button>
                    <Box>
                      <Button variant="text" color="error" onClick={removeItem}>-</Button>
                      <Typography variant='p'>{counter}</Typography>
                      <Button variant="text" color='success' onClick={addItem}>+</Button>
                    </Box>
                </CardContent>
            </Card>
          )}
      </Box>
  )
}

export default ItemDetail;
