
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your message has been received. Muhammad Huzaifa will get back to you shortly.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#272730] px-4">
      <div className="text-center max-w-md w-full bg-[#272730] rounded-xl p-12 shadow-[0_8px_24px_rgba(255,255,255,0.08)]">
        <div className="mx-auto mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-[#62a92b]/10 border border-[#62a92b]/30">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-[#62a92b]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-bold font-sans text-[#62a92b] mb-4">
          🎉 Thank You!
        </h1>

        <p className="text-white font-sans text-base mb-2">
          Your message has been successfully sent.
        </p>
        <p className="text-[#8f8f92] font-sans text-sm mb-8">
          I&apos;ll review it and get back to you as soon as possible — usually within 24 hours.
        </p>

        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-lg bg-[#62a92b] text-[#272730] font-semibold font-sans text-sm transition-all duration-300 hover:bg-[#8ed63e] hover:-translate-y-0.5 hover:shadow-lg"
        >
          ← Back to Portfolio
        </Link>
      </div>
    </main>
  );
}
