import React, { useState } from 'react';
import styles from '../../styles/Nav.module.css';

const links = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#services', label: 'Expertises' },
  { href: '#projets', label: 'Projets' },
  { href: '#parcours', label: 'Parcours' },
];

const NavBar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={styles.carre}></div>
          <h1 className={styles.title}>dev.rémi</h1>
        </div>

        <div className={styles.desktopNav}>
          <ul className={styles.navLinks}>
            {links.map(l => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div className={styles.right}>
          <button
            className={styles.hamburger}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? '✕' : '☰'}
          </button>
          <div className={styles.user}>
            <h2>Rémi</h2>
          </div>
        </div>
      </div>

      {open && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileLinks}>
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;