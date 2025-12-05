import React from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, PieChart } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import styles from './Approach.module.css';
import teamMeetingImage from '../../assets/team-meeting-contrast.png';

export const Approach: React.FC = () => {
    return (
        <section className={styles.approach} id="approach">
            <Container>
                <div className={styles.contentWrapper}>
                    <div className={styles.textContent}>
                        <span className={styles.label}>NOSSA FILOSOFIA</span>
                        <h2 className={styles.title}>
                            Atuamos na intersecção entre tradição bancária e inovação fintech
                        </h2>
                        <p className={styles.description}>
                            Nosso papel é garantir governança corporativa de excelência enquanto nossas controladas focam no cliente final.
                        </p>

                        <ul className={styles.featureList}>
                            <li className={styles.featureItem}>
                                <CheckCircle2 className={styles.checkIcon} size={20} />
                                <span>Governança</span>
                            </li>
                            <li className={styles.featureItem}>
                                <CheckCircle2 className={styles.checkIcon} size={20} />
                                <span>Tecnologia</span>
                            </li>
                            <li className={styles.featureItem}>
                                <CheckCircle2 className={styles.checkIcon} size={20} />
                                <span>Crescimento</span>
                            </li>
                        </ul>

                        <Button variant="primary" className={styles.ctaButton} icon={ArrowRight}>
                            Saiba Mais
                        </Button>
                    </div>

                    <div className={styles.imageSection}>
                        <div className={styles.imageCard}>
                            <img
                                src={teamMeetingImage}
                                alt="Equipe analisando dados"
                                className={styles.mainImage}
                            />

                            {/* Overlay Card - "Most Frequent Expenses" style but adapted */}
                            <div className={styles.floatingCard}>
                                <div className={styles.cardHeader}>
                                    <span className={styles.cardTitle}>Performance do Portfólio</span>
                                </div>
                                <div className={styles.expenseList}>
                                    <div className={styles.expenseItem}>
                                        <div className={styles.expenseIconInfo}>
                                            <div className={styles.expenseIconBg}>
                                                <TrendingUp size={16} />
                                            </div>
                                            <div className={styles.expenseDetails}>
                                                <span className={styles.expenseName}>Fintechs</span>
                                                <span className={styles.expenseValue}>+125%</span>
                                            </div>
                                        </div>
                                        <div className={styles.expenseTotals}>
                                            <span className={styles.expenseYearTotal}>Retorno</span>
                                            <span className={styles.expenseTotalValue}>R$ 45M</span>
                                        </div>
                                    </div>

                                    <div className={styles.expenseItem}>
                                        <div className={styles.expenseIconInfo}>
                                            <div className={styles.expenseIconBg}>
                                                <PieChart size={16} />
                                            </div>
                                            <div className={styles.expenseDetails}>
                                                <span className={styles.expenseName}>Agronegócio</span>
                                                <span className={styles.expenseValue}>+85%</span>
                                            </div>
                                        </div>
                                        <div className={styles.expenseTotals}>
                                            <span className={styles.expenseYearTotal}>Retorno</span>
                                            <span className={styles.expenseTotalValue}>R$ 12M</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
