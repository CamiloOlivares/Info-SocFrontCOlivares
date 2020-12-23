import React,{useState} from 'react';
//import './asistencia.css';
import Course from "../components/courses";

export const SelectCourse = () => {
    const data = [
        {
            "nombre":"Informatica y sociedad",
            "Dia":"Miercoles",
            "Bloque":"11:30"
        },
        {
            "nombre":"Informatica y sociedad",
            "Dia":"Jueves",
            "Bloque":"9:45"
        },
        {
            "nombre":"Estructura de datos",
            "Dia":"Martes",
            "Bloque":"9:45",
        },
        {
            "nombre":"Lab Estructura de datos",
            "Dia":"Martes",
            "Bloque":"11:30"
        }
    ];
    let docente = "Mauro San Martin";
    return(
    <div className="Asistencia boxed">
        <div className="card shadow mb-5 ">
            <div className="card-header py-3">
                <p className="col text-primary m-0 font-weight-bold aleft">Cursos {docente}</p>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col">
                        <div className="table-responsive">
                            <Course data = {data} />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
        
    );
}