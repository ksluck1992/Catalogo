import React, {Fragment} from 'react';
import { Grid, Card, Typography, CardMedia, CardContent } from '@material-ui/core';

//<ProductCard name={product.nombre} image={`/images/${product.image}`} />


function List({ productData }) {
    console.log(productData)
    return(
        <Fragment>
            <h1>Lista de productos</h1>
            <Grid container spacing={24} justify="center"> 
                {productData && productData.map((product, index) => {
                    console.log(product.image)
                    return (
                        <Card style={{width: 200}}>
                            <CardMedia 
                                style={{ height: 0, paddingTop: '56.25%'}}
                                image={`/images/alpargatas_hombre.jpg`}/>
                            <CardContent>
                                <Typography>{product.nombre}</Typography>
                                <Typography>{product.precio}</Typography>
                            </CardContent>
                        </Card>
                    )
                })} 
            </Grid>   
        </Fragment>
    );
}

export default List; 
