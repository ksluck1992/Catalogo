import React, { Component } from 'react';
import axios from 'axios'; 
import List from '../components/List';
import { AppBar, Typography, Toolbar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

class ProductListContainer extends Component {
    state ={
        productData: [] 
    }

    componentDidMount()
    axios.get('ingresar aqui la url de los productos') 
    .then res => {
        const { results } = rest.date;

        this.setState({
            productData: results
        })
    })
    .catch(error) => {
        console.log(error);
    })

}

render () {
    const { productData } = this.state;

    return(
    <>
    <AppNav /> 
    <List productData = {productData} />
    </> 

        );

    }
}

export default ProductListContainer; 