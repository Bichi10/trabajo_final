import React from 'react';
import './intro.css';
import Bootstrapcarousel from '../carousel/bootstrapcarousel';

const Intro = ({ titulo }) => {
    return(
        
    <div className="contenedorImagen">
            <h1 className='h1'> {titulo} </h1>
    <Bootstrapcarousel />
    </div>
)
}

export default Intro;