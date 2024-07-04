import React from 'react'
import Gasto from './Gasto';
import PropTypes from 'prop-types'

const Listado = ({gastos}) => (  
    <div className='gastos-realizados'>
        <h2>Listado</h2>
        {gastos.map(gasto => ( // usamos el (entreparentesis como return)
            <Gasto
            // pero cuando estas iterando de esta forma tienes que pasarle un key  que sea unico
            key = {gasto.id}
            // le pasaremos cada uno de los gastos del array  
            gasto= {gasto}

            />
        ))}
    </div>

    );

 Listado.propTypes = { 
    gastos: PropTypes.array.isRequired
 } 


export default Listado;