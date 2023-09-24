import React, {useEffect, useState} from 'react'
import Actualizar_datos from './components/Actualizar_datos'
import Eliminar_cuenta from './components/Eliminar_cuenta'
import Registro_cuenta from './components/Registro_cuenta'
import Nueva_ficha from './components/Nueva_ficha';
import Actualizar_ficha from './components/Actualizar_ficha';
import Ficha_antropometrica from './components/Ficha_antropometrica';




function App() {
  useEffect(() => {
    document.title = 'Healthy Renewal';
  }, []);

  return (
   <Ficha_antropometrica/>
);

  
}

export default App;