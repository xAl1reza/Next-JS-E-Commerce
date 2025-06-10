import EditForm from '@/Components/Profile/Info/EditForm'

import { getFetch } from '@/utils/fetch'
import { cookies } from 'next/headers'

export default async function ProfilePage() {
  const cookiesStore = await cookies()
  const token = cookiesStore.get('token')
  const user = await getFetch('/profile/info', {
    Authorization: `Bearer ${token.value}`,
  })

  return (
    <>
      <EditForm user={user}/>
    </>
  )
}
