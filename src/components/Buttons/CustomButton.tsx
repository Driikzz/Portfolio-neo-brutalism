
import React from 'react';
import styles from '../../styles/CustomButton.module.css';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: 'filled' | 'outlined';
  showArrow?: boolean;
  fontSize?: string;
  padding?: string;
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  shadowColor?: string;
  borderRadius?: string;
}

const CustomButton: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant = 'filled',
  showArrow = false,
  fontSize,
  padding,
  color,
  backgroundColor,
  borderColor,
  shadowColor,
  borderRadius,
}) => {
  const customStyle: React.CSSProperties = {
    ...(fontSize && { fontSize }),
    ...(padding && { padding }),
    ...(color && { color }),
    ...(backgroundColor && { backgroundColor }),
    ...(borderColor && { borderColor }),
    ...(shadowColor && { boxShadow: `5px 5px 0px ${shadowColor}` }),
    ...(borderRadius && { borderRadius }),
  };

  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${styles[variant]}`}
      style={customStyle}
    >
      {text}
      {showArrow && <span>→</span>}
    </button>
  );
};

export default CustomButton;