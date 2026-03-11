import React from 'react';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import styles from '../../styles/ContactInfoCard.module.css';

const iconMap: Record<string, React.ReactNode> = {
  email: <FiMail size={20} />,
  github: <FiGithub size={20} />,
  linkedin: <FiLinkedin size={20} />,
};

interface ContactInfoCardProps {
  icon: string;
  label: string;
  value: string;
  href?: string;
  backgroundColor?: string;
  color?: string;
}

const ContactInfoCard: React.FC<ContactInfoCardProps> = ({
  icon,
  label,
  value,
  href,
  backgroundColor = '#ffffff',
  color = '#1a1a1a',
}) => {
  const inner = (
    <div className={styles.card} style={{ backgroundColor, color }}>
      <span className={styles.icon}>{iconMap[icon] ?? icon}</span>
      <div className={styles.text}>
        <span className={styles.label}>{label}</span>
        <span className={styles.value} style={{ color }}>{value}</span>
      </div>
      {href && <span className={styles.arrow}>→</span>}
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={styles.link}>
        {inner}
      </a>
    );
  }

  return inner;
};

export default ContactInfoCard;
