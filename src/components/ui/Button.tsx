import React from 'react';
import type { LucideIcon } from 'lucide-react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    icon?: LucideIcon;
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    icon: Icon,
    children,
    className = '',
    ...props
}) => {
    const variantClass = styles[variant];

    return (
        <button
            className={`${styles.button} ${variantClass} ${className}`}
            {...props}
        >
            {children}
            {Icon && (
                <span className={styles.iconWrapper}>
                    <Icon size={18} className={styles.icon} />
                </span>
            )}
        </button>
    );
};
