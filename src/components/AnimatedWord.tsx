import React, { useEffect, useState } from 'react';
import styles from '../styles/AnimatedWord.module.css';

interface AnimatedWordProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

const AnimatedWord: React.FC<AnimatedWordProps> = ({
  words,
  typingSpeed = 80,
  deletingSpeed = 45,
  pauseDuration = 1600,
}) => {
  const [displayed, setDisplayed] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const current = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = current.slice(0, displayed.length + 1);
        setDisplayed(next);

        if (next === current) {
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
          }, pauseDuration);
        }
      } else {
        const next = displayed.slice(0, displayed.length - 1);
        setDisplayed(next);

        if (next === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, isPaused, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={styles.wrapper}>
      {displayed}
      <span className={styles.cursor}>|</span>
    </span>
  );
};

export default AnimatedWord;
