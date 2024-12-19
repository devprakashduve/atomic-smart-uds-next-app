import React from 'react';
import styles from './Avatar.module.css';
import { AvatarProps } from './AvatarProps.interface';

const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 50 }) => {
    return (
        <img
            className={styles.avatar}
            src={src}
            alt={alt}
            width={size}
            height={size}
        />
    );
};

export default Avatar;