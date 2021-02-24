import styles from '../styles/components/Countdown.module.css'

export function Countdown(){
  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>2</span>
          <span>5</span>
        </div>
        <span>:</span>
        <div>
          <span>2</span>
          <span>6</span>
        </div>
      </div>
      <button type="button" className={styles.startCountdownButton}>
        Iniciar um ciclo
      </button>
    </div>
  );
}