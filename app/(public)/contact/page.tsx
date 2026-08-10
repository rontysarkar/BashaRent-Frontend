import { Mail, Phone, MapPin } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ContactPage() {
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

      {/* Floating orbs - matches hero */}
      <div className="pointer-events-none absolute top-16 left-[10%] h-64 w-64 animate-[float_10s_ease-in-out_infinite] rounded-full bg-blue-100/30 blur-3xl" />
      <div className="pointer-events-none absolute right-[8%] bottom-16 h-56 w-56 animate-[float_8s_ease-in-out_infinite_1s] rounded-full bg-green-100/30 blur-3xl" />

      <div className="relative mx-auto flex max-w-5xl flex-col gap-12">
        {/* Header */}
        <header className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <p className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-white/80 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-blue-700 shadow-sm backdrop-blur-sm">
            Get In Touch
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Contact Us
          </h1>
          <p className="leading-6 text-slate-500">
            Have a question or need help? We&apos;d love to hear from you.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <Link href="mailto:rontysarkar@gmail.com">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                    <Mail size={18} className="text-blue-600" />
                  </span>
                  <div>
                    <p className="text-xs text-slate-400">Email</p>
                    <p className="text-sm font-medium text-slate-700">
                      rontysarkar07@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                  <Phone size={18} className="text-blue-600" />
                </span>
                <div>
                  <p className="text-xs text-slate-400">Phone</p>
                  <p className="text-sm font-medium text-slate-700">
                    +880 1402-796307
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="https://wa.me/8801402796307"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50">
                    <FaWhatsapp size={18} className="text-green-600" />
                  </span>
                  <div>
                    <p className="text-xs text-slate-400">WhatsApp</p>
                    <p className="text-sm font-medium text-slate-700">
                      Chat with us
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                  <MapPin size={18} className="text-blue-600" />
                </span>
                <div>
                  <p className="text-xs text-slate-400">Location</p>
                  <p className="text-sm font-medium text-slate-700">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:col-span-3">
            <h2 className="mb-6 text-lg font-semibold text-slate-800">
              Send us a message
            </h2>
            <div className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="How can we help?" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Write your message here..."
                />
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 sm:w-fit">
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
