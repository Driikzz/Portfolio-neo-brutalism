import React from 'react';
import { FiMail, FiGithub, FiFileText } from 'react-icons/fi';
import styles from '../styles/Footer.module.css';

interface FooterProps {
  name?: string;
  year?: number;
  email?: string;
  githubUrl?: string;
  resumeUrl?: string;
  tagline?: string;
}

const Footer: React.FC<FooterProps> = ({
  name = 'dev.rémi',
  year = new Date().getFullYear(),
  email = 'mailto:remisalles.12@gmail.com',
  githubUrl = 'https://github.com/Driikzz',
  resumeUrl = '#',
  tagline = "Let's build something cool.",
}) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <p className={styles.tagline}>{tagline}</p>
        <p className={styles.copy}>© {year} {name}. All rights reserved.</p>
      </div>

      <div className={styles.icons}>
        <a href={email} className={styles.iconBtn} title="Email"><FiMail size={18} /></a>
        <a href={githubUrl} target="_blank" className={styles.iconBtn} title="GitHub"><FiGithub size={18} /></a>
        <a href={resumeUrl} target="_blank" className={styles.iconBtn} title="Resume"><FiFileText size={18} /></a>
      </div>
    </footer>
  );
};

export default Footer;
