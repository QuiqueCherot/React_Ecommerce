import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'

const ItemCart = ({ data, removeProduct }) => {
const { producto, precioUnitario, cantidad, id, image} = data;
    return (

        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'center'
        }}>
            <Card
                key={id}
                sx={{
                    maxWidth: 400,
                    margin: '10px',
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'center',
                    alignItems:'center'
                }}
                >
                    <CardMedia sx={{ height: 200, width: 250}} image={image} title={producto} />
                    <CardContent sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        textAlign: 'center'
                        }}>
                        <Typography gutterBottom variant="h7" component="div">
                            {producto}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            ${precioUnitario}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Cantidad: {cantidad}
                        </Typography>
                        <Button onClick={()=>removeProduct(id)}>
                            Eliminar
                        </Button>
                    </CardContent>
                </Card>
        </Box>
    )
}

export default ItemCart;