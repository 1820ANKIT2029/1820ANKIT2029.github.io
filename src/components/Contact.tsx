/**
 * Contact.tsx — reads all values from config.ts
 */
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { contactConfig } from '../config';
import BrandIcon from './BrandIcon';

const itemVariants = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Contact() {
  const [name,    setName]    = useState('');
  const [email,   setEmail]   = useState('');
  const [message, setMessage] = useState('');

  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error(contactConfig.toastMessages.errorEmpty);
      return;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      toast.error(contactConfig.toastMessages.errorEmail);
      return;
    }
    const to      = contactConfig.toEmail;
    const subject = encodeURIComponent(contactConfig.gmailSubjectTemplate(name));
    const body    = encodeURIComponent(contactConfig.gmailBodyTemplate(name, email, message));
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`,
      '_blank'
    );
    setName(''); setEmail(''); setMessage('');
    toast.success(contactConfig.toastMessages.success);
  };

  const fieldClass = `
    w-full bg-ap-on-primary/5 border border-ap-on-primary/15 rounded-ap-lg
    px-ap-md py-ap-sm
    font-ap-body text-ap-body-md text-ap-on-primary placeholder-ap-on-primary/40
    focus:outline-none focus:border-ap-secondary
    transition-colors duration-200
  `;

  return (
    <section id="contact" className="bg-ap-surface py-ap-xl md:py-ap-xxl">
      <div className="max-w-ap mx-auto px-ap-lg">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={itemVariants}
          className="ap-contact-card rounded-2xl p-ap-lg md:p-ap-xl flex flex-col md:flex-row gap-ap-xl lg:gap-ap-xxl items-start"
        >
          {/* ── Left: headline + social ── */}
          <div className="flex-1">
            <h2 className="font-ap-display text-ap-display-mob text-ap-on-primary mb-ap-md leading-tight">
              {contactConfig.heading}
            </h2>
            <p className="font-ap-body text-ap-body-lg text-ap-primary-fixed-dim mb-ap-xl max-w-[420px]">
              {contactConfig.subtitle}
            </p>

            <a
              href={`mailto:${contactConfig.toEmail}`}
              className="flex items-center gap-ap-md text-ap-on-primary hover:text-ap-secondary transition-colors mb-ap-lg"
            >
              <span className="material-symbols-outlined">mail</span>
              <span className="font-ap-mono text-ap-label-mono">
                {contactConfig.toEmail}
              </span>
            </a>

            {/* Social icons */}
            <div className="flex flex-wrap gap-ap-sm">
              {contactConfig.socialLinks.map(({ label, icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className="
                    w-10 h-10 rounded-full bg-ap-on-primary/10
                    flex items-center justify-center text-ap-on-primary
                    hover:bg-ap-secondary hover:text-white transition-colors duration-200
                  "
                  aria-label={label}
                >
                  <BrandIcon name={icon} className="text-[20px]" />
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: form ── */}
          <div className="flex-1 w-full max-w-[420px]">
            <form onSubmit={handleSubmit} noValidate className="space-y-ap-md">
              <div>
                <label className="block font-ap-mono text-ap-caption uppercase tracking-widest text-ap-on-primary/60 mb-ap-xs">
                  {contactConfig.formLabels.name}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder={contactConfig.placeholders.name}
                  className={fieldClass}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="block font-ap-mono text-ap-caption uppercase tracking-widest text-ap-on-primary/60 mb-ap-xs">
                  {contactConfig.formLabels.email}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder={contactConfig.placeholders.email}
                  className={fieldClass}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="block font-ap-mono text-ap-caption uppercase tracking-widest text-ap-on-primary/60 mb-ap-xs">
                  {contactConfig.formLabels.message}
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder={contactConfig.placeholders.message}
                  className={fieldClass}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="
                  w-full py-ap-md
                  bg-ap-on-primary text-ap-primary
                  font-ap-mono text-ap-caption uppercase tracking-widest font-bold
                  rounded-ap-lg
                  hover:bg-ap-secondary hover:text-white
                  transition-colors duration-200
                "
              >
                {contactConfig.formLabels.submit}
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      <ToastContainer position="bottom-right" autoClose={3500} theme="colored" />
    </section>
  );
}
