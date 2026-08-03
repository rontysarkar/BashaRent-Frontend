
import { UserRole } from "@/types/user.types"
import jwt from "jsonwebtoken"

type TJwtPayload = {
  id: string
  name: string
  email: string
  role: UserRole
}

const verifyToken = (token: string, secret: string) => {
  try {
    return jwt.verify(token, secret)
  } catch {
    return null;
  }
}

export const jwtUtils = {
  verifyToken,
}
