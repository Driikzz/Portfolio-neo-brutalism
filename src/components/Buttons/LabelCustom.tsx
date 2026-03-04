import React from 'react';
import styles from '../../styles/LabelCustom.module.css';

interface LabelProps {
  text: string;
  backgroundColor?: string;
  color?: string;
  orientation?: 'horizontal' | 'vertical' | 'vertical-reverse';
  rotate?: number;
}

const LabelCustom: React.FC<LabelProps> = ({
  text,
  backgroundColor = '#F97316',
  color,
  orientation = 'horizontal',
  rotate,
}) => {
  const orientationClass =
    orientation === 'vertical'
      ? styles.vertical
      : orientation === 'vertical-reverse'
      ? styles['vertical-reverse']
      : '';

  return (
    <span
      className={`${styles.label} ${orientationClass}`}
      style={{
        backgroundColor,
        ...(color && { color }),
        ...(rotate !== undefined && { transform: `rotate(${rotate}deg)` }),
      }}
    >
      {text}
    </span>
  );
};

export default LabelCustom;
