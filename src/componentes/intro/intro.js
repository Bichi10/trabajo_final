import React from 'react';
import './intro.css';
import Bootstrapcarousel from '../carousel/Bootstrapcarousel';

const Intro = ({ titulo }) => {
    return(
        
    <div className="contenedorImagen">
            <h1 className='h1'> {titulo} </h1>
    <Bootstrapcarousel />

    </div>
)
}

export default Intro;

/*
    <img src={icon} className="icon" alt="Foto perfil "/>
    <CustomButton color="red" texto="Botón intro" ></CustomButton>
    <CustomButton color="blue" texto="Botón intro" ></CustomButton>
*/