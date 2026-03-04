import React from 'react';
import img from '../../assets/img.png';
import styles from '../../styles/Header.module.css';

const RightSide: React.FC = () => {
  return (
    <div className={styles.imageWrapper}>
      <div className={styles.pinkFrame}></div>

      <div className={styles.imageContainer}>
        <img src={img.src} alt="Header Image" />

        <div className={styles.freelanceBadge}>
          <span className={styles.dot}></span>
          Disponible maintenant
        </div>
      </div>

      <div className={styles.eyeBadge}>👁️</div>
    </div>
  );
};

export default RightSide;