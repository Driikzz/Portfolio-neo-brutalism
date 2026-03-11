import React, { useRef } from 'react';
import LabelCustom from '../../Buttons/LabelCustom';
import CustomButton from '../../Buttons/CustomButton';
import styles from '../../../styles/HeaderProjects.module.css';
import { gsap, ScrollTrigger, useGSAP } from '../../../lib/gsap';

interface HeaderProjectsProps {
  label?: string;
  title?: string;
  allProjectsUrl?: string;
}

const HeaderProjects: React.FC<HeaderProjectsProps> = ({
  label = 'Portfolio',
  title = 'Projets récents.',
  allProjectsUrl = '/projects',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
    });
    tl.from('.hp-left', { x: -40, opacity: 0, duration: 0.6, ease: 'power4.out' })
      .from('.hp-btn', { x: 40, opacity: 0, duration: 0.6, ease: 'power4.out' }, '-=0.5');
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={styles.header}>
      <div className={`${styles.left} hp-left`}>
        <LabelCustom text={label} backgroundColor="#ffffff" />
        <h2 className={styles.title}>{title}</h2>
      </div>
      <div className="hp-btn">
        <CustomButton
          text="Tout voir"
          variant="outlined"
          showArrow
          onClick={() => { window.location.href = allProjectsUrl; }}
        />
      </div>
    </div>
  );
};

export default HeaderProjects;
