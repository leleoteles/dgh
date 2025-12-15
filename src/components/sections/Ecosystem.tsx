import React from 'react';
import { Building2, ShieldCheck, Briefcase, ArrowRight } from 'lucide-react';
import { Container } from '../ui/Container';
import styles from './Ecosystem.module.css';

export const Ecosystem: React.FC = () => {
    return (
        <section className={styles.ecosystem} id="ecosystem">
            <Container>
                <div className={styles.header}>
                    <span className={styles.label}>NOSSO ECOSSISTEMA</span>
                    <h2 className={styles.title}>Um Portfólio Diversificado e Integrado</h2>
                    <p className={styles.intro}>
                        Nossas instituições operam com autonomia comercial, mas compartilham do mesmo DNA de excelência e rigorosa conformidade da DGH.
                    </p>
                </div>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <div>
                                <h3 className={styles.cardTitle}>DGBK Credit</h3>
                                <span className={styles.category}>Banco Comercial</span>
                            </div>
                            <Building2 className={styles.icon} size={40} strokeWidth={1.5} />
                        </div>
                        <p className={styles.description}>
                            Soluções completas de crédito e conta corrente para PJ e PF, com foco em agilidade e personalização.
                        </p>
                        <a href="#" className={styles.link}>Saiba mais <ArrowRight size={16} /></a>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <div>
                                <h3 className={styles.cardTitle}>DG Seguros</h3>
                                <span className={styles.category}>Seguradora</span>
                            </div>
                            <ShieldCheck className={styles.icon} size={40} strokeWidth={1.5} />
                        </div>
                        <p className={styles.description}>
                            Proteção patrimonial e de vida com apólices flexíveis e atendimento humanizado em momentos críticos.
                        </p>
                        <a href="#" className={styles.link}>Saiba mais <ArrowRight size={16} /></a>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <div>
                                <h3 className={styles.cardTitle}>DG Invest</h3>
                                <span className={styles.category}>Gestão Financeira</span>
                            </div>
                            <Briefcase className={styles.icon} size={40} strokeWidth={1.5} />
                        </div>
                        <p className={styles.description}>
                            Wealth management e assessoria de investimentos para maximizar retornos com segurança.
                        </p>
                        <a href="#" className={styles.link}>Saiba mais <ArrowRight size={16} /></a>
                    </div>
                </div>
            </Container>
        </section>
    );
};
