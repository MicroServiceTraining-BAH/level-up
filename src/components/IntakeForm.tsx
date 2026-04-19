"use client";

import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mnjozyye";

export type FieldType =
  | "text"
  | "tel"
  | "email"
  | "url"
  | "number"
  | "textarea"
  | "select"
  | "radio"
  | "checkbox";

export type Field = {
  id: string;
  label: string;
  type: FieldType;
  required: boolean;
  hint?: string;
  placeholder?: string;
  options?: string[];
};

export type Section = {
  title: string;
  subtitle: string;
  notice?: string;
  fields: Field[];
};

const SECTIONS: Section[] = [
  {
    title: "Business info",
    subtitle: "The basics — let's get the details right.",
    fields: [
      {
        id: "business_name",
        label: "Business name",
        type: "text",
        required: true,
        placeholder: "e.g. Smith's Plumbing",
      },
      {
        id: "phone",
        label: "Phone number",
        type: "tel",
        required: true,
        placeholder: "(555) 123-4567",
      },
      {
        id: "email",
        label: "Business email",
        type: "email",
        required: true,
        placeholder: "you@yourbusiness.com",
      },
      {
        id: "service_area",
        label: "Service area",
        type: "text",
        required: true,
        placeholder: "e.g. Dallas & surrounding 30mi",
      },
      {
        id: "address",
        label: "Physical address",
        type: "text",
        required: false,
        hint: "Only if you want it displayed. Leave blank if service-area only.",
        placeholder: "123 Main St, City, State, ZIP",
      },
      {
        id: "hours",
        label: "Hours of operation",
        type: "text",
        required: false,
        placeholder: "e.g. Mon–Fri 8am–6pm, Sat 9am–2pm",
      },
    ],
  },
  {
    title: "Your content",
    subtitle: "What you're providing before we can build.",
    notice:
      "You must supply all content before your site can launch. We do not write copy, source photos, or design logos.",
    fields: [
      {
        id: "logo_ready",
        label: "Do you have a logo ready to send?",
        type: "radio",
        required: true,
        options: [
          "Yes — I'll send the file (PNG, SVG, or AI preferred)",
          "No — I need to get one made before launch",
        ],
      },
      {
        id: "photos_ready",
        label: "Do you have photos ready?",
        type: "radio",
        required: true,
        hint: "Photos of your work, team, storefront, or products. Stock photos are not provided by us.",
        options: [
          "Yes — I'll send them",
          "No — I'll source or take them before launch",
        ],
      },
      {
        id: "copy_ready",
        label: "Do you have written content ready?",
        type: "radio",
        required: true,
        hint: "About blurb, service descriptions, anything you want on the site.",
        options: ["Yes — I'll send it", "No — I'll write it before launch"],
      },
      {
        id: "content_deadline",
        label: "Content delivery date",
        type: "text",
        required: false,
        hint: "What date can you have everything (logo, photos, copy) to us by? We can't start building until we have it.",
        placeholder: "e.g. By March 15",
      },
    ],
  },
  {
    title: "Site goal & pages",
    subtitle: "What you want visitors to do and which pages you need.",
    fields: [
      {
        id: "site_goal",
        label: "What's the #1 action you want visitors to take?",
        type: "radio",
        required: true,
        options: [
          "Call you",
          "Submit a contact or quote request form",
          "Book an appointment",
          "Visit in person / get directions",
        ],
      },
      {
        id: "pages",
        label: "Which pages do you need?",
        type: "checkbox",
        required: true,
        hint: "Select all that apply.",
        options: [
          "Home",
          "Services",
          "Contact",
          "About",
          "Gallery",
          "FAQ",
          "Testimonials",
          "Blog",
          "Menu / pricing",
        ],
      },
    ],
  },
  {
    title: "Systems & functionality",
    subtitle: "Tools and forms you need on your site.",
    fields: [
      {
        id: "scheduling",
        label: "Do you need an online scheduling / booking system?",
        type: "radio",
        required: true,
        options: ["Yes", "No", "Not sure — let's talk about it"],
      },
      {
        id: "intake_form",
        label: "Do you need a contact / lead intake form?",
        type: "radio",
        required: true,
        options: ["Yes", "No"],
      },
      {
        id: "form_destination",
        label: "Where should form submissions be sent?",
        type: "text",
        required: false,
        hint: "Email address or phone number for SMS notifications.",
        placeholder: "e.g. you@business.com or (555) 123-4567",
      },
      {
        id: "existing_tools",
        label: "Tools or software you currently use",
        type: "text",
        required: false,
        hint: "e.g. Calendly, Jobber, HouseCall Pro, Square. We'll check if we can connect them.",
        placeholder: "List any tools you already use",
      },
    ],
  },
  {
    title: "Domain & access",
    subtitle: "Your web presence and social profiles.",
    fields: [
      {
        id: "domain",
        label: "Do you already own a domain?",
        type: "radio",
        required: true,
        options: ["Yes — I own one", "No — I need one purchased", "Not sure"],
      },
      {
        id: "domain_name",
        label: "Domain name if you have one",
        type: "text",
        required: false,
        placeholder: "e.g. smithsplumbing.com",
      },
      {
        id: "google_business",
        label: "Do you have a Google Business Profile?",
        type: "radio",
        required: true,
        options: ["Yes", "No", "Not sure"],
      },
      {
        id: "facebook",
        label: "Facebook URL",
        type: "text",
        required: false,
        placeholder: "Facebook URL",
      },
      {
        id: "instagram",
        label: "Instagram URL",
        type: "text",
        required: false,
        placeholder: "Instagram URL",
      },
      {
        id: "other_social",
        label: "Other social profiles",
        type: "text",
        required: false,
        placeholder: "Other (Yelp, TikTok, LinkedIn...)",
      },
    ],
  },
  {
    title: "Style preferences",
    subtitle: "Help us match the look and feel you're going for.",
    fields: [
      {
        id: "style_inspo",
        label: "A website whose look you like",
        type: "url",
        required: false,
        hint: "Drop a URL. Helps us match the vibe you're going for.",
        placeholder: "https://...",
      },
      {
        id: "brand_colors",
        label: "Brand colors",
        type: "text",
        required: false,
        placeholder: "e.g. Navy blue and white, or #003366",
      },
      {
        id: "anything_else",
        label: "Anything else we should know?",
        type: "textarea",
        required: false,
        hint: "Special requests, things to avoid, hard launch deadline, etc.",
        placeholder: "Type here...",
      },
    ],
  },
];

