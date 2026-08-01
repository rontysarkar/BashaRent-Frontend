import Profile from "@/components/shared/profile"
import { getMe } from "@/services/auth.service"

export default async function ProfilePage() {
  const res = await getMe()
  return (
    <div>
      <Profile user={res?.data} />
    </div>
  )
}
