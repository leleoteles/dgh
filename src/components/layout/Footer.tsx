import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { Container } from '../ui/Container';
import styles from './Footer.module.css';

import logo from '../../assets/logo.png';

export const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.grid}>
                    <div className={styles.logoColumn}>
                        <div className={styles.logo}>
                            <img src={logo} alt="DGH Holdings" className={styles.logoImg} />
                        </div>
                        <p className={styles.tagline}>
                            Solidez para construir o futuro. Integrando inteligência financeira e gestão estratégica.
                        </p>
                    </div>

                    <div>
                        <h4 className={styles.columnTitle}>Institucional</h4>
                        <ul className={styles.linkList}>
                            <li><a href="#" className={styles.link}>Sobre Nós</a></li>
                            <li><a href="#" className={styles.link}>Nossa Filosofia</a></li>
                            <li><a href="#" className={styles.link}>Governança</a></li>
                            <li><a href="#" className={styles.link}>Carreiras</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className={styles.columnTitle}>Empresas</h4>
                        <ul className={styles.linkList}>
                            <li><a href="#" className={styles.link}>DGBK Credit</a></li>
                            <li><a href="#" className={styles.link}>DG Seguros</a></li>
                            <li><a href="#" className={styles.link}>Fam CredClub</a></li>
                            <li><a href="#" className={styles.link}>DG Invest</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className={styles.columnTitle}>Contato</h4>
                        <ul className={styles.linkList}>
                            <li><a href="#" className={styles.link}>contato@dghholdings.com.br</a></li>
                            <li><a href="#" className={styles.link}>+55 (11) 3000-0000</a></li>
                            <li><a href="#" className={styles.link}>Imprensa</a></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottomBar}>
                    <span>&copy; {new Date().getFullYear()} DGH Holdings. Todos os direitos reservados.</span>
                    <div className={styles.socials}>
                        <a href="#" className={styles.socialIcon}><Facebook size={20} /></a>
                        <a href="#" className={styles.socialIcon}><Instagram size={20} /></a>
                        <a href="#" className={styles.socialIcon}><Youtube size={20} /></a>
                    </div>
                </div>
            </Container>
        </footer>
    );
};
