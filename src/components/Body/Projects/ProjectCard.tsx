import React, { useRef } from 'react';
import styles from '../../../styles/ProjectCard.module.css';
import CustomButton from '../../Buttons/CustomButton';
import { gsap, ScrollTrigger, useGSAP } from '../../../lib/gsap';

interface ProjectCardProps {
  title: string;
  bannerTitle: string;
  description: string;
  tags: string[];
  bannerColor?: string;
  bannerTextColor?: string;
  demoUrl?: string;
  codeUrl?: string;
  detailUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  bannerTitle,
  description,
  tags,
  bannerColor = '#8C52FF',
  bannerTextColor = '#ffffff',
  demoUrl = '#',
  codeUrl = '#',
  detailUrl,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(cardRef.current, {
      y: 70,
      opacity: 0,
      duration: 0.75,
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
      {/* Banner colorée */}
      <div
        className={styles.banner}
        style={{ backgroundColor: bannerColor, cursor: detailUrl ? 'pointer' : 'default' }}
        onClick={detailUrl ? () => { window.location.href = detailUrl; } : undefined}
      >
        <span className={styles.bannerTitle} style={{ color: bannerTextColor }}>
          {bannerTitle}
        </span>
      </div>

      {/* Contenu */}
      <div className={styles.content}>
        {/* Tags */}
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>

        <h3
          className={styles.title}
          style={{ cursor: detailUrl ? 'pointer' : 'default' }}
          onClick={detailUrl ? () => { window.location.href = detailUrl; } : undefined}
        >{title}</h3>
        <p className={styles.description}>{description}</p>

        {/* Boutons */}
        <div className={styles.buttons}>
          {detailUrl && (
            <CustomButton
              text="Voir →"
              variant="filled"
              backgroundColor="#1a1a1a"
              color="#ffffff"
              fontSize="13px"
              padding="9px 14px"
              onClick={() => { window.location.href = detailUrl; }}
            />
          )}
          <CustomButton
            text="Demo"
            variant="outlined"
            fontSize="13px"
            padding="9px 14px"
            onClick={() => { window.open(demoUrl, '_blank'); }}
          />
          <CustomButton
            text="Code"
            variant="outlined"
            fontSize="13px"
            padding="9px 14px"
            onClick={() => { window.open(codeUrl, '_blank'); }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
