import React, { useRef } from 'react';
import type { Project } from '../../data/projects';
import styles from '../../styles/ProjectDetail.module.css';
import { gsap, useGSAP } from '../../lib/gsap';

interface DetailContentProps {
  project: Project;
  otherProjects: Project[];
}

const DetailContent: React.FC<DetailContentProps> = ({ project, otherProjects }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
    tl.from('.dc-breadcrumb', { y: -10, opacity: 0, duration: 0.4 })
      .from('.dc-title', { y: 30, opacity: 0, duration: 0.65 }, '-=0.25')
      .from('.dc-tags', { y: 16, opacity: 0, duration: 0.45 }, '-=0.4')
      .from('.dc-intro', { y: 16, opacity: 0, duration: 0.45 }, '-=0.35');
  }, { scope: contentRef });

  return (
    <div ref={contentRef} className={styles.content}>
      {/* Breadcrumb */}
      <nav className={`${styles.breadcrumb} dc-breadcrumb`}>
        <a href="/">Accueil</a>
        <span>/</span>
        <a href="/#projets">Projets</a>
        <span>/</span>
        <span className={styles.breadcrumbCurrent}>{project.title}</span>
      </nav>

      {/* Title */}
      <h1 className={`${styles.title} dc-title`}>{project.title}</h1>

      {/* Tags */}
      <div className={`${styles.tags} dc-tags`}>
        {project.tags.map((tag) => (
          <span key={tag} className={styles.tag}>#{tag}</span>
        ))}
      </div>

      {/* Intro */}
      <p className={`${styles.intro} dc-intro`}>{project.intro}</p>

      <hr className={styles.divider} />

      {/* Sections */}
      {project.sections.map((section, i) => (
        <div key={i} className={styles.section}>
          <h2 className={styles.sectionHeading}>{section.heading}</h2>
          <p className={styles.sectionText}>{section.content}</p>

          {section.highlight && (
            <div className={styles.highlight}>
              <span
                className={styles.highlightLabel}
                style={{ backgroundColor: section.highlight.labelColor ?? '#1a1a1a' }}
              >
                {section.highlight.label}
              </span>
              <p className={styles.highlightText}>{section.highlight.text}</p>
            </div>
          )}

          {section.bullets && (
            <ul className={styles.bullets}>
              {section.bullets.map((b, j) => (
                <li key={j} className={styles.bullet}>{b}</li>
              ))}
            </ul>
          )}
        </div>
      ))}

      <hr className={styles.divider} />

      {/* Challenge / Key Takeaway */}
      <div className={styles.challenge}>
        <p className={styles.challengeLabel}>⚡ Le vrai défi</p>
        <p className={styles.challengeText}>{project.challenge}</p>
      </div>

      <hr className={styles.divider} />

      {/* Read Next */}
      {otherProjects.length > 0 && (
        <div className={styles.readNext}>
          <p className={styles.readNextTitle}>Autres projets</p>
          <div className={styles.readNextGrid}>
            {otherProjects.map((p) => (
              <a
                key={p.slug}
                href={`/projets/${p.slug}`}
                className={styles.miniCard}
              >
                <div
                  className={styles.miniCardBanner}
                  style={{ backgroundColor: p.bannerColor }}
                >
                  <span
                    className={styles.miniCardBannerText}
                    style={{ color: p.bannerTextColor ?? '#ffffff' }}
                  >
                    {p.bannerTitle}
                  </span>
                </div>
                <div className={styles.miniCardBody}>
                  <span className={styles.miniCardTag}>{p.tags.slice(0, 2).join(' · ')}</span>
                  <p className={styles.miniCardTitle}>{p.title}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailContent;
