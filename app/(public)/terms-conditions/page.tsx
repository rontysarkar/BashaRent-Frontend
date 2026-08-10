export default function TermsConditionsPage() {
  return (
    <section className="relative overflow-hidden bg-slate-50 px-4 py-16 sm:px-6 lg:py-20">
      {/* Grid pattern background - matches site */}
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
        {/* Header */}
        <header className="flex flex-col items-center gap-4 text-center">
          <p className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-white/80 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-blue-700 shadow-sm backdrop-blur-sm">
            Legal
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Terms & Conditions
          </h1>
          <p className="text-sm text-slate-500">Last updated: August 2026</p>
        </header>

        {/* Content Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <div className="flex flex-col gap-8 text-sm leading-relaxed text-slate-600 sm:text-base">
            <div>
              <h2 className="mb-2 text-lg font-semibold text-slate-800">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using BashaRent, you agree to be bound by
                these Terms & Conditions. If you do not agree with any part
                of these terms, please do not use our platform.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-semibold text-slate-800">
                2. User Accounts
              </h2>
              <p>
                Users must register as either a Tenant or a Landlord.
                You are responsible for maintaining the confidentiality of
                your account credentials and for all activities that occur
                under your account.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-semibold text-slate-800">
                3. Property Listings
              </h2>
              <p>
                Landlords are solely responsible for the accuracy of the
                property information they list, including price, location,
                availability, and amenities. BashaRent reserves the right
                to remove any listing that violates our content policies.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-semibold text-slate-800">
                4. Rental Requests & Payments
              </h2>
              <p>
                Tenants may submit rental requests to landlords through the
                platform. All payments are processed securely through
                Stripe. BashaRent is not responsible for disputes arising
                between tenants and landlords regarding rental agreements.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-semibold text-slate-800">
                5. Prohibited Activities
              </h2>
              <p>
                Users may not post false information, engage in fraudulent
                transactions, or use the platform for any unlawful purpose.
                Accounts found violating these rules may be suspended or
                banned.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-semibold text-slate-800">
                6. Limitation of Liability
              </h2>
              <p>
                BashaRent acts as an intermediary platform connecting
                tenants and landlords. We do not guarantee the condition,
                legality, or availability of any listed property.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-semibold text-slate-800">
                7. Changes to Terms
              </h2>
              <p>
                We may update these Terms & Conditions from time to time.
                Continued use of the platform after changes constitutes
                acceptance of the updated terms.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-semibold text-slate-800">
                8. Contact
              </h2>
              <p>
                For questions regarding these terms, please reach out via
                our{" "}
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