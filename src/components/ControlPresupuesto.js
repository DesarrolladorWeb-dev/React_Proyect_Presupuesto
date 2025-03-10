// Dependencias
import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

// ARCHIVOS
import { revisarPresupuesto} from '../helpers'


const ControlPresupuesto = ({presupuesto , restante}) => {
    return (  
        <Fragment>
            {/* // esto se mantendra azul */}
            <div className='alert alert-primary'> 
                Presupuesto : $ {presupuesto}
            </div>
            <div className={revisarPresupuesto(presupuesto, restante) }>
                Restante : $ {restante}
            </div>
        </Fragment>



    );
} 
 
ControlPresupuesto.propTypes = { 
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
 } 
export default ControlPresupuesto;