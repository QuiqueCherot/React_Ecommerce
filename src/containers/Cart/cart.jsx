import React from 'react'
import { AppContext } from '../../context/context';
import { Box, Button, Typography } from '@mui/material';
import ItemCart from '../../components/Item-Cart/ItemCart';
import Swal from 'sweetalert2';


const Cart = () => {
  const { carrito, removeProduct } = React.useContext(AppContext);
  const handleFinalizarCompra = () => {
    Swal.fire({
      title: 'Iniciar sesión',
      html:
        '<input type="email" id="email" class="swal2-input" placeholder="Email">' +
        '<input type="password" id="password" class="swal2-input" placeholder="Contraseña">',
      focusConfirm: false,
      preConfirm: () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        return { email, password };
      },
    })
  };
  return (
    <Box>
      {carrito.length === 0 ? (
        <Typography variant="h5" sx={{ textAlign: 'center', mt: 20 }}>
          No hay productos agregados.
        </Typography>
      ) : (
        <>
          {carrito.map((carritoItem, index) => (
            <ItemCart data={carritoItem} key={index} removeProduct={removeProduct} />
          ))}
          <Box sx={{
            display:'flex',
            justifyContent: 'center'
          }}>
            <Button onClick={handleFinalizarCompra} variant="contained" color="primary">
              Finalizar compra
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

      export default Cart;

