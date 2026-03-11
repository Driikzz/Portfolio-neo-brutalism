import React, { useRef } from 'react';
import LabelCustom from "../../Buttons/LabelCustom";
import styles from '../../../styles/Content.module.css';
import { gsap, ScrollTrigger, useGSAP } from '../../../lib/gsap';

const HeaderService: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
    });
    tl.from('.hs-label', { rotate: -8, x: -30, opacity: 0, duration: 0.5, ease: 'power4.out' })
      .from('.hs-text', { y: 30, opacity: 0, duration: 0.6, ease: 'power4.out' }, '-=0.3');
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={styles.headerServiceContainer} >
      <div className="hs-label">
        <LabelCustom text="Services" backgroundColor="#F97316" color="#fff" orientation="horizontal" rotate={-2} />
      </div>
      <div className={`${styles.headerServiceContentText} hs-text`}>
        <h2>Ce que je fais mieux que les autres.</h2>
        <p>Spécialisé React, TypeScript et React Native. Je construis des apps web et mobile qui fonctionnent vraiment — rapides, maintenables et prêtes à scaler.</p>
      </div>
    </div>

  );
  
}

export default HeaderService;