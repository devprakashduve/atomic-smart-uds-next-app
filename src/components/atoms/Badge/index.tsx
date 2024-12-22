import React from 'react';
import { BadgeProps } from './BadgeProps.interface';
import './Badge.css';

const Badge: React.FC<BadgeProps> = ({customColor='black', scale='3',children, variant = 'primary' }) => {
    const badgeClass = variant 

    return (
        <span className={`badge-base ${badgeClass} `} style={{color:customColor}}>
            {children}
        </span>
    );
};

export default Badge;