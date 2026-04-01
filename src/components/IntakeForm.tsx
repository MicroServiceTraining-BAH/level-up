'use client';

import { useState } from 'react';

// Replace this with your actual Formspree endpoint (e.g. https://formspree.io/f/abcdefgh)
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mnjozyye';

type FieldType = 'text' | 'tel' | 'email' | 'url' | 'textarea' | 'select';

type Field = {
  id: string;
  label: string;
  type: FieldType;
  required: boolean;
  hint?: string;
  options?: string[];
};

type Section = {
  title: string;
  subtitle: string;
  fields: Field[];
};

const SECTIONS: Section[] = [
  {
    title: 'Business Information',
    subtitle: "The basics — let's get the details right.",
    fields: [
      { id: 'businessName', label: 'Business name', type: 'text', required: true, hint: 'The legal or trading name of your business.' },
      { id: 'contactName', label: 'Your name', type: 'text', required: true, hint: 'First and last name of the main contact.' },
      { id: 'phone', label: 'Phone number', type: 'tel', required: true, hint: 'Best number to reach you directly.' },
      { id: 'email', label: 'Email address', type: 'email', required: true, hint: "Work email preferred — this is where we'll send updates." },
      { id: 'address', label: 'Business address', type: 'text', required: false, hint: 'Full address if you have a physical location. Service-area businesses can leave this blank.' },
      { id: 'publicPhone', label: 'Public phone number', type: 'tel', required: false, hint: 'The phone number you want displayed on your website.' },
      { id: 'currentWebsite', label: 'Current website URL', type: 'url', required: false, hint: 'If you have one — paste the full link (https://...)' },
      {
        id: 'industry', label: 'Industry / type of business', type: 'select', required: true,
        options: ['Restaurant / Food', 'Home Services (plumbing, HVAC, electrical, etc.)', 'Health & Wellness', 'Retail / Shop', 'Professional Services (legal, finance, consulting)', 'Beauty & Personal Care', 'Auto Services', 'Contractor / Construction', 'Other'],
      },
    ],
  },
  {
    title: 'Your Customers',
    subtitle: "Help us understand who you're trying to reach.",
    fields: [
      { id: 'targetCustomers', label: 'Who are your ideal customers?', type: 'textarea', required: true, hint: 'Age range, location, what problem they have that you solve.' },
      { id: 'serviceArea', label: 'Service area or location', type: 'text', required: true, hint: "City, zip code, or radius (e.g. 'Northern Virginia' or 'within 30 miles of Manassas')." },
      { id: 'competitors', label: 'Who are your main competitors?', type: 'textarea', required: false, hint: 'Business names or websites. This helps us position you differently.' },
    ],
  },
  {
    title: 'Your Services',
    subtitle: 'What do you offer? Be as specific as you can.',
    fields: [
      { id: 'services', label: 'List your main services or products', type: 'textarea', required: true, hint: 'One per line is fine. Include prices if you want them on the site.' },
      { id: 'uniqueValue', label: 'What makes you different?', type: 'textarea', required: true, hint: 'Why should someone choose you over a competitor? Awards, experience, price, speed — anything.' },
      { id: 'callToAction', label: 'What do you want visitors to do first?', type: 'select', required: true, options: ['Call you', 'Fill out a contact form', 'Book an appointment', 'Get a quote', 'Visit your location', 'Other'] },
    ],
  },
  {
    title: 'Branding & Style',
    subtitle: "We'll design something that fits your business personality.",
    fields: [
      { id: 'colors', label: 'Do you have brand colors?', type: 'text', required: false, hint: "List them (e.g. 'dark green and gold') or paste hex codes if you have them." },
      { id: 'logoStatus', label: 'Do you have a logo?', type: 'select', required: true, options: ['Yes — I\'ll send it', 'No — please create a simple one', 'Not sure'] },
      { id: 'styleVibes', label: 'How would you describe the feel you want?', type: 'textarea', required: false, hint: "Words like 'professional', 'friendly', 'luxury', 'rustic', 'modern', 'clean' all help. Website examples you like are even better." },
    ],
  },
  {
    title: 'Website Content',
    subtitle: "We'll write copy for you, but the more context you give us, the better.",
    fields: [
      { id: 'businessStory', label: 'Tell us your story', type: 'textarea', required: false, hint: 'How long have you been in business? Why did you start? Anything personal or memorable?' },
      { id: 'photos', label: 'Photos / media available', type: 'select', required: true, options: ['I have photos I can share', 'I need you to use stock photos for now', 'I can get photos taken', 'No photos yet'] },
      { id: 'testimonials', label: 'Do you have customer reviews or testimonials?', type: 'textarea', required: false, hint: 'Paste them here or let us know if we should pull from your Google listing.' },
      { id: 'certifications', label: 'Any awards, certifications, or credentials?', type: 'textarea', required: false, hint: 'Licensed, insured, BBB rated, years in business, industry associations — anything that builds trust.' },
    ],
  },
  {
    title: 'Technical Details',
    subtitle: 'If you already have accounts set up, we\'ll connect to them.',
    fields: [
      { id: 'googleBusiness', label: 'Google Business Profile', type: 'select', required: true, options: ['Yes — it\'s set up and verified', 'Yes — but it\'s not verified', 'No — I don\'t have one', 'Not sure'] },
      { id: 'socialMedia', label: 'Social media accounts', type: 'textarea', required: false, hint: 'List any Facebook, Instagram, TikTok, Yelp, or other profile links you want connected to your site.' },
      { id: 'bookingTool', label: 'Do you use any booking or scheduling tool?', type: 'text', required: false, hint: 'e.g. Calendly, Square, Vagaro, Mindbody — or leave blank if not.' },
      { id: 'additionalTools', label: 'Any other tools or software we should know about?', type: 'textarea', required: false, hint: 'Point of sale, loyalty programs, email lists, etc.' },
    ],
  },
  {
    title: 'Your Goals',
    subtitle: 'Help us measure success.',
    fields: [
      { id: 'primaryGoal', label: "What's the #1 thing you want the website to do for you?", type: 'textarea', required: true, hint: 'More calls, more bookings, show up on Google, look more professional — there\'s no wrong answer.' },
      { id: 'timeline', label: 'Do you have a target launch date?', type: 'text', required: false, hint: "If there's an event, opening date, or urgency — let us know." },
      { id: 'budget', label: 'Selected package', type: 'select', required: true, options: ['🟢 Launch — $700 setup + $99/mo', '🔵 Growth — $700 setup + $249/mo (most popular)', '🔴 Authority — $700 setup + $399/mo'] },
    ],
  },
  {
    title: 'Anything Else',
    subtitle: 'Last chance — anything we should know?',
    fields: [
      { id: 'extraInfo', label: 'Additional notes or requests', type: 'textarea', required: false, hint: "Questions, concerns, special requests, or anything that didn't fit above." },
      { id: 'referral', label: 'How did you hear about LvL Up Local?', type: 'text', required: false, hint: "Word of mouth, social media, Google — helps us know what's working." },
    ],
  },
];

