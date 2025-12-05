import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import styles from './CTA.module.css';

export const CTA: React.FC = () => {
    return (
        <section className={styles.cta}>
            <Container>
                <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <h2 className={styles.title}>Construindo o futuro financeiro do Brasil</h2>
                    <Button className={styles.button} icon={ArrowRight}>
                        Fale com um especialista
                    </Button>
                </div>
            </Container>
        </section>
    );
};
