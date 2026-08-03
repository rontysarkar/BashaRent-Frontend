import { Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="mt-4 border-t pb-10">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 text-sm sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h4 className="mb-2 font-bold">RentNest</h4>
          <p className="text-slate-600">
            RentNest is a modern rental property marketplace।
          </p>
        </div>
        <div>
          <h4 className="mb-2 font-bold">Help</h4>
          <ul className="space-y-1 text-slate-700">
            {/* <li><Link href="#" className="hover:text-slate-900">Help Center</Link></li> */}
            <li>
              <Link href="/contact" className="hover:text-slate-900">
                Contact
              </Link>
            </li>
            {/* <li><Link href="#" className="hover:text-slate-900">Report/Dispute</Link></li> */}
          </ul>
        </div>
        <div>
          <h4 className="mb-2 font-bold">Legal</h4>
          <ul className="space-y-1 text-slate-700">
            <li>
              <Link href="/terms-conditions" className="hover:text-slate-900">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-slate-900">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-bold">Contact Us</h4>
          <div className="flex flex-col space-x-4">
            <a
              href="mailto:support@example.com"
              className="flex items-center gap-2 pb-2 text-sm font-medium text-slate-700 transition-colors hover:text-black"
            >
              <span>support@example.com</span>
            </a>

            <a
              href="tel:+8801700000000"
              className="flex items-center gap-2 text-sm font-medium text-slate-700 transition-colors hover:text-black"
            >
              <span>+880 1700-000000</span>
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl border-t px-4 py-4 text-sm text-slate-500">
        © 2026 RENT NEST. All rights reserved.
      </div>
    </footer>
  )
}
