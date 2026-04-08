'use client';

import { useState, useTransition, FormEvent } from 'react';
import { submitContactForm, type ContactFormData } from '@/app/actions/contact';

type FieldErrors = Partial<Record<keyof ContactFormData, string>>;

function SectionLabel() {
  return (
    <div className="flex items-center gap-2 mb-4">
      <div className="h-px w-8 bg-[#62a92b]/40 dark:bg-[#62a92b]/40" />
      <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#62a92b] dark:text-[#62a92b]">
        Get In Touch
      </span>
    </div>
  );
}

function FormInput({
  id,
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  required,
  autoComplete,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  const errorId = `${id}-error`;
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-xs font-mono font-medium uppercase tracking-wider text-gray-500 dark:text-[#8f8f92]"
      >
        {label}
        {required && (
          <span className="text-[#62a92b] dark:text-[#62a92b] ml-1" aria-hidden="true">
            *
          </span>
        )}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        required={required}
        aria-required={required}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className={[
          'w-full px-4 py-3 rounded-xl text-sm font-sans',
          'bg-gray-50 dark:bg-[#1e1e27]',
          'text-gray-900 dark:text-white',
          'border transition-all duration-200 outline-none',
          'placeholder:text-gray-400 dark:placeholder:text-[#4a4a52]',
          error
            ? 'border-red-400 dark:border-red-500 focus:ring-2 focus:ring-red-400/30 dark:focus:ring-red-500/30'
            : 'border-gray-200 dark:border-white/[0.08] focus:border-[#62a92b] dark:focus:border-[#62a92b] focus:ring-2 focus:ring-[#62a92b]/20 dark:focus:ring-[#62a92b]/20',
        ].join(' ')}
      />
      {error && (
        <p id={errorId} role="alert" className="text-xs text-red-500 dark:text-red-400 flex items-center gap-1 mt-0.5">
          <i className="ri-error-warning-line" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
}

function FormTextarea({
  id,
  label,
  placeholder,
  value,
  onChange,
  error,
  required,
  rows = 5,
}: {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  required?: boolean;
  rows?: number;
}) {
  const errorId = `${id}-error`;
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-xs font-mono font-medium uppercase tracking-wider text-gray-500 dark:text-[#8f8f92]"
      >
        {label}
        {required && (
          <span className="text-[#62a92b] dark:text-[#62a92b] ml-1" aria-hidden="true">
            *
          </span>
        )}
      </label>
      <textarea
        id={id}
        placeholder={placeholder}
        value={value}
        rows={rows}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        aria-required={required}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className={[
          'w-full px-4 py-3 rounded-xl text-sm font-sans resize-none',
          'bg-gray-50 dark:bg-[#1e1e27]',
          'text-gray-900 dark:text-white',
          'border transition-all duration-200 outline-none',
          'placeholder:text-gray-400 dark:placeholder:text-[#4a4a52]',
          error
            ? 'border-red-400 dark:border-red-500 focus:ring-2 focus:ring-red-400/30 dark:focus:ring-red-500/30'
            : 'border-gray-200 dark:border-white/[0.08] focus:border-[#62a92b] dark:focus:border-[#62a92b] focus:ring-2 focus:ring-[#62a92b]/20 dark:focus:ring-[#62a92b]/20',
        ].join(' ')}
      />
      {error && (
        <p id={errorId} role="alert" className="text-xs text-red-500 dark:text-red-400 flex items-center gap-1 mt-0.5">
          <i className="ri-error-warning-line" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
}

function SuccessBanner({ onReset }: { onReset: () => void }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex flex-col items-center justify-center gap-6 py-16 text-center"
    >
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 rounded-full bg-[#62a92b]/10 dark:bg-[#62a92b]/10 animate-ping" />
        <div className="relative w-20 h-20 rounded-full bg-[#62a92b]/15 dark:bg-[#62a92b]/15 border border-[#62a92b]/30 dark:border-[#62a92b]/30 flex items-center justify-center">
          <i className="ri-check-line text-3xl text-[#62a92b] dark:text-[#62a92b]" aria-hidden="true" />
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold font-sans text-gray-900 dark:text-white mb-2">
          Message Sent!
        </h3>
        <p className="text-sm font-sans text-gray-500 dark:text-[#636366] max-w-xs">
          Thanks for reaching out. I&apos;ll get back to you within 24–48 hours.
        </p>
      </div>

      <button
        onClick={onReset}
        className="inline-flex items-center gap-2 text-xs font-mono text-gray-400 dark:text-[#636366] hover:text-[#62a92b] dark:hover:text-[#62a92b] transition-colors duration-200"
      >
        <i className="ri-arrow-left-line" />
        Send another message
      </button>
    </div>
  );
}

function ContactInfo() {
  const items = [
    { icon: 'ri-mail-line',          label: 'Email',    value: 'huzaifamerndev@gmail.com', href: 'mailto:huzaifamerndev@gmail.com' },
    { icon: 'ri-github-line',        label: 'GitHub',   value: 'github.com/huzaifa-mern-dev', href: 'https://github.com/huzaifa-mern-dev' },
    { icon: 'ri-linkedin-box-line',  label: 'LinkedIn', value: 'linkedin.com/in/huzaifamerndev', href: 'https://www.linkedin.com/in/huzaifamerndev/' },
    { icon: 'ri-map-pin-line',       label: 'Location', value: 'Pakistan 🇵🇰', href: undefined },
  ];

  return (
    <div className="flex flex-col gap-4">
      {items.map(({ icon, label, value, href }) => (
        <div key={label} className="flex items-start gap-4">
          <div className="w-9 h-9 rounded-lg bg-[#62a92b]/10 dark:bg-[#62a92b]/10 border border-[#62a92b]/20 dark:border-[#62a92b]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
            <i className={`${icon} text-[#62a92b] dark:text-[#62a92b] text-base`} aria-hidden="true" />
          </div>
          <div>
            <p className="text-[10px] font-mono uppercase tracking-wider text-gray-400 dark:text-[#636366] mb-0.5">
              {label}
            </p>
            {href ? (
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-sm font-sans text-gray-700 dark:text-[#bcbcbe] hover:text-[#62a92b] dark:hover:text-[#62a92b] transition-colors duration-200 break-all"
              >
                {value}
              </a>
            ) : (
              <p className="text-sm font-sans text-gray-700 dark:text-[#bcbcbe]">{value}</p>
            )}
          </div>
        </div>
      ))}

      <div className="mt-4 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#62a92b]/8 dark:bg-[#62a92b]/8 border border-[#62a92b]/20 dark:border-[#62a92b]/20">
        <span className="w-2 h-2 rounded-full bg-[#62a92b] dark:bg-[#62a92b] animate-pulse" />
        <span className="text-xs font-mono text-[#62a92b] dark:text-[#62a92b]">
          Available for new projects
        </span>
      </div>
    </div>
  );
}

export default function ContactSection() {
  const [name,    setName]    = useState('');
  const [email,   setEmail]   = useState('');
  const [phone,   setPhone]   = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [errors,    setErrors]    = useState<FieldErrors>({});
  const [serverErr, setServerErr] = useState<string | null>(null);
  const [succeeded, setSucceeded] = useState(false);
  const [isPending, startTransition] = useTransition();

  function validate(): FieldErrors {
    const errs: FieldErrors = {};
    if (!name.trim())    errs.name    = 'Your name is required.';
    if (!email.trim())   errs.email   = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
                         errs.email   = 'Please enter a valid email.';
    if (!subject.trim()) errs.subject = 'Please enter a subject.';
    if (!message.trim() || message.trim().length < 10)
                         errs.message = 'Message must be at least 10 characters.';
    return errs;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setServerErr(null);

    const clientErrors = validate();
    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      return;
    }
    setErrors({});

    startTransition(async () => {
      const result = await submitContactForm({ name, email, phone, subject, message });
      if (result.success) {
        setSucceeded(true);
      } else {
        setServerErr(result.error ?? 'Something went wrong. Please try again.');
      }
    });
  }

  function handleReset() {
    setName(''); setEmail(''); setPhone('');
    setSubject(''); setMessage('');
    setErrors({}); setServerErr(null);
    setSucceeded(false);
  }

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:48px_48px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#62a92b]/[0.04] dark:bg-[#62a92b]/[0.04] blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-[#62a92b]/40 dark:bg-[#62a92b]/40" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#62a92b] dark:text-[#62a92b]">
              Get In Touch
            </span>
            <div className="h-px w-8 bg-[#62a92b]/40 dark:bg-[#62a92b]/40" />
          </div>
          <h2
            id="contact-heading"
            className="text-3xl md:text-4xl font-bold font-sans text-gray-900 dark:text-white mb-4 leading-tight"
          >
            Let&apos;s{' '}
            <span className="text-[#62a92b] dark:text-[#62a92b]">Work Together</span>
          </h2>
          <p className="text-gray-500 dark:text-[#636366] font-sans font-normal text-base max-w-xl mx-auto leading-relaxed">
            Have a project in mind, a question, or just want to say hi?
            Drop me a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          <div className="lg:col-span-2 flex flex-col justify-center">
            <SectionLabel />
            <h3 className="text-xl font-bold font-sans text-gray-900 dark:text-white mb-6">
              Contact Info
            </h3>
            <ContactInfo />
          </div>

          <div className="lg:col-span-3">
            <div className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-[#1e1e27] border border-gray-200/70 dark:border-white/[0.07] shadow-[0_2px_16px_rgba(0,0,0,0.06)] dark:shadow-none">
              {succeeded ? (
                <SuccessBanner onReset={handleReset} />
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                  noValidate
                  aria-label="Contact form"
                >
                  {serverErr && (
                    <div
                      role="alert"
                      className="flex items-start gap-2.5 p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/50 text-sm text-red-600 dark:text-red-400 font-sans"
                    >
                      <i className="ri-error-warning-line text-base flex-shrink-0 mt-px" />
                      {serverErr}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormInput
                      id="contact-name"
                      label="Name"
                      placeholder="Muhammad Huzaifa"
                      value={name}
                      onChange={setName}
                      error={errors.name}
                      required
                      autoComplete="name"
                    />
                    <FormInput
                      id="contact-email"
                      label="Email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={setEmail}
                      error={errors.email}
                      required
                      autoComplete="email"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormInput
                      id="contact-phone"
                      label="Phone (optional)"
                      type="tel"
                      placeholder="+92 300 000 0000"
                      value={phone}
                      onChange={setPhone}
                      autoComplete="tel"
                    />
                    <FormInput
                      id="contact-subject"
                      label="Subject"
                      placeholder="Project inquiry"
                      value={subject}
                      onChange={setSubject}
                      error={errors.subject}
                      required
                    />
                  </div>

                  <FormTextarea
                    id="contact-message"
                    label="Message"
                    placeholder="Tell me about your project, timeline, and budget…"
                    value={message}
                    onChange={setMessage}
                    error={errors.message}
                    required
                    rows={5}
                  />

                  <button
                    type="submit"
                    disabled={isPending}
                    className={[
                      'mt-1 w-full flex items-center justify-center gap-2.5',
                      'px-6 py-3.5 rounded-xl font-sans font-semibold text-sm',
                      'transition-all duration-200',
                      isPending
                        ? 'bg-[#62a92b]/70 dark:bg-[#62a92b]/70 text-white dark:text-[#1e1e27] cursor-not-allowed'
                        : 'bg-[#62a92b] dark:bg-[#62a92b] text-white dark:text-[#1e1e27] hover:bg-[#4e8a1e] dark:hover:bg-[#8ed63e] shadow-[0_4px_14px_rgba(98,169,43,0.4)] dark:shadow-[0_4px_14px_rgba(168,255,83,0.3)] hover:shadow-[0_6px_20px_rgba(98,169,43,0.5)] dark:hover:shadow-[0_6px_20px_rgba(168,255,83,0.4)]',
                    ].join(' ')}
                    aria-busy={isPending}
                  >
                    {isPending ? (
                      <>
                        <svg
                          className="animate-spin h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        <i className="ri-send-plane-line" aria-hidden="true" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] font-mono text-gray-300 dark:text-[#3b3b41]">
                    No spam, ever. I respect your privacy.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
