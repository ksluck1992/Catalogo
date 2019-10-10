import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
 
function ProductCard ( name, classes ) {
    return (
        <Card className={classes.item}>
            <CardMedia
        className={classes.media}
        image="/images/camisilla_hombre.jpg"
        title="Camisilla para hombre"
      />
      />
            <CardContent>
                <Typography component="p" variant="h6">{name}</Typography>
                xxxxxxxxx
            </CardContent>
           
        </Card>
    );
}
 
export default withStyles({
    item:{
        minWidth: "350px",
        margin: "1em",
        boxSizing: "border-box"
    },
    media:{
        minWidth: "200px"
    }
})(ProductCard); 