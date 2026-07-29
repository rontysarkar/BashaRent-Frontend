"use client"
import { loginAction } from "@/actions/auth/login.action"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { loginInputType, loginSchema } from "@/validations/auth.validation"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { useTransition } from "react"
import { useForm } from "react-hook-form"

type resultType = {
  success: boolean
  message: string
}

export function LoginForm() {
  const [isPending, startTransition] = useTransition()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<loginInputType>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: loginInputType) => {
    startTransition(async () => {
      const result: resultType = await loginAction(data)

      if (!result.success) {
        setError("password", {
          message: result.message,
        })
        return
      }
    })
  }
  return (
    <Card className="w-full max-w-sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardAction>
            <Link href={"/signup"}>
              <Button variant="link">Sign Up</Button>
            </Link>
          </CardAction>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input type="email" {...register("email")} />
              <p>{errors.email?.message}</p>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input type="password" {...register("password")} />
              <p className="text-red-600">{errors.password?.message}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="mt-4 flex-col gap-2">
          <Button disabled={isPending} type="submit" className="w-full">
            {isPending ? "Loading..." : "Login"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
