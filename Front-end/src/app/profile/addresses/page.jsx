import CreateAddressForm from '@/Components/Profile/Addresses/CreateAdressForm'
import EditAddressForm from '@/Components/Profile/Addresses/EditAddressForm'

import { getFetch } from '@/utils/fetch'
import { cookies } from 'next/headers'

export default async function Addresses() {
  const cookiesStore = await cookies()
  const token = cookiesStore.get('token')
  const { addresses, provinces, cities } = await getFetch(
    '/profile/addresses',
    {
      Authorization: `Bearer ${token.value}`,
    }
  )

  console.log(provinces)
  return (
    <>
      {/* Create Address Form */}
      <CreateAddressForm data={{ provinces, addresses, cities }} />

      {/* Edit Forms */}
      {addresses.map((address) => (
        <EditAddressForm key={address.id} data={{ provinces, address, cities }} />
      ))}
    </>
  )
}
