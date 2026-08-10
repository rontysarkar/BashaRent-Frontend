import {
  Building2,
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  CreditCard,
  Home,
  Search,
  Wallet,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const tenantSteps = [
  {
    icon: Search,
    title: "Browse Properties",
    description:
      "Explore verified listings filtered by location, price, and amenities",
  },
  {
    icon: ClipboardList,
    title: "Submit Request",
    description: "Send a rental request to the landlord with one click",
  },
  {
    icon: CreditCard,
    title: "Pay & Move In",
    description:
      "Once approved, complete secure payment via Stripe and move in",
  },
]

const landlordSteps = [
  {
    icon: Home,
    title: "List Your Property",
    description:
      "Create a listing with photos, price, and amenities in minutes",
  },
  {
    icon: ClipboardCheck,
    title: "Review Requests",
    description: "Approve or reject incoming rental requests from tenants",
  },
  {
    icon: Wallet,
    title: "Get Paid",
    description: "Receive secure payments directly through the platform",
  },
]

type Step = (typeof tenantSteps)[number]

function StepCard({
  step,
  index,
  tone,
}: {
  step: Step
  index: number
  tone: "tenant" | "landlord"
}) {
  const Icon = step.icon
  const isTenant = tone === "tenant"

  return (
    <div className="group relative">
      <Card className="h-full rounded-2xl border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-300 hover:shadow-xl">
        <CardHeader className="gap-5 p-6 pb-3">
          <div className="flex items-center justify-between">
            <div
              className={`flex size-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${
                isTenant
                  ? "bg-blue-50 text-blue-600"
                  : "bg-green-50 text-green-600"
              }`}
              aria-hidden="true"
            >
              <Icon className="size-6" strokeWidth={1.8} />
            </div>
            <span
              className={`flex size-7 items-center justify-center rounded-full text-sm font-bold shadow-sm transition-transform duration-300 group-hover:scale-110 ${
                isTenant ? "bg-blue-600 text-white" : "bg-green-600 text-white"
              }`}
              aria-label={`Step ${index + 1}`}
            >
              {index + 1}
            </span>
          </div>
          <CardTitle className="text-lg font-semibold text-slate-800">
            {step.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 pt-0">
          <p className="text-sm leading-6 text-slate-500">{step.description}</p>
        </CardContent>

        {/* Bottom accent line - grows on hover */}
        <div
          className={`absolute bottom-0 left-0 h-1 w-0 rounded-b-2xl transition-all duration-300 group-hover:w-full ${
            isTenant ? "bg-blue-600" : "bg-green-600"
          }`}
        />
      </Card>
      {index < 2 && (
        <div
          className="absolute top-1/2 left-[calc(100%+0.5rem)] hidden w-4 border-t border-dashed border-slate-300 lg:block"
          aria-hidden="true"
        />
      )}
    </div>
  )
}

function StepGroup({
  title,
  steps,
  tone,
}: {
  title: string
  steps: Step[]
  tone: "tenant" | "landlord"
}) {
  const isTenant = tone === "tenant"

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <div
          className={`flex size-10 items-center justify-center rounded-lg shadow-sm ${
            isTenant ? "bg-blue-50 text-blue-600" : "bg-green-50 text-green-600"
          }`}
          aria-hidden="true"
        >
          {isTenant ? (
            <Search className="size-5" />
          ) : (
            <Building2 className="size-5" />
          )}
        </div>
        <h3 className="text-xl font-bold text-slate-800">For {title}</h3>
        <CheckCircle2
          className={`ml-auto size-5 ${isTenant ? "text-blue-600" : "text-green-600"}`}
          aria-hidden="true"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-3 lg:gap-5">
        {steps.map((step, index) => (
          <StepCard key={step.title} step={step} index={index} tone={tone} />
        ))}
      </div>
    </div>
  )
}

export function HowItWorks() {
  return (
    <section
      className="relative overflow-hidden bg-slate-50 px-4 py-16 sm:px-6 lg:py-20"
      aria-labelledby="how-it-works-title"
    >

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


      <div className="pointer-events-none absolute top-10 right-[10%] h-64 w-64 animate-[float_9s_ease-in-out_infinite] rounded-full bg-blue-100/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-[8%] h-56 w-56 animate-[float_11s_ease-in-out_infinite_1s] rounded-full bg-green-100/30 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12">
        <header className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <p className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-white/80 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-blue-700 shadow-sm backdrop-blur-sm">
            Simple Process
          </p>
          <h2
            id="how-it-works-title"
            className="text-3xl font-bold tracking-tight text-balance text-slate-900 sm:text-4xl"
          >
            How BashaRent Works
          </h2>
          <p className="leading-6 text-pretty text-slate-500">
            A simple, secure way for tenants to find a home and landlords to
            find the right renter.
          </p>
        </header>

        <div className="flex flex-col gap-12">
          <StepGroup title="Tenants" steps={tenantSteps} tone="tenant" />
          <StepGroup title="Landlords" steps={landlordSteps} tone="landlord" />
        </div>
      </div>
    </section>
  )
}

export default HowItWorks