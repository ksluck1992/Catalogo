import React from 'react';

import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';


class Editar extends React.Component {
  state = {
    nombre:'',
    categoria : '',
    proveedor:'',
    fechacompra: '',
    descripcion:'',
  };


  handleChange = field => (e) => {
    // e.target.value -> tiene el valor de lo que escriben
    // e -> tiene el valor si están usando un datepicker
    switch(field){
    case 'nombre':
    this.setState({ nombre: e.target.value });// valior del handel change 
    break;
    case 'categoria':
    this.setState({ categoria: e.target.value });
    break;
    case 'proveedor':
    this.setState({ proveedor: e.target.value });
    break;
    case 'fechacompra':
    this.setState({ fechacompra: e.target.value });
    break;
    case 'descripcion':
    this.setState({ descripcion: e.target.value });
    break;
        }
    }
  
    render() {
    const { classes } = this.props;
    
    return (
        <div>
            
            <Grid container spacing = {8} style = {{justifyContent:'center'}}>
                <Grid item xs = {9}>
        <TextField
        
         label="Nombre"
         value={this.state.nombre}
         onChange={this.handleChange('nombre')}
         margin="normal"
         fullWidth
         />
          <br/>
         <TextField
         
         label="Categoria"
         value={this.state.categoria}
         onChange={this.handleChange('categoria')}
         margin="normal"
         fullWidth
         />
         <br/>
         <TextField
         
         label="Proveedor"
         value={this.state.proveedor}
         onChange={this.handleChange('proveedor')}
         margin="normal"
         fullWidth
         />
     <br/>
     <TextField
    
        label="Fecha de compra"
        type="date"
        defaultValue="2019-10-11"
        InputLabelProps={{
          shrink: true,
        }}
        fullWidth
      />
        <br/>
         <TextField
        
         label="Descripcion"
         value={this.state.descripcion}
         onChange={this.handleChange('descripcion')}
         margin="normal"
         fullWidth
         />
</Grid>
         </Grid>
         
    </div>
    );
  }
}
export default Editar ;