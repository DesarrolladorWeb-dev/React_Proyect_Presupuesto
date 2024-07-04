import React from 'react'
import PropTypes from 'prop-types'

const Gasto = ({gasto}) => (//mostrar lo que le llega al componente

<li className='gastos'>
    <p>
        {gasto.nombre}
        <span className='gasto'>$  {gasto.cantidad} </span>
    </p>
</li>

)
Gasto.propTypes = { 
    gastos: PropTypes.object.isRequired
 } 
 
export default Gasto;