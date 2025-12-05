import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { Container } from '../ui/Container';
import styles from './Stats.module.css';

const Counter = ({ value, suffix = '', prefix = '' }: { value: number, suffix?: string, prefix?: string }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 50,
        stiffness: 100,
        duration: 2000
    });
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = `${prefix}${latest.toFixed(0)}${suffix}`;
            }
        });
    }, [springValue, suffix, prefix]);

    return <span ref={ref} className={styles.number}>0</span>;
};

export const Stats: React.FC = () => {
    return (
        <section className={styles.stats}>
            <Container>
                <div className={styles.card}>
                    <div className={styles.statItem}>
                        <Counter value={5} prefix="+" />
                        <span className={styles.label}>Anos de História</span>
                    </div>
                    <div className={styles.divider} />
                    <div className={styles.statItem}>
                        <Counter value={2} prefix="R$ " suffix=" Bi" />
                        <span className={styles.label}>Sob Gestão</span>
                    </div>
                    <div className={styles.divider} />
                    <div className={styles.statItem}>
                        <Counter value={87} prefix="+" />
                        <span className={styles.label}>Instituições Controladas</span>
                    </div>
                </div>
            </Container>
        </section>
    );
};
