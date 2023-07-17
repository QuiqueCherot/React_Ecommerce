import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'

const ItemCart = ({ data }) => {
    return (

        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'center'
        }}>
            <Card
                key={data.id}
                sx={{
                    maxWidth: 400,
                    margin: '10px',
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'center',
                    alignItems:'center'
                }}
                >
                    <CardMedia sx={{ height: 200, width: 250}} image={data.image} title={data.producto} />
                    <CardContent sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        textAlign: 'center'
                        }}>
                        <Typography gutterBottom variant="h7" component="div">
                            {data.producto}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            ${data.precioUnitario}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Cantidad: {data.cantidad}
                        </Typography>
                    </CardContent>
                </Card>
        </Box>
    )
}

export default ItemCart;