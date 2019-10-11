import react from 'react';

class guardar extends Component{
    state = {
        Nombre: '',
        Descripcion: '',
        Imagen: '',
    } 
    componentDidMount() {
        axios.get('ws/rest/productos')
    }
    .then(res => {
    }
    const productos = res.data.map(productos => ({value:productos_id,name : productos.name}))
    this.setState({productos:res.data});
})
    .catch(err =>{
        console.log(err);
    } );

    render
    (
        <TextField
        id="standard-name"
        label = "nombre"
        value = {task.name || ''}
        onChange={this.handleChange('name')}
        margin = "normal"
        />
    )
    

    
    return(
        axios.post('/producto', {
            params{
            Nombre: '',
            Descripcion: 'Flintstone'
        }
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (err) {
            console.log(err);
          });


    );
}