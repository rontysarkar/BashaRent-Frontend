# 🏠 BashaRent — Frontend

The client-side repository for **BashaRent** — a modern, responsive real-estate and rental property marketplace built to connect **Landlords** and **Tenants** seamlessly, backed by a full **Admin** oversight system.

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-App%20Router-black?logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-Strict-blue?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-Styling-38bdf8?logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel" alt="Vercel" />
</p>

---

## 🚀 Live Links

| Resource | Link |
|---|---|
| 🌐 **Frontend Live Application** | [rent-nest-frontend-nine.vercel.app](https://rent-nest-frontend-nine.vercel.app/) |
| 🔗 **Backend Live API** | [rent-nest-mocha.vercel.app](https://rent-nest-mocha.vercel.app/) |
| 💻 **Backend GitHub Repository** | [BashaRent — Backend](https://github.com/your-username/BashaRent-Backend) |

> ⚠️ Replace the backend GitHub link above with your actual repository URL.

---

## 🛠️ Tech Stack & Libraries

- **Framework:** Next.js (App Router, TypeScript)
- **Styling:** Tailwind CSS, Shadcn UI, Lucide Icons, React Icons
- **Form Handling & Validation:** React Hook Form, Zod
- **State Management & Data Fetching:** TanStack Query (React Query), Axios
- **Authentication:** Next.js Server Actions & Custom JWT Cookie Management
- **Payment Integration:** Stripe Checkout
- **Deployment:** Vercel

---

## ✨ Key Features

- 🔐 **Role-Based Authorization** — Custom interfaces and access controls tailored for Tenants, Landlords, and Admins.
- 🏠 **Property Management** — Advanced browsing, filtering, search, dynamic property detail views, and full CRUD operations for landlords.
- 📄 **Rental Request Flow** — Instant booking/rental submission for tenants with real-time approval/rejection for landlords.
- 💳 **Stripe Payment Integration** — Secure online payment processing for rental fees upon request approval.
- ⭐ **Reviews & Ratings** — Tenant reviews and rating management for property listings.
- 📊 **Admin Dashboard** — Platform oversight including user management (ban/unban), request tracking, and category management.

---

## 🔑 Demo Credentials

| Role | Email | Password |
|---|---|---|
| **Admin** | admin@gmail.com | 123456 |
| **Landlord** | landlord@gmail.com | 123456 |
| **Tenant** | Register a new account | — |

---

## ⚙️ Environment Variables Setup

Create a `.env.local` file in the root directory and add the following:

\`\`\`env
# Backend API Base URL
NEXT_PUBLIC_BACKEND_API_URL=https://rent-nest-mocha.vercel.app/api

# Stripe Public Key (Client-side Integration)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
\`\`\`

---
