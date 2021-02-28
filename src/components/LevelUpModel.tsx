import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChellengeContext'
import styles from '../styles/components/LevelUpModal.module.css' 
export function LevelUpModel(){
  const { level , closeLevelUpModal} = useContext(ChallengesContext);
  return(
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>
        <strong>Parabens</strong>
        <p>Você alcançou um novo level.</p>
        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar pop-up"/>
        </button>
      </div>
    </div>
  )
}