'use client';

import { FormEvent, useMemo, useState } from 'react';
import Link from 'next/link';

type RegistrationType = 'event' | 'activity';

type RegistrationWizardProps = {
  type: RegistrationType;
  title: string;
  category: string;
  date: string;
  time: string;
  venue?: string;
  location: string;
  summary: string;
  requiresPayment?: boolean;
  registrationFee?: string;
};

type FormData = {
  fullName: string;
  preferredName: string;
  email: string;
  phone: string;
  alternativePhone: string;
  country: string;
  participantCategory: string;
  organisation: string;
  role: string;
  ageRange: string;
  attendanceType: string;
  accessibility: string;
  areasOfInterest: string;
  experience: string;
  expectations: string;
  guestCount: string;
  dietaryRequirements: string;
  transportRequirements: string;
  accommodation: string;
  paymentReference: string;
  termsAccepted: boolean;
  privacyAccepted: boolean;
  mediaConsent: boolean;
};

const initialForm: FormData = {
  fullName: '',
  preferredName: '',
  email: '',
  phone: '',
  alternativePhone: '',
  country: '',
  participantCategory: '',
  organisation: '',
  role: '',
  ageRange: '',
  attendanceType: 'Physical',
  accessibility: '',
  areasOfInterest: '',
  experience: '',
  expectations: '',
  guestCount: '0',
  dietaryRequirements: '',
  transportRequirements: '',
  accommodation: '',
  paymentReference: '',
  termsAccepted: false,
  privacyAccepted: false,
  mediaConsent: false,
};

