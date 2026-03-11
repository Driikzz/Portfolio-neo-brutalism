import React, { useRef } from 'react';
import { FiArrowLeft, FiCalendar, FiTag, FiActivity, FiExternalLink, FiGithub } from 'react-icons/fi';
import type { Project } from '../../data/projects';
import styles from '../../styles/ProjectDetail.module.css';
import { gsap, useGSAP } from '../../lib/gsap';

interface SidebarProps {
  project: Project;
}

const Sidebar: React.FC<SidebarProps> = ({ project }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
    tl.from('.sb-back', { x: -20, opacity: 0, duration: 0.5 })
      .from('.sb-card', { x: -24, opacity: 0, duration: 0.55, stagger: 0.08 }, '-=0.3');
  }, { scope: sidebarRef });

  return (
    <aside ref={sidebarRef} className={styles.sidebar}>
      {/* Back */}
      <a href="/#projets" className={`${styles.backLink} sb-back`}>
        <FiArrowLeft size={14} />
        Projets
      </a>

      {/* Project identity card */}
      <div className={`${styles.sideCard} sb-card`}>
        <div
          className={styles.sideCardBanner}
          style={{ backgroundColor: project.bannerColor }}
        >
          <span
            className={styles.sideCardBannerText}
            style={{ color: project.bannerTextColor ?? '#ffffff' }}
          >
            {project.bannerTitle}
          </span>
        </div>
        <div className={styles.sideCardBody}>
          <p className={styles.sideProjectTitle}>{project.title}</p>
          <p className={styles.sideProjectType}>{project.type}</p>
        </div>
      </div>

      {/* Details */}
      <div className={`${styles.sideSection} sb-card`}>
        <p className={styles.sideSectionLabel}>Détails</p>

        <div className={styles.sideRow}>
          <span className={styles.sideRowIcon}><FiCalendar size={13} /></span>
          <span className={styles.sideRowValue}>{project.date}</span>
        </div>

        <div className={styles.sideRow}>
          <span className={styles.sideRowIcon}><FiActivity size={13} /></span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span
              className={styles.statusDot}
              style={{ backgroundColor: project.statusColor ?? '#22D3EE' }}
            />
            <span className={styles.sideRowValue}>{project.status}</span>
          </span>
        </div>

        <div className={styles.sideRow} style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <span className={styles.sideRowIcon}><FiTag size={13} /></span>
            <span style={{ fontSize: 13, fontWeight: 600 }}>Stack</span>
          </span>
          <div className={styles.sideTags}>
            {project.tags.map((tag) => (
              <span key={tag} className={styles.sideTag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Links */}
      <div className={`${styles.sideLinks} sb-card`}>
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.sideLinkBtn} ${styles.filled}`}
        >
          <FiExternalLink size={13} />
          Demo
        </a>
        <a
          href={project.codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.sideLinkBtn}
        >
          <FiGithub size={13} />
          Code source
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
