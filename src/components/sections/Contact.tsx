import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Select } from '../ui/Select';
import styles from './Contact.module.css';
import contactImage from '../../assets/contact-professional.png';

export const Contact: React.FC = () => {
    return (
        <section className={styles.contact} id="contact">
            <Container>
                <div className={styles.card}>
                    <div className={styles.formSection}>
                        <h2 className={styles.title}>Fale com a DGH</h2>
                        <p className={styles.text}>
                            Selecione o canal adequado para sua solicitação. Para atendimento ao cliente final, visite o site da instituição específica.
                        </p>

                        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Nome</label>
                                <input type="text" className={styles.input} placeholder="Seu nome completo" />
                            </div>

                            <div className={styles.inputGroup}>
                                <label className={styles.label}>E-mail Corporativo</label>
                                <input type="email" className={styles.input} placeholder="seu@empresa.com" />
                            </div>

                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Assunto</label>
                                <Select
                                    options={[
                                        { value: 'investidores', label: 'Investidores' },
                                        { value: 'parcerias', label: 'Parcerias' },
                                        { value: 'imprensa', label: 'Imprensa' },
                                        { value: 'outros', label: 'Outros' }
                                    ]}
                                    placeholder="Selecione o assunto"
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Mensagem</label>
                                <textarea className={styles.textarea} placeholder="Como podemos ajudar?"></textarea>
                            </div>

                            <Button variant="primary" type="submit" className={styles.submitButton} icon={ArrowRight}>
                                Enviar mensagem
                            </Button>
                        </form>
                    </div>

                    <div className={styles.imageSection}>
                        <img src={contactImage} alt="Atendimento DGH" className={styles.image} />
                    </div>
                </div>
            </Container>
        </section>
    );
};
