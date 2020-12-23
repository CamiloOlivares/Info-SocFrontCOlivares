import React, { useState } from 'react';
import avatar4  from '../img/avatars/avatar4.jpeg'
import datos from "../img/datos.png";
import './data.css';

export const Picture = () =>{
    return(
        <div class="col-lg-4">
            <div class="card mb-3">
                <div class="card-body-picture text-center shadow">
                    <img class="rounded-circle ps-80 mb-3 mt-4" src={avatar4} />
                </div>
            </div>
            <img src={datos}/>
        </div>
    );
}