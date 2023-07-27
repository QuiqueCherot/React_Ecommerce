import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/context";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const ItemCard = ({ data }) => {
  const { thumbnail, title, price, initial_quantity } = data;
  const [counter, setCounter] = React.useState(1);
  const { addProduct, carrito, setCarrito } = React.useContext(AppContext);

  const addCarrito = ()=>{
      
    const existingProduct = carrito.find((product) => product.id === data.productID);
  
    if (existingProduct) {
      const updatedProducts = carrito.map((product) =>
        product.id === data.productID ? { ...product, cantidad: product.cantidad + 1 } : product
      );
      setCarrito([
        ...carrito.filter((product) => product.id !== data.productID),
        ...updatedProducts,
      ]);
    } else {
    addProduct({
      id: data.productID,
      producto: title,
      image: thumbnail,
      precioUnitario: price,
      cantidad: counter,
    });
  };
}
  const handleAdd = () => {
    if (counter < initial_quantity) {
      setCounter(counter + 1);
    }
  };

  const handleRemove = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center'
      }}
    >
      <Card
        sx={{
          maxWidth: 345,
          margin: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardMedia
          sx={{ 
            height:300,
            width: 200,
            objectFit: 'scale-down',
    objectPosition: 'center',           
          }}
          image={data.thumbnail}
          title={data.title}
        />
        <CardContent sx={{
          display:'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 2
        }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {data.title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: 10,
              alignItems: "center",
            }}
          >
            <Typography variant="body1" color="text.secondary">
              ${data.price}
            </Typography>
            <Link
              to={`/item/${data.productID}`}
              style={{ textDecoration: "none" }}
            >
              Ver detalle
            </Link>
          </Box>
          <Box sx={{
            display:'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            
          }}>
            <Button
              sx={{
                backgroundColor: "#007bff",
                color: "white",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                "&:hover": {
                  backgroundColor: "#0056b3",
                },
              }}
              onClick={addCarrito}
            >
              Agregar al Carrito
            </Button>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <IconButton onClick={handleRemove} color="secondary">
                <RemoveIcon />
              </IconButton>
              <Typography variant="body2" color="text.secondary">
                {counter}
              </Typography>
              <IconButton onClick={handleAdd} color="primary">
                <AddIcon />
              </IconButton>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ItemCard;
