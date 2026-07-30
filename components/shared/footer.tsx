import Link from 'next/link'


export default function Footer() {
  return (
    <footer className="border-t  pb-10 mt-4">
      <div className="max-w-7xl mx-auto px-4 py-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm ">
        <div>
          <h4 className="font-bold mb-2">RentNest</h4>
          <p className="text-slate-600">RentNest is a modern  rental property marketplace।</p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Help</h4>
          <ul className="space-y-1 text-slate-700">
            {/* <li><Link href="#" className="hover:text-slate-900">Help Center</Link></li> */}
            <li><Link href="/contact" className="hover:text-slate-900">Contact</Link></li>
            {/* <li><Link href="#" className="hover:text-slate-900">Report/Dispute</Link></li> */}
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Legal</h4>
          <ul className="space-y-1 text-slate-700">
            <li><Link href="/terms-conditions" className="hover:text-slate-900">Terms & Conditions</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-slate-900">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 ">Contact Us</h4>
          <div className='flex space-x-4'>
            {/* <Link href='#' className=''>
              <fac className='w-6 h-6 p-0.5 bg-black rounded-full text-white ' />
            </Link>
            <Link href='#' className=''>
              <Youtube className='w-6 h-6 p-1 bg-black rounded-full text-white ' />
            </Link>
            <Link href='#' className=''>
              <X className='w-6 h-6 p-0.5 bg-black rounded-full text-white ' />
            </Link>
            <Link href='#' className=''>
              <Instagram className='w-6 h-6 p-1 bg-black rounded-full text-white ' />
            </Link> */}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-4 text-slate-500 text-sm border-t ">
        © 2026 RENT NEST. All rights reserved.
      </div>
    </footer>
  )
}
