import React, { Component } from 'react';
import axios from 'axios'; 
import List from './Container/List';
import { AppBar, Typography, Toolbar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

class ProductListContainer extends Component {
    state ={
        productData: [] 
    }

    componentDidMount() {
        console.log("componentDidMount");
        axios.get('ws/rest/producto') 
        .then( res => {
            //const results = res.data;
            console.log(res)
            this.setState({
                productData: res.data
            })
        })
        .catch(error => {
            console.log(error);
        });
    }

render () {
    const { productData } = this.state;
    console.log(productData)
    return(
    <>
    <List productData = {productData} />
    </>
        );

    }
}

export default ProductListContainer; 