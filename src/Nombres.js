import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 150,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class RecipeReviewCard1 extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid>
        <Grid item xs = {4}> 
      <Card className={classes.card} >
    
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              D
            </Avatar>
          }
          title="David"
         
        />
        <CardMedia
          className={classes.media}
          image="/imagenes_pers/descarga3.jpg" 
          title="David"
        />
        <CardContent>
          <Typography component="p">
            Amado David Coronel
            21 Años de edad , soltero
          </Typography>
        </CardContent>
        
      </Card>
      </Grid>
      
      
      <br/>
      <Grid item xs = {4}>
      <Card className={classes.card}>
     
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            J
          </Avatar>
        }
        title="Jordi"
       
      />
      <CardMedia
        className={classes.media}
        image="/imagenes_pers/descarga1.jpg" 
        title="Jordi"
      />
      <CardContent>
        <Typography component="p">
          Jordi Molist Bustamante
          20 Años de edad , soltero
        </Typography>
      </CardContent>
    </Card>
    </Grid>
  
    <br/>
    <Grid item xs = {4}>
      <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        title="Ronny"
       
      />
      <CardMedia
        className={classes.media}
        image ="/imagenes_pers/Ragnar.jpg" 
        title="Ronny"
      />
      <CardContent>
        <Typography component="p">
         Ronaldo Gonzalez 
          19 Años de edad , soltero
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    <br/>
    <Grid item xs = {4}>
      <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        title="Guille"
       
      />
      <CardMedia
        className={classes.media}
        image ="/imagenes_pers/yoda.jpeg" 
        title="Guille"
      />
      <CardContent>
        <Typography component="p">
         Guillermo Ramirez 
          19 Años de edad , soltero
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    
    <br/>
    <Grid item xs = {4}>
      <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            L
          </Avatar>
        }
        title="Lucas"
       
      />
      <CardMedia
        className={classes.media}
        image="/imagenes_pers/spidey-2.jpg" 
        title="Lucas"
      />
      <CardContent>
        <Typography component="p">
          Lucas Josias Barrios
          27 Años de edad , CASADO
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    </Grid>
    </div>
    );
  }
}

RecipeReviewCard1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard1);