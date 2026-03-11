import React, { useRef } from 'react';
import { FiEye } from 'react-icons/fi';
import img from '../../assets/img.jpg';
import styles from '../../styles/Header.module.css';
import { gsap, useGSAP } from '../../lib/gsap';

const RightSide: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' }, delay: 0.3 });
    tl.from('.right-frame', { scale: 0.85, opacity: 0, duration: 0.6 })
      .from('.right-image', { x: 40, opacity: 0, duration: 0.7 }, '-=0.4')
      .from('.right-badge', { scale: 0, opacity: 0, duration: 0.4, ease: 'back.out(1.7)' }, '-=0.2')
      .from('.right-eye', { scale: 0, opacity: 0, duration: 0.4, ease: 'back.out(2)' }, '-=0.25');
  }, { scope: wrapperRef });

  return (
    <div ref={wrapperRef} className={styles.imageWrapper}>
      <div className={`${styles.pinkFrame} right-frame`}></div>

      <div className={`${styles.imageContainer} right-image`}>
        <img src={img.src} alt="Header Image" />

        <div className={`${styles.freelanceBadge} right-badge`}>
          <span className={styles.dot}></span>
          Disponible maintenant
        </div>
      </div>

      <div className={`${styles.eyeBadge} right-eye`}><FiEye size={22} /></div>
    </div>
  );
};

export default RightSide;