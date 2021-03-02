import React, { useState } from 'react';
import './App.css';
import Inputs from './components/Inputs';
import Calculator from './components/Calculator';

function App(){

  const [showInput,setShowInput] = useState(true);
  const [values,setValues] = useState<Number[]>([]);

  return(
    showInput ? <Inputs setShowInput={setShowInput} setValues={setValues} /> 
              : <Calculator num={values} setShowInput={setShowInput}/>
  )
}

export default App;
