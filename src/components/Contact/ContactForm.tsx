import React, { useState } from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import styles from '../../styles/ContactForm.module.css';
import CustomButton from '../Buttons/CustomButton';

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:remisalles.12@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Nom : ${form.name}\nEmail : ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailto;
    setSent(true);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="name">Votre nom</label>
          <input
            className={styles.input}
            id="name"
            name="name"
            type="text"
            placeholder="Jean Dupont"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">Adresse email</label>
          <input
            className={styles.input}
            id="email"
            name="email"
            type="email"
            placeholder="jean@exemple.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="subject">Sujet</label>
        <input
          className={styles.input}
          id="subject"
          name="subject"
          type="text"
          placeholder="Devis, collaboration, question..."
          value={form.subject}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="message">Message</label>
        <textarea
          className={styles.textarea}
          id="message"
          name="message"
          placeholder="Décrivez votre projet ou votre besoin..."
          value={form.message}
          onChange={handleChange}
          required
          rows={6}
        />
      </div>

      {sent && (
        <p className={styles.success}><FiCheckCircle style={{ verticalAlign: 'middle', marginRight: 6 }} /> Redirection vers votre client mail…</p>
      )}

      <CustomButton
        text="Envoyer le message"
        variant="filled"
        showArrow
        backgroundColor="#8C52FF"
        shadowColor="#1a1a1a"
        padding="14px 28px"
        fontSize="15px"
        color='white'
      />
    </form>
  );
};

export default ContactForm;
