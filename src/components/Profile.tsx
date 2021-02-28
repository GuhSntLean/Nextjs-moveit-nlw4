import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChellengeContext";
import styles from "../styles/components/Profile.module.css";

export default function Profile(){
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/GuhSntLean.png" alt="Gustavo Leandro"/>
      <div>
        <strong>Gustavo Leandro</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  );  
}