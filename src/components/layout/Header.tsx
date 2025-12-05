import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { Container } from '../ui/Container';
import styles from './Header.module.css';
import logo from '../../assets/logo.png';

export const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <Container>
                <nav className={styles.nav}>
                    <div className={styles.leftSection}>
                        <a href="#" className={styles.logo}>
                            <img src={logo} alt="DGH Holdings" className={styles.logoImg} />
                        </a>

                        <div className={styles.menu}>
                            <a href="#about" className={styles.link}>Sobre Nós</a>
                            <a href="#approach" className={styles.link}>Nossa Abordagem</a>
                            <a href="#ecosystem" className={styles.link}>Ecossistema</a>
                            <a href="#contact" className={styles.link}>Contato</a>
                        </div>
                    </div>

                    <div className={styles.socials}>
                        <a href="#" className={styles.socialIcon} aria-label="Facebook">
                            <Facebook size={20} />
                        </a>
                        <a href="#" className={styles.socialIcon} aria-label="Instagram">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className={styles.socialIcon} aria-label="Youtube">
                            <Youtube size={20} />
                        </a>
                    </div>
                </nav>
            </Container>
        </header>
    );
};
