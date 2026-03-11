import React, { useRef } from 'react';
import { FiCode, FiSmartphone, FiLayers } from 'react-icons/fi';
import styles from '../../../styles/CardService.module.css';
import { gsap, ScrollTrigger, useGSAP } from '../../../lib/gsap';

const iconMap: Record<string, React.ReactNode> = {
  code: <FiCode size={26} color="#ffffff" strokeWidth={2.5} />,
  smartphone: <FiSmartphone size={26} color="#ffffff" strokeWidth={2.5} />,
  layers: <FiLayers size={26} color="#ffffff" strokeWidth={2.5} />,
};

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
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(cardRef.current, {
      y: 60,
      opacity: 0,
      duration: 0.7,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: cardRef.current,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
    });
  });

  return (
    <div ref={cardRef} className={styles.card}>
      <div
        className={`${styles.iconWrapper} ${styles[iconShape]}`}
        style={{ backgroundColor: iconBg }}
      >
        <span className={styles.icon}>{iconMap[icon] ?? icon}</span>
      </div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default CardService;