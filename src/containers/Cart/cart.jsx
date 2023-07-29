import React from 'react'
import { AppContext } from '../../context/context';
import { Box, Button, Typography } from '@mui/material';
import ItemCart from '../../components/Item-Cart/ItemCart';
import Swal from 'sweetalert2';


const Cart = () => {
  const { carrito, removeProduct, clearCart } = React.useContext(AppContext);
  const total = carrito.reduce((acc, item) => acc + item.precioUnitario * item.cantidad, 0);
  const handleFinalizarCompra = () => {
    Swal.fire({
      title: '¡Ya casi estamos!',
      html:
        '<input type="text" id="name" class="swal2-input" placeholder="Nombre">' +
        '<input type="text" id="lastName" class="swal2-input" placeholder="Apellido">' +
        '<input type="email" id="email" class="swal2-input" placeholder="Email">' +
        '<input type="tel" id="phone" class="swal2-input" placeholder="Teléfono">' +
        '<input type="text" id="cardNumber" class="swal2-input" placeholder="Número de tarjeta">',
      focusConfirm: false,
      preConfirm: () => {
        const name = document.getElementById('name').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const cardNumber = document.getElementById('cardNumber').value;
        return { name, lastName, email, phone, cardNumber };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Compra realizada',
          text: `El total de la compra es: $${total}`,
          icon: 'success',
        });
        clearCart();
      }
    });
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

