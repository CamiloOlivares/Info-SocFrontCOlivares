import React from 'react';
import './asistencia.css';
import Datatable from "../components/datatable";

export const Asistencia = ({curso}) => {
    const data = [
        {
            "rut":"19.492.582-1",
            "nombre":"Camilo Olivares",
            "codigo carrera":"2534",
        },
        {
            "rut":"19.492.582-2",
            "nombre":"Camilo Olivares",
            "codigo carrera":"2534",
        },
        {
            "rut":"19.492.582-3",
            "nombre":"Camilo Olivares",
            "codigo carrera":"2534",
        },
        {
            "rut":"19.492.582-4",
            "nombre":"Camilo Olivares",
            "codigo carrera":"2534",
        }
    ];
    //let curso = "Informatica y sociedad";
    return(
    <div className="Asistencia boxed">
        <div className="card shadow mb-5 ">
            <div className="card-header py-3">
                <p className="col text-primary m-0 font-weight-bold aleft">Asistencia {curso}</p>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col">
                        <div className="table-responsive">
                            <Datatable data = {data}/>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="card-header py-3 aright">
                <button className="btn btn-primary btn-sm " type="submit">Subir Asistencia</button>
            </div>
        </div>
    </div>
        
    );
}

