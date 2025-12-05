import React from 'react';
import { Target, Eye, ArrowRight, Shield, Zap, TrendingUp } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import styles from './About.module.css';
import businessPortrait from '../../assets/business-portrait.png';

export const About: React.FC = () => {
    return (
        <section className={styles.about} id="about">
            <Container>
                <div className={styles.header}>
                    <div className={styles.pillLabel}>
                        <span className={styles.labelText}>SOBRE NÓS</span>
                    </div>
                    <h2 className={styles.title}>Nossa História e Propósito</h2>
                    <div className={styles.introTextWrapper}>
                        <p className={styles.text}>
                            A DGH nasceu com um objetivo claro: simplificar a complexidade financeira através de uma gestão robusta e centralizada. Desde 2018, atuamos como o alicerce estratégico para instituições que variam de bancos comerciais a fintechs de crédito e seguradoras.
                        </p>
                        <p className={styles.text}>
                            Não somos apenas gestores de capital; somos arquitetos de negócios sustentáveis. Crescimento financeiro deve caminhar lado a lado com responsabilidade corporativa.
                        </p>
                    </div>
                </div>

                <div className={styles.mainGrid}>
                    {/* Mission Card - Dark */}
                    <div className={styles.missionCard}>
                        <div className={styles.missionContent}>
                            <Target className={styles.iconLight} size={32} />
                            <h3 className={styles.cardTitleLight}>Missão</h3>
                            <p className={styles.cardTextLight}>
                                Potencializar o crescimento de nossas controladas através de governança de elite, injeção de capital estratégico e sinergia operacional.
                            </p>
                            <Button variant="primary" className={styles.missionButton} icon={ArrowRight}>
                                Saiba Mais
                            </Button>
                        </div>
                        <div className={styles.missionImageWrapper}>
                            <img src={businessPortrait} alt="Business Professional" className={styles.missionImage} />
                        </div>
                    </div>

                    {/* Vision Card - Brand Color */}
                    <div className={styles.visionCard}>
                        <Eye className={styles.iconDark} size={48} />
                        <h3 className={styles.cardTitleDark}>Visão</h3>
                        <p className={styles.cardTextDark}>
                            Ser a holding referência em performance e integridade no mercado financeiro latino-americano até 2030.
                        </p>
                        <div className={styles.visionDecor}>
                            {/* Decorative circles or elements could go here */}
                        </div>
                    </div>
                </div>

                {/* Values Grid - Bottom Row */}
                <div className={styles.valuesGrid}>
                    <div className={styles.valueCard}>
                        <div className={styles.valueIconWrapper}>
                            <Shield size={24} className={styles.valueIcon} />
                        </div>
                        <h3 className={styles.valueTitle}>Transparência Radical</h3>
                        <p className={styles.valueDescription}>
                            Compromisso total com a clareza em todas as nossas operações e relações.
                        </p>
                    </div>

                    <div className={styles.valueCard}>
                        <div className={styles.valueIconWrapper}>
                            <TrendingUp size={24} className={styles.valueIcon} />
                        </div>
                        <h3 className={styles.valueTitle}>Solidez e Longo Prazo</h3>
                        <p className={styles.valueDescription}>
                            Construímos valor sustentável, focando na perenidade dos negócios.
                        </p>
                    </div>

                    <div className={styles.valueCard}>
                        <div className={styles.valueIconWrapper}>
                            <Zap size={24} className={styles.valueIcon} />
                        </div>
                        <h3 className={styles.valueTitle}>Inovação Prudente</h3>
                        <p className={styles.valueDescription}>
                            Evolução constante com responsabilidade e gestão de riscos calculada.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};
