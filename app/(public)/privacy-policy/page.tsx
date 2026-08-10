export default function PrivacyPolicyPage() {
  return (
    <section className="relative overflow-hidden bg-slate-50 px-4 py-16 sm:px-6 lg:py-20">
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse 70% 50% at 50% 0%, black 30%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto flex max-w-4xl flex-col gap-10">
        <header className="flex flex-col items-center gap-4 text-center">
          <p className="inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-white/80 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-green-700 shadow-sm backdrop-blur-sm">
            Legal
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-500">Last updated: August 2026</p>
        </header>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <div className="flex flex-col gap-8 text-sm leading-relaxed text-slate-600 sm:text-base">
            <div>
              <h2 className="mb-2 text-lg font-semibold text-slate-800">
                1. Information We Collect
              </h2>
              <p>
                We collect information you provide directly, such as your name,
                email address, phone number, and role (tenant or landlord)
                during registration, as well as property details submitted by
                landlords.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-semibold text-slate-800">
                2. How We Use Your Information
              </h2>
              <p>
                Your information is used to facilitate rental listings, process
                rental requests, enable payments through Stripe, and improve our
                platform&apos;s functionality and user experience.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-semibold text-slate-800">
                3. Payment Information
              </h2>
              <p>
                All payment transactions are processed securely by Stripe.
                BashaRent does not store your card details on our servers.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-semibold text-slate-800">
                4. Data Sharing
              </h2>
              <p>
                We share relevant contact information between tenants and
                landlords only after a rental request is approved, to facilitate
                communication. We do not sell your personal data to third
                parties.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-semibold text-slate-800">
                5. Data Security
              </h2>
              <p>
                We use industry-standard security measures, including encrypted
                passwords and secure authentication (JWT), to protect your
                account and personal information.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-semibold text-slate-800">
                6. Your Rights
              </h2>
              <p>
                You may access, update, or request deletion of your personal
                information at any time through your profile settings or by
                contacting our support team.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-semibold text-slate-800">
                7. Cookies
              </h2>
              <p>
                We use cookies to maintain your login session and improve
                platform functionality. You may disable cookies in your browser
                settings, though this may affect certain features.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-semibold text-slate-800">
                8. Contact
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please
                reach out via our{" "}
                <a href="/contact" className="text-blue-600 hover:underline">
                  Contact page
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
