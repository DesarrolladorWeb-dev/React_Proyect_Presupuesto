import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Error from './Error'
import shortid from 'shortid'

const Formulario = ({guardarGasto, guardarCrearGasto}) => {
    const [nombre, guardarNombre] = useState('')
    const [cantidad, guardarCantidad] = useState(0)
    const [error, guardarError] = useState(false);



    // cuando el usuario agrega un gasto
    const agregarGasto = e => { 
        e.preventDefault()
        // Validar 
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){ //trim quita espacios
            guardarError(true)
            return
        }
        // Construir el gasto
        guardarError(false)
        // pasar el gasto al componente principal
        const gasto = {
            nombre, // aqui se le envia los states
            cantidad, // aqui se le envia los states
            id: shortid.generate() // y se le crea un id
        }
        console.log(gasto)
        //pasar el gasto al componente principal
        guardarGasto(gasto)
        // Una ves que se genere el gasto 
        guardarCrearGasto(true)

        // resetear formulario
        guardarNombre('')
        guardarCantidad(0)
     
    }
    return (  
        <form
        onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aqui</h2>
            {
                error ? <Error mensaje="Ambos campos son obligatorios o Presupuesto Incorrecto" /> : null 
            }
            <div className='campo'>
                <label > Nombre Gasto</label>
                <input 
                type="text" 
                className='u-full-width'
                placeholder='Ej. Transporte'
                value = {nombre}
                onChange={e => guardarNombre(e.target.value)}
                />
            </div>
            <div className='campo'>
                <label > cantidad Gasto</label>
                <input 
                type="number" 
                className='u-full-width'
                placeholder='Ej. 300'
                value={cantidad}
                // Parce int para quitar la coma decimal
                onChange={e => guardarCantidad(parseInt(e.target.value))}
                />
            </div>
            <input 
            type="submit"
            className='button-primary u-full-width' 
            value="Agregar Gasto"/>
        </form>

    );
}

// guardarGasto, guardarCrearGasto
Formulario.propTypes = { 
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
 } 
export default Formulario;
