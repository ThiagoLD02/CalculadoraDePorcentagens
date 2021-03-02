import styles from '../App.module.css';
interface type{
    percentage : number,
    money: number,
    value:number
}

function History(params:type){
    var boxes = () => { 
      <div className={styles.content}>
        {params.value}+{params.percentage}% = {params.money}
      </div>
    }
    return(
      <div className={styles.historyBox}>
        {boxes};
      </div>
    );
  }
export default History;