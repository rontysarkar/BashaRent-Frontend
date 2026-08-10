import { Mail, Phone, Home, ShieldCheck } from "lucide-react"
import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="relative mt-4 overflow-hidden border-t border-slate-200 bg-slate-50">
      <div
        className="absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 pt-14 pb-8 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                <Home size={16} className="text-white" />
              </div>
              <span className="text-lg font-bold text-slate-900">
                Basha<span className="text-blue-600">Rent</span>
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              BashaRent is a modern rental property marketplace connecting
              tenants and landlords with ease.
            </p>
            <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
              <ShieldCheck size={12} />
              Verified & Secure
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-slate-900">Help</h4>
            <ul className="space-y-2.5 text-sm text-slate-500">
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-blue-600"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-slate-900">Legal</h4>
            <ul className="space-y-2.5 text-sm text-slate-500">
              <li>
                <Link
                  href="/terms-conditions"
                  className="transition-colors hover:text-blue-600"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="transition-colors hover:text-blue-600"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-slate-900">
              Contact Us
            </h4>
            <div className="flex flex-col gap-3">
              <Link
                href="mailto:rontysarkar@gmail.com"
                className="flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-blue-600"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white">
                  <Mail size={14} className="text-blue-600" />
                </span>
                rontysarkar@gmail.com
              </Link>

              <Link
                href="https://wa.me/8801402796307"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-blue-600"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white">
                  <FaWhatsapp size={16} className="text-green-600" />
                </span>
                +880 1402-796307
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© 2026 BashaRent. All rights reserved.</p>
          <div className="flex items-center gap-1.5">
            <ShieldCheck size={13} className="text-emerald-600" />
            <span>Trusted rental marketplace</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
