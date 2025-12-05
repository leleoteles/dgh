import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './Select.module.css';

interface Option {
    value: string;
    label: string;
}

interface SelectProps {
    options: Option[];
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    className?: string;
}

export const Select: React.FC<SelectProps> = ({ options, placeholder = 'Selecione...', value, onChange, className }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<Option | null>(
        options.find(opt => opt.value === value) || null
    );
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSelect = (option: Option) => {
        setSelectedOption(option);
        setIsOpen(false);
        if (onChange) {
            onChange(option.value);
        }
    };

    return (
        <div className={`${styles.container} ${className || ''}`} ref={containerRef}>
            <div
                className={`${styles.trigger} ${isOpen ? styles.open : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={selectedOption ? styles.value : styles.placeholder}>
                    {selectedOption ? selectedOption.label : placeholder}
                </span>
                <ChevronDown size={20} className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`} />
            </div>

            {isOpen && (
                <div className={styles.dropdown}>
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className={`${styles.option} ${selectedOption?.value === option.value ? styles.selected : ''}`}
                            onClick={() => handleSelect(option)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
