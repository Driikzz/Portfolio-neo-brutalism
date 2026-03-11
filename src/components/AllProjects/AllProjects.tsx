import React, { useState, useRef } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import type { Project } from '../../data/projects';
import ProjectCard from '../Body/Projects/ProjectCard';
import LabelCustom from '../Buttons/LabelCustom';
import styles from '../../styles/AllProjects.module.css';
import { gsap, useGSAP } from '../../lib/gsap';

interface AllProjectsProps {
  projects: Project[];
}

// Collect all unique tags across projects
function getAllTags(projects: Project[]): string[] {
  const set = new Set<string>();
  projects.forEach((p) => p.tags.forEach((t) => set.add(t)));
  return Array.from(set).sort();
}

const AllProjects: React.FC<AllProjectsProps> = ({ projects }) => {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const pageRef = useRef<HTMLDivElement>(null);

  const allTags = getAllTags(projects);

  const filtered = activeTag
    ? projects.filter((p) => p.tags.includes(activeTag))
    : projects;

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
    tl.from('.ap-back', { x: -20, opacity: 0, duration: 0.45 })
      .from('.ap-label', { x: -20, opacity: 0, duration: 0.45 }, '-=0.3')
      .from('.ap-title', { y: 30, opacity: 0, duration: 0.6 }, '-=0.35')
      .from('.ap-count', { y: 10, opacity: 0, duration: 0.4 }, '-=0.35')
      .from('.ap-filters', { y: 16, opacity: 0, duration: 0.4 }, '-=0.3');
  }, { scope: pageRef });

  return (
    <div ref={pageRef} className={styles.page}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <a href="/#projets" className={`${styles.backLink} ap-back`}>
            <FiArrowLeft size={14} />
            Retour
          </a>
          <div className="ap-label">
            <LabelCustom text="Portfolio" backgroundColor="#8C52FF" color="#fff" />
          </div>
          <h1 className={`${styles.title} ap-title`}>Tous les projets.</h1>
          <p className={`${styles.count} ap-count`}>{filtered.length} projet{filtered.length > 1 ? 's' : ''}</p>
        </div>

        {/* Filters */}
        <div className={`${styles.filters} ap-filters`}>
          <span className={styles.filterLabel}>Filtrer :</span>
          <button
            className={`${styles.filterBtn} ${activeTag === null ? styles.active : ''}`}
            onClick={() => setActiveTag(null)}
          >
            Tout
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`${styles.filterBtn} ${activeTag === tag ? styles.active : ''}`}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <hr className={styles.divider} />

      {/* Grid */}
      <div className={styles.grid}>
        {filtered.length === 0 ? (
          <div className={styles.empty}>
            <span className={styles.emptyIcon}>🔍</span>
            <p className={styles.emptyText}>Aucun projet pour ce filtre.</p>
          </div>
        ) : (
          filtered.map((p) => (
            <ProjectCard
              key={p.slug}
              bannerTitle={p.bannerTitle}
              bannerColor={p.bannerColor}
              bannerTextColor={p.bannerTextColor}
              title={p.title}
              description={p.description}
              tags={p.tags}
              demoUrl={p.demoUrl}
              codeUrl={p.codeUrl}
              detailUrl={`/projets/${p.slug}`}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default AllProjects;
