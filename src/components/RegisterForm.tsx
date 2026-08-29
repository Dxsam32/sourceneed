"use client";

import { useState } from "react";
import { site } from "@/lib/site";

/** Launch-phase onboarding: composes a structured application email in the
 *  visitor's mail client. Swap for real auth when accounts go self-serve. */
export default function RegisterForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("Buyer");
  const [note, setNote] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = [
      `Account type: ${role}`,
      name && `Name: ${name}`,
      company && `Company: ${company}`,
      note && `\nWhat we buy/sell:\n${note}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Account request — ${company || name || "sourceneed.com"}`
    )}&body=${encodeURIComponent(body)}`;
  }

  const inputCls =
    "mt-1.5 w-full border border-line bg-paper px-3 py-2.5 text-sm focus:border-cobalt focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="border border-ink bg-paper p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="rf-name" className="label-mono block">
            Your name
          </label>
          <input
            id="rf-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            required
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="rf-company" className="label-mono block">
            Company
          </label>
          <input
            id="rf-company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            autoComplete="organization"
            required
            className={inputCls}
          />
        </div>
      </div>
      <fieldset className="mt-4">
        <legend className="label-mono">Account type</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {["Buyer", "Seller", "Buyer + Seller"].map((r) => (
            <label
              key={r}
              className={`cursor-pointer border px-4 py-2 text-xs font-semibold ${
                role === r
                  ? "border-cobalt bg-cobalt text-paper"
                  : "border-line text-ink-soft hover:border-ink"
              }`}
            >
              <input
                type="radio"
                name="role"
                value={r}
                checked={role === r}
                onChange={() => setRole(r)}
                className="sr-only"
              />
              {r}
            </label>
          ))}
        </div>
      </fieldset>
      <div className="mt-4">
        <label htmlFor="rf-note" className="label-mono block">
          What do you buy or sell?
        </label>
        <textarea
          id="rf-note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={4}
          placeholder="Materials, typical quantities, and your province — helps us set your account up right."
          className={inputCls}
        />
      </div>
      <button type="submit" className="btn-primary mt-5">
        Request an account
      </button>
      <p className="mt-3 text-xs leading-5 text-ink-soft">
        This opens a pre-filled email in your own mail client addressed to{" "}
        {site.email}. During our launch phase, accounts are set up personally
        within one business day.
      </p>
    </form>
  );
}
