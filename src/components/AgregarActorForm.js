import React, { Fragment } from 'react';

const AgregarActorForm = () => {
    
    const limpiarForm = (e) => {
        e.preventDefault();

        if(e.target.nombre.value === '' || e.target.nacimiento.value === '' || e.target.sexo.value === '' || e.target.foto.value === null || e.target.foto.value === ''){
            const err = document.querySelector('#errores');
            const h4 = document.createElement('h4');
            h4.classList = 'text-danger';
            h4.appendChild(document.createTextNode('Debe rellenar todos los campos.'));
            err.appendChild(h4);

            setTimeout(function(){
                err.firstChild.remove();
            }, 3000);
            return false;
        }
    }

    const agregarActor = async (e) => {

        if(limpiarForm(e) === false){

        } else{
            const data = new FormData();
            const imagedata = e.target.foto.files[0];
            data.append("nombre", e.target.nombre.value);
            data.append("nacimiento", e.target.nacimiento.value);
            data.append("sexo", e.target.sexo.value);
            data.append("foto", imagedata);
            console.log(data.get('foto'));
                await fetch("http://localhost:4000/actores", {
                method: "POST",
                body: data
                }).then(function (res) {
                    if (res.status == 200) {
                        document.querySelector('form').reset();
                        const err = document.querySelector('#errores');
                        const h5 = document.createElement('h5');
                        h5.classList = 'text-success';
                        h5.appendChild(document.createTextNode('Se agrego el actor correctamente.'));
                        err.appendChild(h5);

                        setTimeout(function(){
                            err.firstChild.remove();
                        }, 3000);
                    } else if (res.status == 406) {
                        const err = document.querySelector('#errores');
                        const h5 = document.createElement('h5');
                        h5.classList = 'text-danger';
                        h5.appendChild(document.createTextNode('Lo sentimos, ocurrió un error.'));
                        err.appendChild(h5);
            
                        setTimeout(function(){
                            err.firstChild.remove();
                        }, 3000);
                    }
                }, function (e) {
                alert("Error enviando formulario!");
            });
        }
    }
    
    return ( 
        <div className="card">
            <div className="card-header fondo-azul text-white text-center">
                <i className="fas fa-user-plus"></i><h3>Registro de actores</h3>
                <div id="errores"></div>
            </div>
            <div className="card-body">
                <form onSubmit={agregarActor} method="POST" encType="multipart/form-data" className="mt-4">
                <div className="form-group">
                    <label htmlFor="nombre">Nombre Completo</label>
                    <input type="text" className="form-control" id="nombre" name="nombre" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label htmlFor="nacimiento">Fecha nacimiento</label>
                    <input type="date" className="form-control" id="nacimiento" name="nacimiento" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label htmlFor="sexo">Sexo</label>
                    <select name="sexo" className="form-control">
                        <option value="M">M</option>
                        <option value="F">F</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="foto">Seleccione una foto:</label><br/>
                    <input accept="image/*" type="file" id="foto" name="foto" />
                </div>
                <div className="text-center">
                    <button className="btn btn-success" type="submit"><i className="fas fa-plus-circle"></i>
                    &nbsp; Agregar</button>
                </div>
            </form>
            </div>
        </div>
    );
}
 
export default AgregarActorForm;