import { CreditCard, MessageCircle, ShieldCheck, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const benefits = [
  {
    icon: ShieldCheck,
    title: "Verified Listings",
    description:
      "Every property is reviewed before it goes live, so you always know what you're browsing is real.",
    tone: "blue",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description:
      "Rent payments are processed securely through Stripe, protecting both tenants and landlords.",
    tone: "green",
  },
  {
    icon: MessageCircle,
    title: "Direct Communication",
    description:
      "Connect directly with landlords or tenants — no unnecessary middlemen or hidden fees.",
    tone: "blue",
  },
  {
    icon: Star,
    title: "Transparent Reviews",
    description:
      "Real reviews from real tenants help you make informed decisions before renting.",
    tone: "green",
  },
] as const

export function WhyChooseBashaRent() {
  return (
    <section
      className="relative overflow-hidden bg-slate-50 px-4 py-16 sm:px-6 lg:py-20"
      aria-labelledby="why-choose-basharent-title"
    >
      {/* Grid pattern background - matches hero & how-it-works */}
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

      {/* Soft floating orbs - matches hero & how-it-works */}
      <div className="pointer-events-none absolute top-16 left-[10%] h-64 w-64 animate-[float_10s_ease-in-out_infinite] rounded-full bg-blue-100/30 blur-3xl" />
      <div className="pointer-events-none absolute right-[8%] bottom-16 h-56 w-56 animate-[float_8s_ease-in-out_infinite_1s] rounded-full bg-green-100/30 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12">
        <header className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <p className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-white/80 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-blue-700 shadow-sm backdrop-blur-sm">
            Why BashaRent
          </p>
          <h2
            id="why-choose-basharent-title"
            className="text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Why Choose BashaRent
          </h2>
          <p className="text-pretty leading-6 text-slate-500">
            Trust, ease, and security are at the core of everything we do.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            const isGreen = benefit.tone === "green"

            return (
              <Card
                key={benefit.title}
                className="group relative h-full rounded-2xl border-slate-200 bg-white p-0 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-300 hover:shadow-xl"
              >
                <CardHeader className="gap-5 p-6 pb-3">
                  <div
                    className={`flex size-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${
                      isGreen
                        ? "bg-green-50 text-green-600"
                        : "bg-blue-50 text-blue-600"
                    }`}
                    aria-hidden="true"
                  >
                    <Icon className="size-6" strokeWidth={1.8} />
                  </div>
                  <CardTitle className="text-lg font-semibold text-slate-800">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-sm leading-relaxed text-slate-500">
                    {benefit.description}
                  </p>
                </CardContent>

                {/* Bottom accent line - grows on hover */}
                <div
                  className={`absolute bottom-0 left-0 h-1 w-0 rounded-b-2xl transition-all duration-300 group-hover:w-full ${
                    isGreen ? "bg-green-600" : "bg-blue-600"
                  }`}
                />
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseBashaRent