import React from "react";
import { useForm } from "react-hook-form";
import "./contacto.css";


const Contacto = () => {
const { register, formState:{ errors}, watch ,handleSubmit } = useForm("");
const onSubmit = (data) =>{ 
  console.log(data);
}

  return (
<>
<h2 className="fondoh2"> Formulario </h2>
<form className="formu" onSubmit={handleSubmit(onSubmit)} >
  <div className="cajas">
    <label> Nombre </label>
    <input type="text" {...register('nombre', {
      required:true,
      maxLength:10
    })} />

    {errors.nombre?.type === 'required' && <p> El campo nombre es obligatorio </p>
    }
    {errors.nombre?.type ==='maxlength' && <p> El campo nombre debe tener menos de 10 caracteres</p>
    }
    

  </div>
  <div className="cajas">
    <label> Apellido </label>
    <input type="text" {...register('apellido',{ required:true
    
    })} />
  </div>
  <div className="cajas">
    <label> Email </label>
    <input type="text" {...register('email', {
      pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
    })} />


{errors.email?.type === 'pattern' && <p> El formato es incorrecto </p>
    }
  </div>

  <div className="cajatexto">
    <label className="descrip"> Escribile un mensaje para la seleccion </label>
    <textarea classname="cajatexto" id="content" name="content" cols="60" rows="10"/>
  </div>
  <div>
    <label className="label"> Quien va a ser el campeon del mundo </label>
    <select className="combo" {...register('selecciones')}>
      <option value="arg"> Argentina </option>
      <option value="bra"> Brasil </option>
      <option value="fra"> Francia </option>
      <option value="qat"> Qatar  </option>
      <option value="ecu"> Ecuador </option>
      <option value="sen"> Senegal </option>
      <option value="pib"> Paises Bajos </option>
      <option value="ing"> Inglaterra </option>
      <option value="eeuu"> Estados Unidos </option>
      <option value="ira"> Iran </option>
      <option value="gal"> Gales </option>
      <option value="ars"> Arabia Saudita </option>
      <option value="mex"> Mexico </option>
      <option value="pol"> Polonia </option>
      <option value="din"> Dinamarca </option>
      <option value="tun"> Tunez </option>
      <option value="aus"> Australia </option>
      <option value="esp"> España </option>
      <option value="cos"> Costa Rica </option>
      <option value="ale"> Alemania </option>
      <option value="jap"> Japon </option>
      <option value="bel"> Belgica </option>
      <option value="can"> Canada </option>
      <option value="mar"> Marruecos </option>
      <option value="cro"> Croacia </option>
      <option value="ser"> Serbia </option>
      <option value="sui"> Suiza </option>
      <option value="cam"> Camerun </option>
      <option value="por"> Portugal </option>
      <option value="gha"> Ghana </option>
      <option value="uru"> Uruguay </option>
      <option value="cds"> Corea del Sur </option>
    </select>
  </div>
  <input type="submit" value="Enviar" />
</form>
</>


);
};

export default Contacto;