type FormData = Record<string, string>;

// CSS variable values mapped to the site's brand tokens
const CSS_VARS: Record<string, string> = {
  '--color-background-primary': '#111118',
  '--color-background-secondary': '#1C1C28',
  '--color-background-success': 'rgba(57, 255, 20, 0.1)',
  '--color-text-primary': '#F0F0FF',
  '--color-text-secondary': '#70708A',
  '--color-text-tertiary': '#4A4A65',
  '--color-text-success': '#39FF14',
  '--color-text-danger': '#FF4D4D',
  '--color-border-secondary': '#252535',
  '--color-border-danger': '#FF4D4D',
  '--border-radius-md': '8px',
  '--border-radius-lg': '12px',
};

export default function IntakeForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>({});
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const current = SECTIONS[step];
  const total = SECTIONS.length;
  const progress = (step / total) * 100;

  function handleChange(id: string, value: string) {
    setData((d) => ({ ...d, [id]: value }));
    if (errors[id]) setErrors((e) => ({ ...e, [id]: false }));
  }

  function validate() {
    const newErrors: Record<string, boolean> = {};
    current.fields.forEach((f) => {
      if (f.required && !data[f.id]?.trim()) newErrors[f.id] = true;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleNext() {
    if (validate()) setStep((s) => s + 1);
  }

  function handleBack() {
    setStep((s) => s - 1);
    setErrors({});
  }

  async function handleSubmit() {
    if (!validate()) return;
    setIsSubmitting(true);
    setSubmitError('');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitError('Something went wrong. Please try again or text us directly.');
      }
    } catch {
      setSubmitError('Something went wrong. Please try again or text us directly.');
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div style={{ ...CSS_VARS, maxWidth: 860, margin: '0 auto', padding: '3rem 1rem', textAlign: 'center' } as React.CSSProperties}>
        <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--color-background-success)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: 28, border: '1px solid rgba(57,255,20,0.2)' }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-success)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h2 style={{ fontSize: 22, fontWeight: 600, margin: '0 0 0.75rem', color: 'var(--color-text-primary)' }}>
          You&apos;re all set, {data.contactName?.split(' ')[0] || 'there'}!
        </h2>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: 15, lineHeight: 1.7, margin: '0 0 2rem' }}>
          We received your intake form for <strong style={{ color: 'var(--color-text-primary)' }}>{data.businessName}</strong>. Someone from LvL Up Local will be in touch within 24 hours to confirm your details and kick things off.
        </p>
        <div style={{ background: 'var(--color-background-secondary)', borderRadius: 'var(--border-radius-lg)', padding: '1rem 1.25rem', textAlign: 'left', border: '1px solid #252535' }}>
          <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', margin: '0 0 0.5rem', fontWeight: 500 }}>What happens next</p>
          {['We review your form and set up your accounts.', "You'll get a preview link within 3–5 business days.", 'You review, request any changes, and we launch.'].map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginTop: 8 }}>
              <div style={{ minWidth: 22, height: 22, borderRadius: '50%', background: 'rgba(0,194,255,0.15)', border: '1px solid rgba(0,194,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: '#00C2FF', fontWeight: 600, marginTop: 1 }}>
                {i + 1}
              </div>
              <p style={{ margin: 0, fontSize: 14, color: 'var(--color-text-primary)', lineHeight: 1.6 }}>{s}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={{ ...CSS_VARS, maxWidth: 860, margin: '0 auto', padding: '1.5rem 1rem 2rem' } as React.CSSProperties}>
      {/* Progress header */}
      <div style={{ marginBottom: '1.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
          <span style={{ fontWeight: 600, fontSize: 13, color: '#00C2FF', letterSpacing: '0.05em', textTransform: 'uppercase' }}>LvL Up Local</span>
          <span style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>Step {step + 1} of {total}</span>
        </div>
        <div style={{ height: 3, background: '#1C1C28', borderRadius: 4, overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${progress + (100 / total)}%`, background: 'linear-gradient(90deg, #00C2FF, #39FF14)', borderRadius: 4, transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }} />
        </div>
      </div>

      {/* Section heading */}
      <h2 style={{ fontSize: 20, fontWeight: 600, margin: '0 0 0.25rem', color: 'var(--color-text-primary)' }}>{current.title}</h2>
      <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', margin: '0 0 1.75rem', lineHeight: 1.6 }}>{current.subtitle}</p>

      {/* Fields */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px 24px' }}>
        {current.fields.map((field) => (
          <div
            key={field.id}
            style={{
              gridColumn: field.type === 'textarea' ? '1 / -1' : 'auto',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Label + hint stay at top */}
            <div>
              <label
                htmlFor={field.id}
                style={{ display: 'block', fontSize: 14, fontWeight: 500, color: 'var(--color-text-primary)', marginBottom: 4 }}
              >
                {field.label}
                {field.required && <span style={{ color: '#FF4D4D', marginLeft: 3 }} aria-hidden="true">*</span>}
              </label>
              {field.hint && (
                <p style={{ fontSize: 12, color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>{field.hint}</p>
              )}
            </div>

            {/* Input pinned to bottom of cell so all inputs in a row align */}
            <div style={{ marginTop: 'auto', paddingTop: 8 }}>
              {field.type === 'textarea' ? (
                <textarea
                  id={field.id}
                  value={data[field.id] || ''}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                  rows={4}
                  aria-required={field.required}
                  aria-invalid={errors[field.id] ? 'true' : 'false'}
                  style={{ width: '100%', padding: '8px 12px', borderRadius: 'var(--border-radius-md)', border: errors[field.id] ? '1px solid var(--color-border-danger)' : '1px solid var(--color-border-secondary)', background: 'var(--color-background-primary)', color: 'var(--color-text-primary)', fontSize: 14, lineHeight: 1.6, resize: 'vertical', boxSizing: 'border-box', fontFamily: 'inherit', outline: 'none' }}
                />
              ) : field.type === 'select' ? (
                <select
                  id={field.id}
                  value={data[field.id] || ''}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                  aria-required={field.required}
                  aria-invalid={errors[field.id] ? 'true' : 'false'}
                  style={{ width: '100%', padding: '8px 12px', borderRadius: 'var(--border-radius-md)', border: errors[field.id] ? '1px solid var(--color-border-danger)' : '1px solid var(--color-border-secondary)', background: 'var(--color-background-primary)', color: data[field.id] ? 'var(--color-text-primary)' : 'var(--color-text-tertiary)', fontSize: 14, boxSizing: 'border-box', outline: 'none' }}
                >
                  <option value="" disabled>Select an option</option>
                  {field.options?.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              ) : (
                <input
                  id={field.id}
                  type={field.type}
                  value={data[field.id] || ''}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                  aria-required={field.required}
                  aria-invalid={errors[field.id] ? 'true' : 'false'}
                  style={{ width: '100%', padding: '8px 12px', borderRadius: 'var(--border-radius-md)', border: errors[field.id] ? '1px solid var(--color-border-danger)' : '1px solid var(--color-border-secondary)', background: 'var(--color-background-primary)', color: 'var(--color-text-primary)', fontSize: 14, boxSizing: 'border-box', fontFamily: 'inherit', outline: 'none' }}
                />
              )}
              {errors[field.id] && (
                <p role="alert" style={{ fontSize: 12, color: 'var(--color-text-danger)', margin: '4px 0 0' }}>
                  This field is required.
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Submit error */}
      {submitError && (
        <p role="alert" style={{ fontSize: 13, color: '#FF4D4D', margin: '1.25rem 0 0', padding: '10px 14px', background: 'rgba(255,77,77,0.08)', borderRadius: 8, border: '1px solid rgba(255,77,77,0.2)' }}>
          {submitError}
        </p>
      )}

      {/* Navigation buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem', gap: 12 }}>
        {step > 0 ? (
          <button
            onClick={handleBack}
            disabled={isSubmitting}
            style={{ padding: '10px 20px', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--color-border-secondary)', background: 'transparent', color: 'var(--color-text-secondary)', fontSize: 14, cursor: 'pointer' }}
          >
            Back
          </button>
        ) : (
          <div />
        )}
        {step < total - 1 ? (
          <button
            onClick={handleNext}
            style={{ padding: '10px 24px', borderRadius: 'var(--border-radius-md)', border: 'none', background: '#00C2FF', color: '#09090F', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}
          >
            Continue
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            style={{ padding: '10px 24px', borderRadius: 'var(--border-radius-md)', border: 'none', background: isSubmitting ? '#1C1C28' : '#00C2FF', color: isSubmitting ? '#70708A' : '#09090F', fontSize: 14, fontWeight: 600, cursor: isSubmitting ? 'not-allowed' : 'pointer', transition: 'background 0.2s, color 0.2s' }}
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        )}
      </div>
    </div>
  );
}
