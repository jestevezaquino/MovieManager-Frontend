import React, { Fragment } from 'react';

const Header = () => {
    return (  
        <Fragment>
            <nav className="navbar d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 text-light border-bottom shadow-sm fondo-azul">
                <h5 className="my-0 mr-md-auto font-weight-normal">Gestor Peliculas</h5>
                <a className="text-white text-decoration-none" href="#">Actores</a>
                <a className="text-white text-decoration-none pl-md-4" href="#">Peliculas</a> 
            </nav>
        </Fragment> 
    );
}
 
export default Header;