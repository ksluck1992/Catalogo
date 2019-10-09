import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Añadir(){
    return <h2> Añadir</h2>
  }
  
  
  function formulario(){
      return(
  <Link to="/Añadir"> + Añadir </Link>
      )
  }

  export default formulario;