type FormData = Record<string, string>;

const CSS_VARS: Record<string, string> = {
  "--color-background-primary": "#111118",
  "--color-background-secondary": "#1C1C28",
  "--color-background-success": "rgba(57, 255, 20, 0.1)",
  "--color-text-primary": "#F0F0FF",
  "--color-text-secondary": "#70708A",
  "--color-text-tertiary": "#4A4A65",
  "--color-text-success": "#39FF14",
  "--color-text-danger": "#FF4D4D",
  "--color-border-secondary": "#252535",
  "--border-radius-md": "8px",
  "--border-radius-lg": "12px",
};

function validateField(field: Field, value: string): string {
  const v = value?.trim() ?? "";

  if (field.required && !v) {
    if (field.type === "select") return "Please select an option.";
    if (field.type === "radio") return "Please select an option.";
    if (field.type === "checkbox") return "Please select at least one option.";
    return "This field is required.";
  }

  if (v) {
    if (field.type === "email") {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v))
        return "Enter a valid email address.";
    }
    if (field.type === "tel") {
      if (v.replace(/[\s\-().+]/g, "").replace(/\D/g, "").length < 7)
        return "Enter a valid phone number.";
    }
    if (field.type === "url") {
      if (!/^https?:\/\/.+\..+/.test(v))
        return "Enter a valid URL starting with https://";
    }
  }

  return "";
}

