import React from 'react';
import LabelCustom from '../../Buttons/LabelCustom';
import CustomButton from '../../Buttons/CustomButton';
import styles from '../../../styles/HeaderProjects.module.css';

interface HeaderProjectsProps {
  label?: string;
  title?: string;
  allProjectsUrl?: string;
}

const HeaderProjects: React.FC<HeaderProjectsProps> = ({
  label = 'Portfolio',
  title = 'Projets récents.',
  allProjectsUrl = '/projects',
}) => {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <LabelCustom text={label} backgroundColor="#ffffff" />
        <h2 className={styles.title}>{title}</h2>
      </div>
      <CustomButton
        text="Tout voir"
        variant="outlined"
        showArrow
        onClick={() => { window.location.href = allProjectsUrl; }}
      />
    </div>
  );
};

export default HeaderProjects;
