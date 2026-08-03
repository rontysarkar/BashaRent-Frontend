"use client"

import { useState, useTransition } from "react"
import { Eye, EyeOff, Lock, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { loginSchema, TLoginInput } from "@/validations/auth.validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginAction } from "@/actions/auth/login.action"
import { useAuth } from "@/context/auth-context"
import { useRouter } from "next/navigation"

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, startTransition] = useTransition()
  const router = useRouter()
  const { setUser } = useAuth()

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<TLoginInput>({ resolver: zodResolver(loginSchema) })

  const onSubmit = (data: TLoginInput) => {
    startTransition(async () => {
      const res = await loginAction(data)

      if (res.success) {
        setUser(res?.data)

        const dashboardUrl =
          res?.data?.role === "ADMIN"
            ? "/admin-dashboard"
            : res?.data?.role === "LANDLORD"
              ? "/landlord-dashboard"
              : "/tenant-dashboard"

        router.push(dashboardUrl)
      } else {
        setError("password", {
          message: "Email or Password incorrect",
        })
      }
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="flex items-center gap-2 text-sm font-semibold text-slate-700"
        >
          <Mail size={16} className="text-blue-600" />
          Email Address
        </label>

        <div className="relative">
          <Input
            id="email"
            type="email"
            placeholder="example@gmail.com"
            {...register("email")}
            className={`rounded-lg border-slate-200 transition-all placeholder:text-slate-400 focus:border-transparent focus:ring-2 focus:ring-blue-500 ${
              errors.email ? "border-red-500 focus:ring-red-500" : ""
            }`}
          />
        </div>

        {errors.email && (
          <p className="text-xs font-medium text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="flex items-center gap-2 text-sm font-semibold text-slate-700"
          >
            <Lock size={16} className="text-blue-600" />
            Password
          </label>
        </div>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            {...register("password")}
            className={`rounded-lg border-slate-200 pr-10 transition-all placeholder:text-slate-400 focus:border-transparent focus:ring-2 focus:ring-blue-500 ${
              errors.password ? "border-red-500 focus:ring-red-500" : ""
            }`}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-1/2 right-3 -translate-y-1/2 text-slate-400 transition-all hover:scale-110 hover:text-slate-600"
            tabIndex={-1}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        {errors.password && (
          <p className="text-xs font-medium text-red-500">
            {errors.password.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="h-auto w-full rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 py-2.5 font-semibold text-white shadow-md transition-all duration-300 hover:from-blue-700 hover:to-blue-800 hover:shadow-lg disabled:from-slate-400 disabled:to-slate-500 disabled:shadow-none"
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-r-transparent" />
            Logging in...
          </span>
        ) : (
          "Login"
        )}
      </Button>
    </form>
  )
}
