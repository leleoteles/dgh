import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import styles from './Hero.module.css';
import heroImage from '../../assets/hero-mockup.png';

export const Hero: React.FC = () => {
    return (
        <section className={styles.hero}>
            <Container>
                <div className={styles.contentWrapper}>
                    <div className={styles.textContent}>
                        <h1 className={styles.title}>
                            Solidez para construir o futuro
                        </h1>
                        <p className={styles.subtitle}>
                            A DGH integra inteligência financeira, tecnologia e gestão estratégica para impulsionar instituições que transformam o mercado.
                        </p>
                        <Button variant="primary" icon={ArrowRight}>
                            Conheça nosso Ecossistema
                        </Button>


                    </div>

                    <div className={styles.imageWrapper}>
                        <img
                            src={heroImage}
                            alt="Dashboard Financeiro DGH"
                            className={styles.image}
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};