export default function IntakeForm({
  sections: sectionsProp,
}: {
  sections?: Section[];
} = {}) {
  const resolvedSections = sectionsProp ?? SECTIONS;
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>({});
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const current = resolvedSections[step];
  const total = resolvedSections.length;
  const progress = (step / total) * 100;

  function handleChange(id: string, value: string) {
    setData((d) => ({ ...d, [id]: value }));
    if (touched[id]) {
      const field = current.fields.find((f) => f.id === id);
      if (field) {
        const msg = validateField(field, value);
        setErrors((e) => ({ ...e, [id]: msg }));
      }
    }
  }

  function handleCheckboxChange(id: string, option: string, checked: boolean) {
    const current_vals = data[id] ? data[id].split(", ") : [];
    const next = checked
      ? [...current_vals, option]
      : current_vals.filter((v) => v !== option);
    handleChange(id, next.join(", "));
  }

  function handleBlur(id: string) {
    if (touched[id]) return;
    setTouched((t) => ({ ...t, [id]: true }));
    const field = current.fields.find((f) => f.id === id);
    if (field) {
      const msg = validateField(field, data[id] ?? "");
      setErrors((e) => ({ ...e, [id]: msg }));
    }
  }

  function validate() {
    const newErrors: Record<string, string> = {};
    const newTouched: Record<string, boolean> = {};
    current.fields.forEach((f) => {
      newTouched[f.id] = true;
      const msg = validateField(f, data[f.id] ?? "");
      if (msg) newErrors[f.id] = msg;
    });
    setTouched((t) => ({ ...t, ...newTouched }));
    setErrors((e) => ({ ...e, ...newErrors }));
    return Object.keys(newErrors).length === 0;
  }

  function handleNext() {
    if (validate()) setStep((s) => s + 1);
  }

  function handleBack() {
    setStep((s) => s - 1);
  }

  async function handleSubmit() {
    if (!validate()) return;
    setIsSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitError(
          "Something went wrong. Please try again or text us directly.",
        );
      }
    } catch {
      setSubmitError(
        "Something went wrong. Please try again or text us directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div
        style={
          {
            ...CSS_VARS,
            maxWidth: 860,
            margin: "0 auto",
            padding: "3rem 1rem",
            textAlign: "center",
          } as React.CSSProperties
        }
      >
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: "var(--color-background-success)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1.5rem",
            border: "1px solid rgba(57,255,20,0.2)",
          }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--color-text-success)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h2
          style={{
            fontSize: 22,
            fontWeight: 600,
            margin: "0 0 0.75rem",
            color: "var(--color-text-primary)",
          }}
        >
          You&apos;re all set!
        </h2>
        <p
          style={{
            color: "var(--color-text-secondary)",
            fontSize: 15,
            lineHeight: 1.7,
            margin: "0 0 2rem",
          }}
        >
          We received your info for{" "}
          <strong style={{ color: "var(--color-text-primary)" }}>
            {data.business_name || "your business"}
          </strong>
          . We&apos;ll follow up within 1 business day to confirm receipt and
          schedule your kickoff call.
        </p>
        <div
          style={{
            background: "var(--color-background-secondary)",
            borderRadius: "var(--border-radius-lg)",
            padding: "1rem 1.25rem",
            textAlign: "left",
            border: "1px solid #252535",
          }}
        >
          <p
            style={{
              fontSize: 13,
              color: "var(--color-text-secondary)",
              margin: "0 0 0.5rem",
              fontWeight: 500,
            }}
          >
            What happens next
          </p>
          {[
            "We review your form and set up your accounts.",
            "Send over your logo, photos, and written content.",
            "You'll get a preview link within 3–5 business days.",
          ].map((s, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 10,
                alignItems: "flex-start",
                marginTop: 8,
              }}
            >
              <div
                style={{
                  minWidth: 22,
                  height: 22,
                  borderRadius: "50%",
                  background: "rgba(0,194,255,0.15)",
                  border: "1px solid rgba(0,194,255,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 11,
                  color: "#00C2FF",
                  fontWeight: 600,
                  marginTop: 1,
                }}
              >
                {i + 1}
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  color: "var(--color-text-primary)",
                  lineHeight: 1.6,
                }}
              >
                {s}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "8px 12px",
    borderRadius: "var(--border-radius-md)",
    border: "1px solid #252535",
    background: "var(--color-background-primary)",
    color: "var(--color-text-primary)",
    fontSize: 14,
    boxSizing: "border-box",
    fontFamily: "inherit",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <div
      style={
        {
          ...CSS_VARS,
          maxWidth: 860,
          margin: "0 auto",
          padding: "1.5rem 1rem 2rem",
        } as React.CSSProperties
      }
    >
      {/* Progress header */}
      <div style={{ marginBottom: "1.75rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 8,
          }}
        >
          <span
            style={{
              fontWeight: 600,
              fontSize: 13,
              color: "#00C2FF",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            LvL Up Local
          </span>
          <span style={{ fontSize: 12, color: "var(--color-text-secondary)" }}>
            Step {step + 1} of {total}
          </span>
        </div>
        <div
          style={{
            height: 3,
            background: "#1C1C28",
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${progress + 100 / total}%`,
              background: "linear-gradient(90deg, #00C2FF, #39FF14)",
              borderRadius: 4,
              transition: "width 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
        </div>
      </div>

      {/* Section heading */}
      <h2
        style={{
          fontSize: 20,
          fontWeight: 600,
          margin: "0 0 0.25rem",
          color: "var(--color-text-primary)",
        }}
      >
        {current.title}
      </h2>
      <p
        style={{
          fontSize: 14,
          color: "var(--color-text-secondary)",
          margin: "0 0 1.5rem",
          lineHeight: 1.6,
        }}
      >
        {current.subtitle}
      </p>

      {/* Notice banner */}
      {current.notice && (
        <div
          style={{
            background: "rgba(255, 193, 7, 0.08)",
            border: "1px solid rgba(255, 193, 7, 0.25)",
            borderRadius: "var(--border-radius-md)",
            padding: "10px 14px",
            fontSize: 13,
            color: "#e6b800",
            lineHeight: 1.5,
            marginBottom: "1.5rem",
          }}
        >
          {current.notice}
        </div>
      )}

      {/* Fields */}
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {current.fields.map((field) => {
          const hasError = !!errors[field.id];
          const isValid =
            touched[field.id] && !hasError && !!data[field.id]?.trim();
          const borderColor = hasError
            ? "#FF4D4D"
            : isValid
              ? "rgba(57,255,20,0.45)"
              : "#252535";
          const fieldInputStyle: React.CSSProperties = {
            ...inputStyle,
            border: `1px solid ${borderColor}`,
          };

          return (
            <div key={field.id}>
              <label
                htmlFor={
                  field.type === "radio" || field.type === "checkbox"
                    ? undefined
                    : field.id
                }
                style={{
                  display: "block",
                  fontSize: 14,
                  fontWeight: 500,
                  color: "var(--color-text-primary)",
                  marginBottom: 4,
                }}
              >
                {field.label}
                {field.required && (
                  <span
                    style={{ color: "#FF4D4D", marginLeft: 3 }}
                    aria-hidden="true"
                  >
                    *
                  </span>
                )}
              </label>

              {field.hint && (
                <p
                  style={{
                    fontSize: 12,
                    color: "var(--color-text-secondary)",
                    margin: "0 0 8px",
                    lineHeight: 1.5,
                  }}
                >
                  {field.hint}
                </p>
              )}

              {field.type === "radio" && (
                <div
                  role="radiogroup"
                  aria-required={field.required}
                  style={{ display: "flex", flexDirection: "column", gap: 6 }}
                >
                  {field.options?.map((option) => {
                    const checked = data[field.id] === option;
                    return (
                      <label
                        key={option}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          padding: "10px 12px",
                          border: `1px solid ${checked ? "rgba(0,194,255,0.5)" : "#252535"}`,
                          borderRadius: "var(--border-radius-md)",
                          cursor: "pointer",
                          fontSize: 14,
                          color: checked
                            ? "var(--color-text-primary)"
                            : "var(--color-text-secondary)",
                          background: checked
                            ? "rgba(0,194,255,0.06)"
                            : "var(--color-background-primary)",
                          transition: "border-color 0.15s, background 0.15s",
                          userSelect: "none",
                        }}
                      >
                        <input
                          type="radio"
                          name={field.id}
                          value={option}
                          checked={checked}
                          onChange={() => handleChange(field.id, option)}
                          style={{
                            accentColor: "#00C2FF",
                            width: 15,
                            height: 15,
                            flexShrink: 0,
                          }}
                        />
                        {option}
                      </label>
                    );
                  })}
                </div>
              )}

              {field.type === "checkbox" && (
                <div
                  role="group"
                  aria-required={field.required}
                  style={{ display: "flex", flexDirection: "column", gap: 6 }}
                >
                  {field.options?.map((option) => {
                    const selected = (data[field.id] || "")
                      .split(", ")
                      .filter(Boolean)
                      .includes(option);
                    return (
                      <label
                        key={option}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          padding: "10px 12px",
                          border: `1px solid ${selected ? "rgba(0,194,255,0.5)" : "#252535"}`,
                          borderRadius: "var(--border-radius-md)",
                          cursor: "pointer",
                          fontSize: 14,
                          color: selected
                            ? "var(--color-text-primary)"
                            : "var(--color-text-secondary)",
                          background: selected
                            ? "rgba(0,194,255,0.06)"
                            : "var(--color-background-primary)",
                          transition: "border-color 0.15s, background 0.15s",
                          userSelect: "none",
                        }}
                      >
                        <input
                          type="checkbox"
                          value={option}
                          checked={selected}
                          onChange={(e) =>
                            handleCheckboxChange(
                              field.id,
                              option,
                              e.target.checked,
                            )
                          }
                          style={{
                            accentColor: "#00C2FF",
                            width: 15,
                            height: 15,
                            flexShrink: 0,
                          }}
                        />
                        {option}
                      </label>
                    );
                  })}
                </div>
              )}

              {field.type === "textarea" && (
                <textarea
                  id={field.id}
                  value={data[field.id] || ""}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                  onBlur={() => handleBlur(field.id)}
                  placeholder={field.placeholder}
                  rows={4}
                  aria-required={field.required}
                  aria-invalid={hasError ? "true" : "false"}
                  aria-describedby={hasError ? `${field.id}-error` : undefined}
                  style={{
                    ...fieldInputStyle,
                    lineHeight: 1.6,
                    resize: "vertical",
                  }}
                />
              )}

              {field.type === "select" && (
                <select
                  id={field.id}
                  value={data[field.id] || ""}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                  onBlur={() => handleBlur(field.id)}
                  aria-required={field.required}
                  aria-invalid={hasError ? "true" : "false"}
                  aria-describedby={hasError ? `${field.id}-error` : undefined}
                  style={{
                    ...fieldInputStyle,
                    color: data[field.id]
                      ? "var(--color-text-primary)"
                      : "var(--color-text-tertiary)",
                  }}
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  {field.options?.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              )}

              {field.type === "number" && (
                <input
                  id={field.id}
                  type="number"
                  min={1}
                  value={data[field.id] || ""}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                  onBlur={() => handleBlur(field.id)}
                  placeholder={field.placeholder}
                  aria-required={field.required}
                  aria-invalid={hasError ? "true" : "false"}
                  aria-describedby={hasError ? `${field.id}-error` : undefined}
                  style={fieldInputStyle}
                />
              )}

              {field.type !== "textarea" &&
                field.type !== "select" &&
                field.type !== "radio" &&
                field.type !== "checkbox" &&
                field.type !== "number" && (
                  <input
                    id={field.id}
                    type={field.type}
                    value={data[field.id] || ""}
                    onChange={(e) => handleChange(field.id, e.target.value)}
                    onBlur={() => handleBlur(field.id)}
                    placeholder={field.placeholder}
                    aria-required={field.required}
                    aria-invalid={hasError ? "true" : "false"}
                    aria-describedby={
                      hasError ? `${field.id}-error` : undefined
                    }
                    style={fieldInputStyle}
                  />
                )}

              {hasError && (
                <p
                  id={`${field.id}-error`}
                  role="alert"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    fontSize: 12,
                    color: "#FF4D4D",
                    margin: "5px 0 0",
                  }}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  {errors[field.id]}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Submit error */}
      {submitError && (
        <p
          role="alert"
          style={{
            fontSize: 13,
            color: "#FF4D4D",
            margin: "1.25rem 0 0",
            padding: "10px 14px",
            background: "rgba(255,77,77,0.08)",
            borderRadius: 8,
            border: "1px solid rgba(255,77,77,0.2)",
          }}
        >
          {submitError}
        </p>
      )}

      {/* Navigation */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "2rem",
          gap: 12,
        }}
      >
        {step > 0 ? (
          <button
            onClick={handleBack}
            disabled={isSubmitting}
            style={{
              padding: "10px 20px",
              borderRadius: "var(--border-radius-md)",
              border: "1px solid var(--color-border-secondary)",
              background: "transparent",
              color: "var(--color-text-secondary)",
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            Back
          </button>
        ) : (
          <div />
        )}
        {step < total - 1 ? (
          <button
            onClick={handleNext}
            style={{
              padding: "10px 24px",
              borderRadius: "var(--border-radius-md)",
              border: "none",
              background: "#00C2FF",
              color: "#09090F",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Continue
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            style={{
              padding: "10px 24px",
              borderRadius: "var(--border-radius-md)",
              border: "none",
              background: isSubmitting ? "#1C1C28" : "#00C2FF",
              color: isSubmitting ? "#70708A" : "#09090F",
              fontSize: 14,
              fontWeight: 600,
              cursor: isSubmitting ? "not-allowed" : "pointer",
              transition: "background 0.2s, color 0.2s",
            }}
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        )}
      </div>
    </div>
  );
}
