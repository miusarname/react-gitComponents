import React, { useEffect, useState } from 'react'
import Axios from "axios";
import "./style/slidebar.style.css";

export function Main() {
    const [toSearch, setToSearch] = useState('En proceso');
    const [elementosEnviados, setElementosEnviados] = useState([]);

    const headers = {
        'Authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2OTkxNDA0MDcsImV4cCI6MTY5OTE0NDAwN30.iVqw3BT98KHNuXqWkTR-1mM2N3cUZH5NYOv9mxb9eJE',
        'Accept-Version': '3.0.0'
    };

    useEffect(() => {
        Axios.get('http://localhost:5505/products/prendasStatus', { headers })
            .then(async (response) => {
                const data = await response.data;
                const filteredElements = data.responses.filter(element => element.Estado === toSearch);
                setElementosEnviados(filteredElements);
            })
            .catch(error => {
                console.error('Hubo un error al realizar la solicitud:', error);
            });
    }, [toSearch]); // Agregar 'toSearch' como dependencia para que se actualice al cambiar su valor



    return (
        <>
            <section class="main">
                <div class="main-top">
                    <h1>¡Lo nuevo!</h1>
                    <i class="fas fa-user-cog"></i>
                </div>
                <div class="main-skills">
                    <div class="card">
                        <i class="fas fa-file-invoice-dollar"></i>
                        <h3>Informe mes de Julio</h3>
                        <p>Ya esta listo el informe del mes de julio de 2023 </p>
                        <button>Ver más</button>
                    </div>
                    <div class="card">
                        <i class="fas fa-list"></i>
                        <h3>Ver empleados por municipio</h3>
                        <p>Ver todo los empleado junto con sus cargos por municipio/ciudad</p>
                        <button>Ver más</button>
                    </div>
                    <div class="card">
                        <i class="fas fa-truck-moving"></i>
                        <h3>Ordenes</h3>
                        <p>Mostrar los detalles de todas las órdenes junto con los nombres de los empleados y clientes asociados.</p>
                        <button>Saber más</button>
                    </div>
                    <div class="card">
                        <i class="fas fa-user-tie"></i>
                        <h3>Proveedores</h3>
                        <p>Mostrar todos los proveedores junto con la lista de insumos que suministran a la fábrica.</p>
                        <button>Saber más</button>
                    </div>
                </div>

                <section class="main-course">
                    <h1>Estado de algunas ordenes...</h1>
                    <div class="course-box">
                        <ul>
                            <li className={toSearch == 'En proceso' ? 'active' : ''} onClick={() => setToSearch('En proceso')}>
                            En proceso
                            </li>
                            <li className={toSearch == 'Nuevo' ? 'active' : ''} onClick={() => setToSearch('Nuevo')}>
                            Nuevo
                            </li>
                            <li className={toSearch == 'Listo para enviar' ? 'active' : ''} onClick={() => setToSearch('Listo para enviar')}>
                            Listo para enviar
                            </li>
                            <li className={toSearch == 'Enviado' ? 'active' : ''} onClick={() => setToSearch('Enviado')}>
                            Enviado
                            </li>
                            <li className={toSearch == 'Entregado' ? 'active' : ''} onClick={() => setToSearch('Entregado')}>
                            Entregado
                            </li>
                        </ul>
                        <div className="course">
                            {elementosEnviados.map((element, index) => {
                                return (
                                    <div key={index} className="box">
                                        <h3> {element["NombrePrenda"]}</h3>
                                        <p>{element["Estado"]}</p>
                                        <i className="fas fa-tshirt"></i>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}
