'use client';

import { useState, useRef } from 'react';

import IntakeForm from '@/components/IntakeForm';

const ACCESS_CODE = 'lvlup2025';

export default function IntakePage() {
  const [code, setCode] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  function handleUnlock(e: React.FormEvent) {
    e.preventDefault();
    if (code.trim() === ACCESS_CODE) {
      setUnlocked(true);
      setError('');
    } else {
      setError('Incorrect access code.');
      setCode('');
      inputRef.current?.focus();
    }
  }

  if (unlocked) {
    return (
      <section className="min-h-screen py-16 px-4">
        <div className="max-w-[920px] mx-auto">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[rgba(0,194,255,0.08)] border border-[rgba(0,194,255,0.2)] text-[#00C2FF]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-pulse" aria-hidden="true" />
              Client Intake Form
            </div>
            <h1 className="font-heading text-2xl font-bold text-[#F0F0FF] tracking-tight">
              Let&apos;s build your website.
            </h1>
            <p className="mt-2 text-sm text-[#70708A] leading-relaxed max-w-md mx-auto">
              Take your time — every answer helps us build something that actually works for your business.
            </p>
          </div>
          <div className="rounded-2xl border border-[#252535] bg-[#111118] p-6 sm:p-8">
            <IntakeForm />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16">
      {/* Background glow */}
      <div
        className="pointer-events-none fixed inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #00C2FF 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative w-full max-w-sm">
        {/* Lock icon */}
        <div className="flex justify-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-[#1C1C28] border border-[#252535] flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#00C2FF"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
        </div>

        <div className="text-center mb-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#00C2FF] mb-3">LvL Up Local</p>
          <h1 className="font-heading text-2xl font-bold text-[#F0F0FF] tracking-tight mb-2">
            Client Portal
          </h1>
          <p className="text-sm text-[#70708A] leading-relaxed">
            Enter your access code to continue to the intake form.
          </p>
        </div>

        <form onSubmit={handleUnlock} noValidate>
          <div className="mb-4">
            <label htmlFor="access-code" className="block text-sm font-medium text-[#F0F0FF] mb-2">
              Access code
            </label>
            <input
              ref={inputRef}
              id="access-code"
              type="password"
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
                if (error) setError('');
              }}
              placeholder="Enter your code"
              autoComplete="off"
              autoFocus
              aria-describedby={error ? 'access-code-error' : undefined}
              aria-invalid={error ? 'true' : 'false'}
              className="w-full px-4 py-3 rounded-xl bg-[#1C1C28] border text-[#F0F0FF] text-sm placeholder:text-[#4A4A65] outline-none transition-colors duration-200 focus:border-[#00C2FF]"
              style={{ borderColor: error ? '#FF4D4D' : '#252535' }}
            />
            {error && (
              <p
                id="access-code-error"
                role="alert"
                className="mt-2 text-xs text-[#FF4D4D]"
              >
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-[#00C2FF] text-[#09090F] text-sm font-semibold tracking-wide hover:bg-[#33CEFF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00C2FF] active:scale-[0.98] transition-all duration-150"
          >
            Access Form
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-[#4A4A65]">
          Don&apos;t have a code?{' '}
          <a
            href="/contact"
            className="text-[#70708A] underline underline-offset-2 hover:text-[#F0F0FF] transition-colors duration-150"
          >
            Contact us
          </a>
        </p>
      </div>
    </section>
  );
}
