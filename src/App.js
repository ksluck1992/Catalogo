import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SearchAppBar from './BarraBusqueda';
import ComplexGrid from  './ComplexGrid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import IntegrationTextField from './formulario';


function Home(){
  return <h2 style={{textAlign: 'center'}}>Home</h2>;
}
function About(){
  return <h2 style={{textAlign: 'center'}}>About</h2>;
}
function Llamar(){
return <h2 style={{textAlign: 'center'}}>Añadir Producto</h2>;

}


function Navegador(){
  return (
    <nav>
      <Paper>
         <List>
              <ListItem button>
              <Link to="/home">Home</Link>
          </ListItem>
          <Divider/>
          <ListItem button divider>
          <Link to="/about">About</Link>
          
              </ListItem>
              </List>
          </Paper>
        </nav>

    
  );
}

function App (){
  return (
    <div>
      <Router>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <header className = "App-header">   
            <SearchAppBar/>
            </header>
          </Grid>
          <Grid item xs = {2}> 
            <div>
              <nav>
                <Navegador/>
              </nav>
            </div>
          </Grid>
          <Grid item xs = {9}>
        <Switch>
          <Route path="/about">
            <Paper>
          <About/>
          </Paper>
          </Route>
          <Route path="/home">
            <Paper>
              <Home />
              <Button variant="contained">
              <Link to="/llamar">+ Añadir Producto</Link>
              </Button>
              <br/><br/>
              <ComplexGrid />
              <br/><br/>
              
            </Paper>
            </Route>
            <Route path="/llamar">
              <Paper>
                <h2 style={{textAlign: 'center'}}>Añadir Producto</h2>
              <IntegrationTextField/>
              <br/><br/>  <br/><br/><br/> 
              <Button variant="contained">Guardar</Button>
              </Paper>
          </Route>
        </Switch>
        </Grid>
        </Grid>
       
    </Router>
    
     </div>
  );
}

  export default App;
