import React, {Fragment} from 'react';
import ProductCard from './ProductCard';

function List({ productdata }) {
    return(
        <Fragment>
            <h1>Lista de productos</h1>
            <Grid container spacing={24} justify="center"> 
                {productdata.map((product, index) => {
                    return <ProductCard name={product.name} img src = '/images/${image}' />
                })} 
            </Grid>   
        </Fragment>
    );
}

export default List; 