export default function RegistrationWizard({
  type,
  title,
  category,
  date,
  time,
  venue,
  location,
  summary,
  requiresPayment = false,
  registrationFee,
}: RegistrationWizardProps) {
  const [form, setForm] = useState<FormData>(initialForm);
  const [step, setStep] = useState(0);
  const [reference, setReference] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const actionLabel = type === 'event' ? 'Register for Event' : 'Participate in Activity';
  const noun = type === 'event' ? 'event' : 'activity';

  const steps = useMemo(() => {
    const base = [
      'Summary',
      'Personal',
      'Profile',
      type === 'event' ? 'Attendance' : 'Participation',
      'Questions',
      'Logistics',
    ];

    if (requiresPayment) {
      base.push('Payment');
    }

    base.push('Consent', 'Review');

    return base;
  }, [type, requiresPayment]);

  const update = (field: keyof FormData, value: string | boolean) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const validateStep = () => {
    if (step === 1) {
      return (
        form.fullName.trim() !== '' &&
        form.email.trim() !== '' &&
        form.phone.trim() !== ''
      );
    }

    if (step === 7 && requiresPayment) {
      return form.paymentReference.trim() !== '';
    }

    if (step === steps.length - 2) {
      return form.termsAccepted && form.privacyAccepted;
    }

    return true;
  };

  const next = () => {
    if (!validateStep()) {
      return;
    }

    setStep((current) => Math.min(current + 1, steps.length - 1));
  };

  const previous = () => {
    setStep((current) => Math.max(current - 1, 0));
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateStep()) {
      return;
    }

    const prefix = type === 'event' ? 'NH-EVT' : 'NH-ACT';
    const generatedReference = `${prefix}-${new Date().getFullYear()}-${String(
      Date.now(),
    ).slice(-6)}`;

    setReference(generatedReference);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="min-h-[70vh] bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center sm:p-12">
            <span className="inline-flex rounded-full bg-[#5FC9E6]/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#1266B6]">
              {type === 'event'
                ? 'Registration Submitted'
                : 'Participation Submitted'}
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Your {noun} request has been received.
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              This frontend demo confirms the full multi-step workflow. The
              production backend will create the official record and send the
              actual confirmation through configured notification channels.
            </p>

            <div className="mx-auto mt-10 max-w-xl rounded-2xl bg-white p-6 text-left">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#1266B6]">
                Reference
              </p>

              <p className="mt-2 text-2xl font-bold text-[#050A30]">
                {reference}
              </p>

              <div className="mt-6 space-y-4 border-t border-slate-200 pt-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.12em] text-slate-400">
                    {type === 'event' ? 'Event' : 'Activity'}
                  </p>
                  <p className="mt-1 font-semibold">{title}</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.12em] text-slate-400">
                    Date
                  </p>
                  <p className="mt-1 font-semibold">{date}</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.12em] text-slate-400">
                    Time
                  </p>
                  <p className="mt-1 font-semibold">{time}</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.12em] text-slate-400">
                    Status
                  </p>
                  <p className="mt-1 font-semibold">Pending backend confirmation</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/events-activities"
                className="rounded-md bg-[#1266B6] px-6 py-3 text-sm font-semibold text-white"
              >
                Events & Activities
              </Link>

              <Link
                href={type === 'event' ? '/events-activities/events' : '/events-activities/activities'}
                className="rounded-md border border-slate-300 px-6 py-3 text-sm font-semibold text-[#050A30]"
              >
                Back to {type === 'event' ? 'Events' : 'Activities'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const renderStep = () => {
    if (step === 0) {
      return (
        <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1266B6]">
              {type === 'event' ? 'Event Registration' : 'Activity Participation'}
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight">
              {title}
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              {summary}
            </p>
          </div>

          <aside className="rounded-2xl bg-[#050A30] p-6 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#5FC9E6]">
              Details
            </p>

            <div className="mt-5 space-y-4 text-sm">
              <p>
                <span className="text-white/45">Category</span>
                <br />
                <strong>{category}</strong>
              </p>

              <p>
                <span className="text-white/45">Date</span>
                <br />
                <strong>{date}</strong>
              </p>

              <p>
                <span className="text-white/45">Time</span>
                <br />
                <strong>{time}</strong>
              </p>

              {venue && (
                <p>
                  <span className="text-white/45">Venue</span>
                  <br />
                  <strong>{venue}</strong>
                </p>
              )}

              <p>
                <span className="text-white/45">Location</span>
                <br />
                <strong>{location}</strong>
              </p>

              {requiresPayment && (
                <p>
                  <span className="text-white/45">Registration Fee</span>
                  <br />
                  <strong>{registrationFee}</strong>
                </p>
              )}
            </div>
          </aside>
        </div>
      );
    }

    if (step === 1) {
      return (
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            Personal Information
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Field
              label="Full Name"
              value={form.fullName}
              onChange={(value) => update('fullName', value)}
              required
            />

            <Field
              label="Preferred Name"
              value={form.preferredName}
              onChange={(value) => update('preferredName', value)}
            />

            <Field
              label="Email Address"
              type="email"
              value={form.email}
              onChange={(value) => update('email', value)}
              required
            />

            <Field
              label="Phone Number"
              value={form.phone}
              onChange={(value) => update('phone', value)}
              required
            />

            <Field
              label="Alternative Phone"
              value={form.alternativePhone}
              onChange={(value) => update('alternativePhone', value)}
            />

            <Field
              label="Country / Location"
              value={form.country}
              onChange={(value) => update('country', value)}
            />
          </div>
        </div>
      );
    }

    if (step === 2) {
      return (
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            Profile Information
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <SelectField
              label="Participant Category"
              value={form.participantCategory}
              onChange={(value) => update('participantCategory', value)}
              options={[
                'Student',
                'Professional',
                'Entrepreneur',
                'Community Member',
                'Organisation Representative',
                'Other',
              ]}
            />

            <SelectField
              label="Age Range"
              value={form.ageRange}
              onChange={(value) => update('ageRange', value)}
              options={[
                'Under 18',
                '18–24',
                '25–34',
                '35–44',
                '45–54',
                '55+',
                'Prefer not to say',
              ]}
            />

            <Field
              label="Organisation / Institution"
              value={form.organisation}
              onChange={(value) => update('organisation', value)}
            />

            <Field
              label="Role / Position"
              value={form.role}
              onChange={(value) => update('role', value)}
            />
          </div>
        </div>
      );
    }

    if (step === 3) {
      return (
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            {type === 'event' ? 'Attendance Details' : 'Participation Details'}
          </h2>

          <div className="mt-8 grid gap-6">
            <SelectField
              label={type === 'event' ? 'Attendance Type' : 'Participation Type'}
              value={form.attendanceType}
              onChange={(value) => update('attendanceType', value)}
              options={[
                'Physical',
                'Online',
                'Hybrid',
              ]}
            />

            <TextAreaField
              label="Accessibility Requirements"
              value={form.accessibility}
              onChange={(value) => update('accessibility', value)}
              placeholder="Tell us about any accessibility arrangements you may require."
            />
          </div>
        </div>
      );
    }

    if (step === 4) {
      return (
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            {type === 'event' ? 'Event-Specific Questions' : 'Activity Questions'}
          </h2>

          <div className="mt-8 grid gap-6">
            <TextAreaField
              label="Areas of Interest"
              value={form.areasOfInterest}
              onChange={(value) => update('areasOfInterest', value)}
              placeholder="What areas would you most like to engage with?"
            />

            <TextAreaField
              label="Relevant Experience"
              value={form.experience}
              onChange={(value) => update('experience', value)}
              placeholder="Tell us briefly about your relevant experience."
            />

            <TextAreaField
              label="Expectations"
              value={form.expectations}
              onChange={(value) => update('expectations', value)}
              placeholder="What do you hope to gain from this event or activity?"
            />
          </div>
        </div>
      );
    }

    if (step === 5) {
      return (
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            Logistics
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Field
              label="Number of Guests"
              type="number"
              value={form.guestCount}
              onChange={(value) => update('guestCount', value)}
            />

            <SelectField
              label="Accommodation Required?"
              value={form.accommodation}
              onChange={(value) => update('accommodation', value)}
              options={['No', 'Yes']}
            />

            <TextAreaField
              label="Dietary Requirements"
              value={form.dietaryRequirements}
              onChange={(value) => update('dietaryRequirements', value)}
            />

            <TextAreaField
              label="Transport Requirements"
              value={form.transportRequirements}
              onChange={(value) => update('transportRequirements', value)}
            />
          </div>
        </div>
      );
    }

    let currentStep = 6;

    if (requiresPayment) {
      if (step === currentStep) {
        return (
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Payment
            </h2>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm text-slate-500">
                Registration Fee
              </p>

              <p className="mt-2 text-3xl font-bold">
                {registrationFee}
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                In the production system, this step can connect to the
                configured payment gateway and automatically verify the
                transaction.
              </p>

              <div className="mt-6">
                <Field
                  label="Payment Reference"
                  value={form.paymentReference}
                  onChange={(value) => update('paymentReference', value)}
                  required
                />
              </div>
            </div>
          </div>
        );
      }

      currentStep += 1;
    }

    if (step === currentStep) {
      return (
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            Consent & Declarations
          </h2>

          <div className="mt-8 space-y-5">
            <CheckboxField
              label="I agree to the applicable terms and conditions."
              checked={form.termsAccepted}
              onChange={(value) => update('termsAccepted', value)}
            />

            <CheckboxField
              label="I acknowledge the privacy notice and consent to the processing of my submitted information."
              checked={form.privacyAccepted}
              onChange={(value) => update('privacyAccepted', value)}
            />

            <CheckboxField
              label="I consent to event or activity photography/media use where applicable."
              checked={form.mediaConsent}
              onChange={(value) => update('mediaConsent', value)}
            />
          </div>
        </div>
      );
    }

    return (
      <div>
        <h2 className="text-3xl font-bold tracking-tight">
          Review Your Information
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <ReviewItem label="Full Name" value={form.fullName} />
          <ReviewItem label="Email" value={form.email} />
          <ReviewItem label="Phone" value={form.phone} />
          <ReviewItem label="Category" value={form.participantCategory} />
          <ReviewItem label="Organisation" value={form.organisation} />
          <ReviewItem label="Role" value={form.role} />
          <ReviewItem label="Attendance / Participation" value={form.attendanceType} />
          <ReviewItem label="Guests" value={form.guestCount} />
          {requiresPayment && (
            <ReviewItem label="Payment Reference" value={form.paymentReference} />
          )}
        </div>
      </div>
    );
  };

  return (
    <form onSubmit={submit} className="min-h-[70vh] bg-white">
      <div className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <Link
            href={type === 'event' ? '/events-activities/events' : '/events-activities/activities'}
            className="text-sm font-semibold text-[#5FC9E6]"
          >
            ← Back
          </Link>

          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            {actionLabel}
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
            {title}
          </h1>

          <p className="mt-5 text-white/65">
            Complete the registration in a few guided steps.
          </p>
        </div>
      </div>

      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl overflow-x-auto px-6 lg:px-8">
          <div className="flex min-w-max">
            {steps.map((item, index) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  if (index <= step) {
                    setStep(index);
                  }
                }}
                className={`border-b-2 px-4 py-4 text-sm font-semibold transition ${
                  index === step
                    ? 'border-[#1266B6] text-[#1266B6]'
                    : index < step
                      ? 'border-transparent text-[#050A30]'
                      : 'border-transparent text-slate-400'
                }`}
              >
                <span className="mr-2">{index + 1}.</span>
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
          {renderStep()}

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-8">
            <button
              type="button"
              onClick={previous}
              disabled={step === 0}
              className="rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-[#050A30] transition hover:border-[#1266B6] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Back
            </button>

            {step < steps.length - 1 ? (
              <button
                type="button"
                onClick={next}
                className="rounded-md bg-[#1266B6] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Continue →
              </button>
            ) : (
              <button
                type="submit"
                className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
              >
                Submit {type === 'event' ? 'Registration' : 'Participation'}
              </button>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  type = 'text',
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-[#050A30]">
        {label}
        {required && <span className="ml-1 text-[#1266B6]">*</span>}
      </span>

      <input
        type={type}
        value={value}
        required={required}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-[#050A30] outline-none transition focus:border-[#1266B6] focus:ring-2 focus:ring-[#5FC9E6]/30"
      />
    </label>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-[#050A30]">
        {label}
      </span>

      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-[#050A30] outline-none focus:border-[#1266B6]"
      >
        <option value="">Select an option</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextAreaField({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-[#050A30]">
        {label}
      </span>

      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        rows={4}
        className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-[#050A30] outline-none transition focus:border-[#1266B6] focus:ring-2 focus:ring-[#5FC9E6]/30"
      />
    </label>
  );
}

function CheckboxField({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <label className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="mt-1 h-4 w-4"
      />

      <span className="text-sm leading-6 text-slate-600">
        {label}
      </span>
    </label>
  );
}

function ReviewItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
        {label}
      </p>

      <p className="mt-2 text-sm font-semibold text-[#050A30]">
        {value || 'Not provided'}
      </p>
    </div>
  );
}
