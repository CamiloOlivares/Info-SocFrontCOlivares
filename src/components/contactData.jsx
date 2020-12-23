import React, { useState } from 'react';
import './basicData.css';

export const ContactData = () => {
    return(
        <div className="col">
            <div className="card shadow mb-3">
                <div className="card-header py-3">
                    <p className="text-primary m-0 font-weight-bold">Datos de contacto</p>
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-row">
                            <div className="col">
                                <div className="form-group"><label for="username"><strong>Direccion</strong></label><input className="form-control" type="text" placeholder="Calle falsa, 123" readOnly={true}/></div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col">
                                <div className="form-group"><label for="first_name"><strong>Ciudad</strong></label><input className="form-control" type="text" placeholder="Coquimbo" readOnly={true}/></div>
                            </div>
                            <div className="col">
                                <div className="form-group"><label for="last_name"><strong>Telefono</strong></label><input className="form-control" type="text" placeholder="950XXXXX" readOnly={true}/></div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
        
    );
}