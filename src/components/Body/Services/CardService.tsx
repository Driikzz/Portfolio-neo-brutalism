import React from 'react';
import styles from '../../../styles/CardService.module.css';

interface CardServiceProps {
  icon: string;
  title: string;
  description: string;
  iconBg?: string;
  iconShape?: 'rounded' | 'circle' | 'tag';
}

const CardService: React.FC<CardServiceProps> = ({
  icon,
  title,
  description,
  iconBg = '#8C52FF',
  iconShape = 'rounded',
}) => {
  return (
    <div className={styles.card}>
      <div
        className={`${styles.iconWrapper} ${styles[iconShape]}`}
        style={{ backgroundColor: iconBg }}
      >
        <span className={styles.icon}>{icon}</span>
      </div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default CardService;