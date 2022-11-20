import React, {useState} from "react";

let texto="texto informacion......";
const Ejemplo =()=>{
    const [nombre, setNombre] = useState ('Hermione');

    const cambiarnombre = () => {
        setNombre ('harry')
    }

    const [info, setinfo] = useState('');
    return(
        <div>
            <h2> Ejemplos</h2>
            <h3> {nombre} </h3>
            
            <button onClick={(cambiarnombre)}> cambiar nombre</button>
        
            <button onClick={()=> setNombre ('Harry')}> cambiar nombre</button>
     
            <button onClick={() => setinfo (texto)}>Mostrar texto</button>
        <p>{info}</p>
        </div>
    )
}

export default Ejemplo;