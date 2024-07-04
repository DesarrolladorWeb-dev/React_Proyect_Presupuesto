import React from "react";
import PropTypes from 'prop-types'
// cuando va a dar por impricito el return no va a ver codigo js hacemos :
const Error = ({mensaje}) => (  
    <p className="alert alert-danger error">{mensaje}</p>

    );

    Error.propTypes = { 
        mensaje: PropTypes.string.isRequired
     } 
export default Error;