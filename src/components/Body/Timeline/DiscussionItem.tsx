import React from 'react';
import styles from '../../../styles/DiscussionItem.module.css';

interface DiscussionItemProps {
  initials: string;
  title: string;
  author: string;
  comments: number;
  url?: string;
}

const DiscussionItem: React.FC<DiscussionItemProps> = ({
  initials,
  title,
  author,
  comments,
  url = '#',
}) => {
  return (
    <a href={url} className={styles.item}>
      <div className={styles.avatar}>{initials}</div>
      <div className={styles.content}>
        <span className={styles.title}>{title}</span>
        <span className={styles.meta}>
          Started by <strong>{author}</strong> • {comments} comments
        </span>
      </div>
      <span className={styles.chevron}>›</span>
    </a>
  );
};

export default DiscussionItem;
