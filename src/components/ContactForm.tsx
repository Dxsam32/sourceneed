"use client";

import { useState } from "react";
import { site } from "@/lib/site";

/** Composes a pre-filled email in the visitor's own mail client. No message
 *  content touches our servers — see the Privacy Policy. */
export default function ContactForm({ defaultSubject }: { defaultSubject?: string }) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState(defaultSubject ?? "");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = [message, "", "—", name && `Name: ${name}`, company && `Company: ${company}`]
      .filter(Boolean)
      .join("\n");
    const url = `mailto:${site.email}?subject=${encodeURIComponent(
      subject || "Inquiry via sourceneed.com"
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  }

  const inputCls =
    "mt-1.5 w-full border border-line bg-paper px-3 py-2.5 text-sm focus:border-cobalt focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="border border-ink bg-paper p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="label-mono block">
            Your name
          </label>
          <input
            id="cf-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="cf-company" className="label-mono block">
            Company
          </label>
          <input
            id="cf-company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            autoComplete="organization"
            className={inputCls}
          />
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="cf-subject" className="label-mono block">
          Subject
        </label>
        <input
          id="cf-subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="e.g. Quote request, listing inquiry, material search"
          className={inputCls}
        />
      </div>
      <div className="mt-4">
        <label htmlFor="cf-message" className="label-mono block">
          Message
        </label>
        <textarea
          id="cf-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          required
          placeholder="Material, CAS number, quantity, timeline — whatever you have."
          className={inputCls}
        />
      </div>
      <button type="submit" className="btn-primary mt-5">
        Open email to send
      </button>
      <p className="mt-3 text-xs leading-5 text-ink-soft">
        This opens a pre-filled email in your own mail client addressed to{" "}
        {site.email} — nothing is submitted through this website.
      </p>
    </form>
  );
}
