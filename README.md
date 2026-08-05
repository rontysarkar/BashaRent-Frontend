# 🏠 BashaRent - Frontend

Welcome to the client-side repository for **BashaRent**. BashaRent is a modern, responsive real-estate and rental property marketplace web application built to connect Landlords and Tenants seamlessly, supported by a full Admin oversight system.

---

## 🚀 Live Links

* **Frontend Live Application:** [https://rent-nest-frontend-nine.vercel.app/](https://rent-nest-frontend-nine.vercel.app/)
* **Backend Live API:** [https://rent-nest-mocha.vercel.app/](https://rent-nest-mocha.vercel.app/)
* **Backend GitHub Repository:** [RentNest Backend](https://github.com/rontysarkar/RentNest)

---

## 🛠️ Tech Stack & Libraries

* **Framework:** Next.js (App Router, TypeScript)
* **Styling:** Tailwind CSS, Shadcn UI, Lucide Icons, React Icons
* **Form Handling & Validation:** React Hook Form, Zod
* **State Management & Data Fetching:** TanStack Query (React Query) / Axios
* **Authentication:** Next.js Server Actions & Custom JWT Cookie Management
* **Payment Integration:** Stripe Checkout
* **Deployment:** Vercel

---

## ✨ Key Features

* 🔐 **Role-Based Authorization:** Custom interfaces and access controls tailored for Tenants, Landlords, and Admins.
* 🏠 **Property Management:** Advanced property browsing, filtering, search, dynamic property detail views, and full CRUD operations for landlords.
* 📄 **Rental Request Flow:** Instant booking/rental submission for tenants with real-time approval/rejection capabilities for landlords.
* 💳 **Stripe Payment Integration:** Secure online payment processing for rental fees upon request approval.
* ⭐ **Reviews & Ratings:** Tenant reviews and rating management for property listings.
* 📊 **Admin Dashboard:** Platform oversight including user management (Ban/Unban options), request tracking, and category management.

---

## 🔑 Demo Credentials

| Role | Email | Password |
| :--- | :--- | :--- |
| **Admin** | `admin@gmail.com` | `123456` |
| **Landlord** | `landlord@gmail.com` | `123456` |
| **Tenant** | *Register a new account or use landlord credentials* | — |

---

## 🛠️ Environment Variables Setup

Create a `.env.local` file in the root directory and add the following configuration:

```env
# Backend API Base URL
NEXT_PUBLIC_BACKEND_API_URL=[https://rent-nest-mocha.vercel.app/api](https://rent-nest-mocha.vercel.app/api)

# Stripe Public Key (Client-side Integration)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key