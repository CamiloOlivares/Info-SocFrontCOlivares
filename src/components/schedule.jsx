import React, { useState } from 'react';
import './schedule.css';

export const Schedule = () =>{
    return(
        <div className="card shadow mb-5">
            <div className="card-header py-3">
                <p className="text-primary m-0 font-weight-bold">Horario</p>
            </div>
            <div className="card-body">
                {/* <div className="row">
                    <div className="col"><img className="img-fluid" src="assets/img/horario.png"></div>
                </div> */}
                <div className="row">
                    <div className="col">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Bloques</th>
                                        <th>Lunes</th>
                                        <th>Martes</th>
                                        <th>Miercoles</th>
                                        <th>Jueves</th>
                                        <th>Viernes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>08:00 09:30</td>
                                        <td>Evaluacion de proyectos</td>
                                        <td>Contabil. general y costos</td>
                                        <td>Contabil. general y costos</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>09:45 11:15</td>
                                        <td></td>
                                        <td>Aplicaciones internet</td>
                                        <td>Ingenieria de Software 2</td>
                                        <td>Informatica y sociedad</td>
                                        <td>Evaluacion de proyectos</td>
                                    </tr>
                                    <tr>
                                        <td>11:30 13:00</td>
                                        <td></td>
                                        <td>Aplicaciones internet</td>
                                        <td>Informatica y sociedad</td>
                                        <td>Ingenieria de Software 2</td>
                                        <td>Aplicaciones internet</td>
                                    </tr> 
                                    <tr>
                                        <td>13:00 14:30</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>14:30 16:00</td>
                                        <td>Comun. de Datos y Redes 2</td>
                                        <td>Ingenieria de Software 2</td>
                                        <td></td>
                                        <td>Comun. de Datos y Redes 2</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>16:15 17:45</td>
                                        <td></td>
                                        <td>Comun. de Datos y Redes 2</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>18:00 19:30</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>19:30 21:00</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}