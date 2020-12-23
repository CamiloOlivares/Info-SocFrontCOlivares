import React, { useState } from 'react';
import './basicData.css';

export const BasicData = () => {
    return(
        <div className="col">
            <div className="card shadow mb-3">
                <div className="card-header py-3">
                    <p className="text-primary m-0 font-weight-bold">Datos de Identificacion</p>
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-row">
                            <div className="col">
                                <div className="form-group"><label for="username"><strong>Correo</strong></label><input className="form-control" type="text" placeholder="colivaresa@alumnosuls.cl" name="username" readOnly={true}/></div>
                            </div>
                            <div className="col">
                                <div className="form-group"><label for="email"><strong>RUT</strong></label><input className="form-control" type="email" placeholder="19.492.582-4" name="email" readOnly={true}/></div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col">
                                <div className="form-group"><label for="first_name"><strong>Nombre</strong></label><input className="form-control" type="text" placeholder="Camilo" name="first_name" readOnly={true}/></div>
                            </div>
                            <div className="col">
                                <div className="form-group"><label for="last_name"><strong>Apellido</strong></label><input className="form-control" type="text" placeholder="Olivares" name="last_name" readOnly={true}/></div>
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    );
}