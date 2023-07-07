import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

const dataCard = ({data }) => {
    
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
                    maxWidth: 345,
                    margin: '10px',
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center'
                }}
                >
                    <CardMedia sx={{ height: 200, width: 100}} image={data.thumbnail} title={data.title} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {data.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            ${data.price}
                        </Typography>
                        <Button>
                            <Link to={`/item/${data.id}`}>Ver detalle</Link>
                        </Button>
                    </CardContent>
                </Card>
        </Box>
    )
}

export default dataCard;