import React, { useRef } from 'react';
import styles from '../../../styles/TimelineItem.module.css';
import { gsap, ScrollTrigger, useGSAP } from '../../../lib/gsap';

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
  const itemRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: itemRef.current,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
    });
    tl.from('.tl-dot', { scale: 0, duration: 0.35, ease: 'back.out(2)' })
      .from('.tl-card', { x: -40, opacity: 0, duration: 0.6, ease: 'power4.out' }, '-=0.2');
  }, { scope: itemRef });

  return (
    <div ref={itemRef} className={styles.item}>
      {/* Dot + ligne verticale */}
      <div className={styles.timeline}>
        <div className={`${styles.dot} tl-dot`} style={{ borderColor: dotColor }}>
          <div className={styles.dotInner} style={{ backgroundColor: dotColor }} />
        </div>
        {!isLast && <div className={styles.line} />}
      </div>

      <div className={`${styles.card} tl-card`}>
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
