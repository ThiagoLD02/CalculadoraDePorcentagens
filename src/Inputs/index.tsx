import React, { useState } from 'react';
import {Formik,Form,Field} from 'formik';
import styles from './styles.module.css';
import Calculator from '../Calculator';

function Inputs(){
  
  const [showInput,setShowInput] = useState(true);
  const [values,setValues] = useState([0]);

  function handleSubmit(vals:submit){

    values.pop();
    values.push(vals.input1);
    values.push(vals.input2);
    values.push(vals.input3);
    values.push(vals.input4);
    values.push(vals.input5);
    values.push(vals.input6);
    values.push(vals.input7);
    values.push(vals.input8);
    setShowInput(false);
  }



  interface submit {
    input1:number,
    input2:number,
    input3:number,
    input4:number,
    input5:number,
    input6:number,
    input7:number,
    input8:number,
  }



  const initialVal = {
    input1:1,
    input2:2,
    input3:3,
    input4:4,
    input5:5,
    input6:6,
    input7:7,
    input8:8,
  };

  const inputs = 
    <div className={styles.inputBox}>
        <h1>Por favor, entre com os valores: </h1>
        <div className={styles.inputButtons}>
          <Formik initialValues={initialVal} onSubmit={handleSubmit}>
            <Form>
              <div className={styles.fields}>
                <Field  name="input1" type="number" className={styles.input} placeholder="1"  />
                <Field  name="input2" type="number" className={styles.input} placeholder="2"  />
                <Field  name="input3" type="number" className={styles.input} placeholder="3"  />
                <Field  name="input4" type="number" className={styles.input} placeholder="4"  />
                <Field  name="input5" type="number" className={styles.input} placeholder="5"  />
                <Field  name="input6" type="number" className={styles.input} placeholder="6"  />
                <Field  name="input7" type="number" className={styles.input} placeholder="7"  />
                <Field  name="input8" type="number" className={styles.input} placeholder=""  />
              </div>
              <button type="submit" className={styles.submitInput} >Enviar </button>
            </Form> 
            
          </Formik> 
        </div>
    </div>


  return(
    <div>
      
      { showInput ? inputs: <Calculator  num = {values} />   }

    </div>
    
  )
}






export default Inputs;
