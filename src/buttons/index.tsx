
import styles from'./styles.module.css';

interface params{
    number: Number[];
}

function handleClick(value:Number){
    console.log(value);
}

function Buttons (props:params){
    const num = props.number;
    return(
        <div className={styles.divButtons}>
            <button className={styles.numBox} onClick ={()=> handleClick(num[0])}>
                {num[0]}%
            </button>
            <button className={styles.numBox} onClick ={()=> handleClick(num[1])}>
                {num[1]}%
            </button>
            <button className={styles.numBox} onClick ={()=> handleClick(num[2])}>
                {num[2]}%
            </button>
            <button className={styles.numBox} onClick ={()=> handleClick(num[3])}>
                {num[3]}%
            </button>
            <button className={styles.numBox} onClick ={()=> handleClick(num[4])}>
                {num[4]}%
            </button>
            <button className={styles.numBox} onClick ={()=> handleClick(num[5])}>
                {num[5]}%
            </button>
            <button className={styles.numBox} onClick ={()=> handleClick(num[6])}>
                {num[6]}%
            </button>
            <button className={styles.numBox} onClick ={()=> handleClick(num[7])}>
                {num[7]}%
            </button>
        </div>    
        
    );
}

export default Buttons;