import React, { Component } from 'react';
import axios from 'axios'; 
import List from '../components/List';
import AppNav from '../components/AppNav';
 
class ProductListContainer extends Component {
    state ={
        productData: [] 
    }
 
    componentDidMount() {
        axios.get('')
        .then( res => {
            const { results } = rest.data;
    
            this.setState({
                productData: results
            })
        })
        .catch(error => {
            console.log(error);
        });
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