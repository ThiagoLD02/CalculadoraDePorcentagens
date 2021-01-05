import React, { FunctionComponent, useState } from 'react';
import styles from './App.module.css';

const num = [0.79,0.82,0.84,0.86,0.87,0.89,0.90,0.99];

function App() {
  
  const [percentage,setPercentage] = useState<Array<number>>([]); // Percentage value
  const [money,setMoney] = useState<Array<number>>([]); // Result of the mathematical operation
  const [value,setValue] = useState<Array<number>>([]); // Input value
  const [status,setStatus] = useState(true); // True : show blank space; False: Show history

  

  
  function handleChange(event:any){ setValue(event.target.value) }

  function erase() { setPercentage([]);  setMoney([]); setValue([]); }

  function calc(param:Array<number){
    
    setPercentage(param);
    const sum:number = parseInt( value.toString() ) + value*param;
    
    setMoney(parseFloat(sum.toFixed(2)));
    setValue(parseFloat(sum.toFixed(2)));

    updateHistory();
  }

  function updateHistory(){
    
    
    
    
  }
  
 
  
  

  return (
   
    <div className={styles.box}>
       
      <div className={styles.content}>
        
        <div className={styles.display}>
          <div>{value}+{percentage}% = {money} </div>
        </div>
        <div className={styles.funcs}>
          <div>
              <button className={styles.opButtons} onClick={erase}>C</button> 
          </div>
          <div>
              <button className={styles.opButtons}>Apagar</button> 
          </div>
          <div>
              <button className={styles.opButtons}>=</button> 
          </div>
        </div>
        <div>
          <input 
            type="number"  placeholder="Digite aqui" className={ styles.input } 
            onChange = { handleChange }
          />
        </div>
        <div className={styles.buttons}>
          <div className={styles.divButtons}>
            <button className={styles.numBox} onClick ={ () => {  calc(num[0]) } }>
                {100*num[0]}%
            </button>
            <button className={styles.numBox} onClick ={ () => {  calc(num[1]) } }>
                {100*num[1]}%
            </button>
            <button className={styles.numBox} onClick ={ () => {  calc(num[2]) } }>
                {100*num[2]}%
            </button>
            <button className={styles.numBox} onClick ={ () => {  calc(num[3]) } }>
                {100*num[3]}%
            </button>
            <button className={styles.numBox} onClick ={ () => {  calc(num[4]) } }>
                {100*num[4]}%
            </button>
            <button className={styles.numBox} onClick ={ () => {  calc(num[5]) } }>
                {100*num[5]}%
            </button>
            <button className={styles.numBox} onClick ={ () => {  calc(num[6]) } }>
                {100*num[6]}%
            </button>
            <button className={styles.numBox} onClick ={ () => {  calc(num[7]) } }>
                {100*num[7]}%
            </button>
          </div>    
        </div>
      
      </div>
      

      <div className={styles.history}>
        {status ? <></> : updateHistory}
      </div>

    </div>
  );
}

export default App;
