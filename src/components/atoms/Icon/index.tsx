import React from 'react';
import { IconProps } from './IconProps.interface';
import './Icon.css';

const Icon: React.FC<IconProps> = ({ name, size = 24, color = 'currentColor' }) => {
    return (
        <svg className="icon-base" width={size} height={size} fill={color}>
            <use xlinkHref={`#${name}`} />
        </svg>
    );
};

export default Icon;