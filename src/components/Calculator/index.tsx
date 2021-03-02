import React, { useState } from 'react';
import styles from './styles.module.css';

interface Parameters{
  setShowInput: React.Dispatch<React.SetStateAction<boolean>>;
  num: any
}

function Calculator(params:Parameters) {
  
  const  num  = params.num;

  const [percentage,setPercentage] = useState<number>(0); // Percentage values
  const [money,setMoney] = useState<number>(0); // Results of the mathematical operation
  const [value,setValue] = useState<number>(0); // Input value
  const [oldValue,setOldValue] = useState<number>(0); // Input value
  const [history,setHistory] = useState<any>([]);
  const [keys,setKeys] = useState(0);
  
  
  
  function handleChange(event:any){ 
    const val = event.target.value;
    setValue(val) ;
    setOldValue(val);
  }

  function erase() { 
    setPercentage(0);  setMoney(0); setValue(0); setOldValue(0);
    const aba = Array.from(document.querySelectorAll('input')); 
    aba.map( item => { 
      item.value = ""
      return item;
    })
  }

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
    setKeys(keys+1);
    history.push(
      <div id="Items" key={keys} className = {styles.historyItem}>
        {value}+{perctg}% = {mney}
        <hr className={styles.line}></hr>
      </div>
      
    )

    setValue( mney );

  }
  

  function clear(){
    
    erase();
    setHistory([]);
   
  }

  function changeValues(){
    params.setShowInput(true);
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
              <button className={styles.opButtons} onClick={changeValues}>Trocar valores</button> 
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
