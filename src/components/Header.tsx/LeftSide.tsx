import React, { useRef } from 'react';
import styles from '../../styles/Header.module.css';
import CustomButton from '../Buttons/CustomButton';
import AnimatedWord from '../AnimatedWord';
import { gsap, useGSAP } from '../../lib/gsap';

const headerTexte: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
    tl.from('.hero-title', { y: 50, opacity: 0, duration: 0.7 })
      .from('.hero-subtitle', { y: 40, opacity: 0, duration: 0.6 }, '-=0.4')
      .from('.hero-description', { y: 30, opacity: 0, duration: 0.6 }, '-=0.35')
      .from('.hero-buttons', { y: 20, opacity: 0, duration: 0.5 }, '-=0.3');
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={`${styles.title} hero-title`}>
        <h3>
          <AnimatedWord words={["Salut", "Bonjour", "Hello", "Hola", "Ciao", "Hallo", "Olá", "こんにちは", "مرحبا"]} />, c'est Rémi
        </h3>
      </div>

      <div className={`${styles.subtitle} hero-subtitle`}>
        <h3>Développeur</h3>
        <h3 className={styles.underline}>Full Stack.</h3>
      </div>

      <div className={`${styles.description} hero-description`}>
        <p>Je crée des applications web performantes avec React,
          TypeScript et Node.js. Je transforme des problèmes complexes
          en code propre et efficace.</p>
      </div>

      <div className={`${styles.buttonspace} hero-buttons`}>
        <CustomButton text="Me contacter" variant="filled" onClick={() => { window.location.href = '/contact'; }} />
        <CustomButton text="Voir mes projets" variant="outlined" showArrow onClick={() => {
          const el = document.getElementById('projets');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          else window.location.href = '/#projets';
        }} />
      </div>
    </div>
  );
};

export default headerTexte;