import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Login — Account Access",
  description:
    "Log in to your SourceNeed account. During the launch phase, account access is handled directly by the team while self-serve login is being built.",
  alternates: { canonical: "/login" },
};

export default function LoginPage() {
  return (
    <div className="shell flex justify-center py-20">
      <div className="w-full max-w-md border-2 border-ink bg-paper p-8">
        <p className="label-mono">Login</p>
        <h1 className="mt-2 font-display text-2xl font-black tracking-tight">
          Self-serve login is on its way.
        </h1>
        <p className="mt-3 text-sm leading-6 text-ink-soft">
          During the launch phase, registered buyers and sellers work directly
          with our team by email and phone — quotes, listings, and account
          changes all go through a person who knows your file. Online account
          access ships next.
        </p>
        <div className="mt-6 space-y-3">
          <a href={`mailto:${site.email}?subject=${encodeURIComponent("Account access")}`} className="btn-primary w-full">
            Email your account contact
          </a>
          <Link href="/register" className="btn-secondary w-full">
            Don&apos;t have an account? Register
          </Link>
        </div>
        <p className="mt-5 border-t border-line pt-4 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-ink-soft">
          Prefer the phone?{" "}
          <a href={`tel:${site.phone}`} className="text-cobalt hover:text-cobalt-deep">
            {site.phoneDisplay}
          </a>
        </p>
      </div>
    </div>
  );
}
