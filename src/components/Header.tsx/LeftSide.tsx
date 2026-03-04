import React from 'react';
import styles from '../../styles/Header.module.css';
import CustomButton from '../Buttons/CustomButton';
import AnimatedWord from '../AnimatedWord';

const headerTexte: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>
          <AnimatedWord words={["Salut", "Bonjour", "Hello", "Hola", "Ciao", "Hallo", "Olá", "こんにちは", "مرحبا"]} />, c'est Rémi
        </h3>
      </div>

      <div className={styles.subtitle}>
        <h3>Développeur</h3>
        <h3 className={styles.underline}>Full Stack.</h3>
      </div>

      <div className={styles.description}>
        <p>Je crée des applications web performantes avec React,
          TypeScript et Node.js. Je transforme des problèmes complexes
          en code propre et efficace.</p>
      </div>

      <div className={styles.buttonspace}>
        <CustomButton text="Me contacter" variant="filled" onClick={() => {}} />
        <CustomButton text="Voir mes projets" variant="outlined" showArrow onClick={() => {}} />
      </div>
    </div>
  );
};

export default headerTexte;