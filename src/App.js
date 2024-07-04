import React, {useState, useEffect} from 'react';

import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {
  // definir el state
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true)
  const [gastos,guardarGastos] = useState([]);
  const [gasto, guardarGasto] =useState({}) // todo - el objeto de formulario pasa aqui
  const [creargasto, guardarCrearGasto] = useState(false)
  // UseEffect que actualiza el restante

  // TODO Cuando se le guarda a useState gasto  el objeto se ejecuta esto de abajo
  useEffect(() => {
    // *Agrega el nuevo presupuesto
    if (creargasto) { // como pasa true luego de enviar el formulario
      guardarGastos([//recorcar cuando es arroglo agregar corchetes
      ...gastos,
      gasto
    ])
    // *Resta del presupuesto actual
    const presupuestoRestante = restante - gasto.cantidad;
    guardarRestante(presupuestoRestante)


    // Resetear a false
    guardarCrearGasto(false)
    }

 
  },[gasto,creargasto,gastos,restante]); // como referencia le pasamos gasto, cuando cada uno de ellos cambie , son dependencias



// Cuando agregamos un nuevo gasto
// const agregarNuevoGasto = gasto => {

// }

  return (
      <div className='container'>
        <header>
          <h1>Gasto Semanal</h1>
          <div className='contenido-principal contenido'>
            { mostrarpregunta ? // a esto se le conoce carga condicional del componente
            ( 
              <Pregunta
                guardarPresupuesto={guardarPresupuesto}
                guardarRestante={guardarRestante}
                actualizarPregunta = {actualizarPregunta}
            />
            ) : ( // en caso de que sea false se mostrara este contenido
              <div className='row'>
                  <div className='one-half column'>
                    <Formulario 
                      guardarGasto = {guardarGasto}
                      guardarCrearGasto = {guardarCrearGasto}
                    /> 
                  </div>
                  <div className='one-half column'>
                    <Listado
                    gastos = {gastos}
                    />
                    <ControlPresupuesto
                    presupuesto =  {presupuesto}
                    restante = {restante}
                    
                    />
                  </div>
              </div>
             )
            }
         

         
          </div>
          
        </header>
        
      </div>
  );

}


export default App;
