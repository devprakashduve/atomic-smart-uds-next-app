import React from 'react';
import styles from './Badge.module.css';
import { BadgeProps } from './BadgeProps.interface';



const Badge: React.FC<BadgeProps> = ({ text, color = 'blue' }) => {
    return (
        <span className={styles.badge} style={{ backgroundColor: color }}>
            {text}
        </span>
    );
};

export default Badge;