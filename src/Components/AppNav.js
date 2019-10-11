import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, ToolBar, Typography } from  '@material-ui/core'; 
 
function AppNav (props) {

    const { classes } = props; 

    return (
        <AppBar className={classes.NavColor} position = "static">
            <ToolBar variant ="dense">
                <Typography varian ="h6" component= "p">Catalog App</Typography>
            </ToolBar>
        </AppBar> 
    );
}
 
export default withStyles({
NavColor:{
    backgroundColor: '#EF5350'  
}
 
})(AppNav); 
