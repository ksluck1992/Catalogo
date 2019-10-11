import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
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
      <Card className={classes.card}>
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
          image="/static/images/cards/paella.jpg"
          title="David"
        />
        <CardContent>
          <Typography component="p">
            Amado David Coronel
            21 Años de edad , soltero
          </Typography>
        </CardContent>
      </Card>
      
      <Card className={classes.card}>
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
        image="/static/images/cards/paella.jpg"
        title="David"
      />
      <CardContent>
        <Typography component="p">
          Amado David Coronel
          21 Años de edad , soltero
        </Typography>
      </CardContent>
    </Card>
      <Card className={classes.card}>
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
        image="/static/images/cards/paella.jpg"
        title="David"
      />
      <CardContent>
        <Typography component="p">
          Amado David Coronel
          21 Años de edad , soltero
        </Typography>
      </CardContent>
    </Card>
      <Card className={classes.card}>
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
        image="/static/images/cards/paella.jpg"
        title="David"
      />
      <CardContent>
        <Typography component="p">
          Amado David Coronel
          21 Años de edad , soltero
        </Typography>
      </CardContent>
    </Card>
    </div>
    );
  }
}

RecipeReviewCard1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard1);