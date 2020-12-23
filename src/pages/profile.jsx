import React, { useState } from 'react';
import { Schedule } from "../components/schedule";
import { BasicData } from "../components/basicData";
import { ContactData } from "../components/contactData";
import { Data } from "../components/data";
import './profile.css';

export const Profile = () => {
    return(
    <div>
        <div className="row mb-3">
            <Data/>
        </div>
        
        <div className="Horario boxed">
            <Schedule/>
        </div>
    </div>
    
    );
}