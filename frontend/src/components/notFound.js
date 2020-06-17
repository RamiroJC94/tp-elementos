import React from 'react';
import { Link } from 'react-router-dom';
import travolta from '../imagen/travolta.gif'
import '../styles/notFound.css'
import {withRouter}from 'react-router-dom';
 class NotFoundPage extends React.Component{
    render(){
        return (
          <div className="notFound">
            <div>
                <img src={travolta} alt="travolta gif" />
            </div>
            <div >
                <h1 className="not">404 Page Not Found</h1>
                <Link id="irInicio" to="/"> Ir al inicio </Link>
                <Link to="/notFound/addMovies">Agregar Pelicula</Link>
            </div>

          </div>
        );
    }
}
export default withRouter(NotFoundPage)
