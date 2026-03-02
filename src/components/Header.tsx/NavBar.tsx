import React from 'react';
import styles from '../../styles/Nav.module.css';

const NavBar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={styles.carre}></div>
          <h1 className={styles.title}>dev.rémi</h1>
        </div>

        <div>
          <ul className={styles.navLinks}>
            <li><a href="/">A propos</a></li>
            <li><a href="/about">Stack</a></li>
            <li><a href="/contact">Project</a></li>
          </ul>
        </div>

        <div className={styles.user}>
          <h2>Rémi</h2>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;