import React, { Fragment } from 'react';

const VerActores = () => {

    obtenerActores();

    async function obtenerActores(){
        await fetch("http://localhost:4000/actores", {
        method: "GET",
        }).then(function (res) {
            if (res.status == 200) {
                console.log(res.status);
                res.json().then((datos)=>{
                    const tbody = document.getElementById('cuerpo');
                    datos.map(function(dato){

                        let i = dato.nacimiento.indexOf('T');
                        let fecha = dato.nacimiento.substring(0,i);

                        const tr = document.createElement('tr');

                        const td1 = document.createElement('td')
                        td1.textContent = dato.idact;
                        const td2 = document.createElement('td')
                        td2.textContent = dato.nombre

                        const td3 = document.createElement('td')
                        td3.textContent = fecha;
                        const td4 = document.createElement('td')
                        td4.textContent = dato.sexo;
                        const td5 = document.createElement('td')

                        const img = document.createElement('img');
                        img.src="http://localhost:4000/"+dato.foto;
                        img.className = "img-thumbnail";
                        img.style.width = '150px';
                        td5.appendChild(img);

                        tr.appendChild(td1);
                        tr.appendChild(td2);
                        tr.appendChild(td3);
                        tr.appendChild(td4);
                        tr.appendChild(td5);
                        tbody.appendChild(tr);
                    });
                });
            } else if (res.status == 406) {
                console.log(res.status);
            }
        }, function (e) {
            alert("Error enviando formulario!");
        });
    }

    return ( 
        <Fragment>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Fecha de Nacimiento</th>
                        <th>Sexo</th>
                        <th>Foto</th>
                    </tr>
                </thead>
                <tbody id="cuerpo"></tbody>
            </table>
        </Fragment>
    );
}
 
export default VerActores;