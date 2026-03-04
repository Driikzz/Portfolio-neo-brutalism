import React from 'react';
import styles from '../../../styles/TimelineItem.module.css';

interface TimelineItemProps {
  role: string;
  company: string;
  companyColor?: string;
  period: string;
  description: string;
  dotColor?: string;
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  role,
  company,
  companyColor = '#8C52FF',
  period,
  description,
  dotColor = '#8C52FF',
  isLast = false,
}) => {
  return (
    <div className={styles.item}>
      {/* Dot + ligne verticale */}
      <div className={styles.timeline}>
        <div className={styles.dot} style={{ borderColor: dotColor }}>
          <div className={styles.dotInner} style={{ backgroundColor: dotColor }} />
        </div>
        {!isLast && <div className={styles.line} />}
      </div>

      {/* Card */}
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h3 className={styles.role}>{role}</h3>
          <span className={styles.period}>{period}</span>
        </div>
        <span className={styles.company} style={{ color: companyColor }}>{company}</span>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
