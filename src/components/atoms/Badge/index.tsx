import React from 'react';
import { BadgeProps } from './BadgeProps.interface';
import './Badge.css';

const Badge: React.FC<BadgeProps> = ({ text, variant = 'primary' }) => {
    const badgeClass = variant === 'primary' ? 'badge-primary' : 'badge-secondary';

    return (
        <span className={`badge-base ${badgeClass}`}>
            {text}
        </span>
    );
};

export default Badge;