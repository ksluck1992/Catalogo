import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
 
function ProductCard ( name, classes, image, ) {
    return (
        <Card className={classes.item}>
            <CardMedia 
            
             className={classes.media} image ={image}/>
            <CardContent>
            <FavoriteIcon />
                <Typography component="p" variant="h6">{name}</Typography>
                xxxxx 
            </CardContent>
           
        </Card>
    );
}
 
export default withStyles({


    item:{
        minWidth: "700px",
        maxWidth: "700px",
        margin: "20sem",
        textAlign: "center",
        boxSizing: "border-box"
    },
    media:{
        maxWidth: "300px"
    }
})(ProductCard); 