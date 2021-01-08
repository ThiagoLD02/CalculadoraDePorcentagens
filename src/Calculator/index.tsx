import React, { useState } from 'react';
import styles from './styles.module.css';

//const num = [0.79,0.82,0.84,0.86,0.87,0.89,0.90,0.99];

function Calculator(numbers:any) {
  
  const { num } = numbers;

  const [percentage,setPercentage] = useState<number>(0); // Percentage values
  const [money,setMoney] = useState<number>(0); // Results of the mathematical operation
  const [value,setValue] = useState<number>(0); // Input value
  const [oldValue,setOldValue] = useState<number>(0); // Input value
  const [history,setHistory] = useState<any>([]);
  
  
  
  function handleChange(event:any){ 
    const val = event.target.value;
    setValue(val) ;
    setOldValue(val);
  }

  function erase() { setPercentage(0);  setMoney(0); setValue(0); setOldValue(0); }

  function calc(percentageParam:number){ // Calculates the operation result & calls updateHistory
    
    const fraction = percentageParam/100;

    setOldValue(value);

    setPercentage(percentageParam);
    
    var sum = parseFloat( value.toString() ) + value*fraction;
    sum = parseFloat(sum.toFixed(2));

    setMoney( sum );
    
    updateHistory(percentageParam,sum);
    
  }

  function updateHistory(perctg:number,mney:number){ // Adds a new block with the last operation
    history.push(
      <div id="Items" className = {styles.historyItem}>
        {oldValue}+{perctg}% = {mney}
        <hr className={styles.line}></hr>
      </div>
      
    )

    setValue( mney );

  }
  

  function clear(){
    
    erase();
    setHistory([]);
   
  }

  return (
   
    <div className={styles.box}>
       
      <div className={styles.content}>
        
        <div className={styles.display}>
          <div>{oldValue}+{percentage}% = {money} </div>
        </div>
        <div className={styles.funcs}>
          <div>
              <button className={styles.opButtons} onClick={erase}>C</button> 
          </div>
          <div>
              <button className={styles.opButtons} onClick={clear}>Apagar</button> 
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
                {num[0]}%
            </button>
            <button className={styles.numBox} onClick ={ () => {  calc(num[1]) } }>
                {num[1]}%
            </button>
            <button className={styles.numBox} onClick ={ () => {  calc(num[2]) } }>
                {num[2]}%
            </button>
            <button className={styles.numBox} onClick ={ () => {  calc(num[3]) } }>
                {num[3]}%
            </button>
            <button className={styles.numBox} onClick ={ () => {  calc(num[4]) } }>
                {num[4]}%
            </button>
            <button className={styles.numBox} onClick ={ () => {  calc(num[5]) } }>
                {num[5]}%
            </button>
            <button className={styles.numBox} onClick ={ () => {  calc(num[6]) } }>
                {num[6]}%
            </button>
            <button className={styles.numBox} onClick ={ () => {  calc(num[7]) } }>
                {num[7]}%
            </button>
          </div>    
        </div>
      
      </div>
      
      <div className={styles.history}>
        {history}
      </div>

    </div>
  );
}

export default Calculator;
