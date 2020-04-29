import React, { Fragment } from 'react';

// Componentes
import Header from './Header';
import Footer from './Footer';
import AgregarActorForm from './AgregarActorForm';
import VerActores from './VerActores';

const Actores = () => {

    return (
        <Fragment>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <AgregarActorForm />
                    </div>
                    <div className="col-md-8">
                        <VerActores />
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}
 
export default Actores;