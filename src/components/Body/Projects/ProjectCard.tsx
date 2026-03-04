import React from 'react';
import styles from '../../../styles/ProjectCard.module.css';
import CustomButton from '../../Buttons/CustomButton';

interface ProjectCardProps {
  title: string;
  bannerTitle: string;
  description: string;
  tags: string[];
  bannerColor?: string;
  bannerTextColor?: string;
  demoUrl?: string;
  codeUrl?: string;
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
}) => {
  return (
    <div className={styles.card}>
      {/* Banner colorée */}
      <div className={styles.banner} style={{ backgroundColor: bannerColor }}>
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

        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        {/* Boutons */}
        <div className={styles.buttons}>
          <CustomButton
            text="Demo"
            variant="filled"
            backgroundColor="#1a1a1a"
            color="#ffffff"
            onClick={() => { window.open(demoUrl, '_blank'); }}
          />
          <CustomButton
            text="Code"
            variant="outlined"
            onClick={() => { window.open(codeUrl, '_blank'); }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
