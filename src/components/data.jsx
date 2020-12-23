import React, { useState } from 'react';
import { BasicData } from "../components/basicData";
import { ContactData } from "../components/contactData";
import { Picture } from "../components/picture";
import './data.css';

export const Data = () => {
    return(
        <div className="container-fluid">
            <h3 className="text-dark mb-4">
                Perfil
            </h3>
            <div className="row mb-3">
                <Picture/>
                <div className="col-lg-8">
                        <BasicData/>
                        <ContactData/>
                </div>
            </div>
        </div>
    );
}