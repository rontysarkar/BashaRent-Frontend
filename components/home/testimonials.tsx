import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Rafiq Ahmed",
    role: "Tenant",
    location: "Gulshan, Dhaka",
    rating: 5,
    review:
      "Found my apartment within a week. The whole process from browsing to payment was smooth and transparent — no hidden surprises.",
    tone: "blue",
  },
  {
    name: "Nusrat Jahan",
    role: "Landlord",
    location: "Mirpur, Dhaka",
    rating: 5,
    review:
      "Managing rental requests used to be a headache over phone calls. Now I approve or reject everything from one dashboard.",
    tone: "green",
  },
  {
    name: "Tanvir Islam",
    role: "Tenant",
    location: "Bashundhara, Dhaka",
    rating: 4,
    review:
      "Loved how easy it was to filter properties by price and location. Secure payment through Stripe gave me peace of mind too.",
    tone: "blue",
  },
  {
    name: "Farhana Akter",
    role: "Landlord",
    location: "Uttara, Dhaka",
    rating: 5,
    review:
      "Listing my property took less than 10 minutes. I get notified instantly whenever a tenant sends a request.",
    tone: "green",
  },
] as const

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={
            i < rating
              ? "fill-amber-400 text-amber-400"
              : "fill-slate-200 text-slate-200"
          }
        />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section
      className="relative overflow-hidden bg-slate-50 px-4 py-16 sm:px-6 lg:py-20"
      aria-labelledby="testimonials-title"
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

  
      <div className="pointer-events-none absolute top-14 right-[10%] h-64 w-64 animate-[float_9s_ease-in-out_infinite] rounded-full bg-blue-100/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-14 left-[8%] h-56 w-56 animate-[float_11s_ease-in-out_infinite_1s] rounded-full bg-green-100/30 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12">

        <header className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <p className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-white/80 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-blue-700 shadow-sm backdrop-blur-sm">
            Testimonials
          </p>
          <h2
            id="testimonials-title"
            className="text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            What Our Users Say
          </h2>
          <p className="text-pretty leading-6 text-slate-500">
            Real experiences from tenants and landlords using BashaRent
            every day.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => {
            const isGreen = testimonial.tone === "green"

            return (
              <div
                key={testimonial.name}
                className="group relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-300 hover:shadow-xl"
              >
                <div
                  className={`flex size-10 items-center justify-center rounded-xl ${
                    isGreen
                      ? "bg-green-50 text-green-600"
                      : "bg-blue-50 text-blue-600"
                  }`}
                >
                  <Quote size={18} strokeWidth={2} />
                </div>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                  {testimonial.review}
                </p>

                <div className="mt-5 border-t border-slate-100 pt-4">
                  <StarRating rating={testimonial.rating} />
                  <div className="mt-3 flex items-center gap-3">
                    <div
                      className={`flex size-9 items-center justify-center rounded-full text-sm font-semibold ${
                        isGreen
                          ? "bg-green-50 text-green-700"
                          : "bg-blue-50 text-blue-700"
                      }`}
                    >
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-slate-400">
                        {testimonial.role} · {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className={`absolute bottom-0 left-0 h-1 w-0 rounded-b-2xl transition-all duration-300 group-hover:w-full ${
                    isGreen ? "bg-green-600" : "bg-blue-600"
                  }`}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Testimonials