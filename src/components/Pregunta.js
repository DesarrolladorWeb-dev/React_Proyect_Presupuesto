import React, {Fragment, useState} from "react";
import PropTypes from 'prop-types'
import Error from "./Error";
const Pregunta = ({guardarPresupuesto, guardarRestante,actualizarPregunta}) => {

    // definir el state
    const [cantidad , guardarCantidad] = useState(0)
    const [error, guardarError] = useState(false)
    // Funcion que lee el presupuesto 
    const definirPresupuesto = e => {
        guardarCantidad(
            parseInt(e.target.value, 10 ) // base 10 , vemos que se agrega en el state
        )
        //* cuando letras de la consola en negro es string
    }
    // Submit para definir el presupuesto
    const agregarPresupuesto = e => {
            e.preventDefault();
            // Validar 
            if (cantidad < 1 || isNaN(cantidad)) {  // y en caso de que no sea un numero lo que el usuario coloca
                guardarError(true) // aqui mostrara el error
                return
            }

            // si se pasa la validacion 
            guardarError(false)
            guardarPresupuesto(cantidad)
            guardarRestante(cantidad)
            actualizarPregunta(false)

    }
    return ( 

        <Fragment>
            <h1>Coloca tu presupuesto</h1>
            {/* ternario  motraremos los mensajes  : error puede ser false o true*/
                error ? <Error 
                // le enviamos un prop paraque sea reutilizable
                mensaje = "El Presupuesto es Incorrecto"
                /> : null  
            }
            <form
                onSubmit={agregarPresupuesto}
            >
                <input 
                type="number" 
                className="u-full-width"
                placeholder="Coloca tu presupuesto"
                onChange={definirPresupuesto}
                />
                <input 
                type="submit" 
                className="button-primary u-full-width"
                value='Definir Presupuesto'
                />
            </form>
        </Fragment>
     );
}

Pregunta.propTypes = { 
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired
 } 
export default Pregunta;