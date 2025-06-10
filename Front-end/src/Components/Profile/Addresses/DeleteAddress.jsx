'use client'

import { deleteAddress } from '@/Actions/profile'
import SubmitButton from '@/Components/SubmitBtn'
import { useActionState, useEffect } from 'react'
import { toast } from 'react-toastify'

export default function DeleteAddress({ address_id }) {
  const [stateDelete, formActionDelete] = useActionState(deleteAddress, {})

  useEffect(() => {
    toast(stateDelete?.message, { type: `${stateDelete.status}` })
  }, [stateDelete])

  return (
    <>
      <form action={formActionDelete}>
        <input name="address_id" type="hidden" value={address_id} />
        <SubmitButton
          title={'حذف'}
          width={'w-auto'}
          colors={
            'text-white bg-zinc-900 dark:bg-gray-200 dark:text-black hover:bg-zinc-700 disabled:bg-zinc-500'
          }
          borderColor={"border-zinc-800"}
        />
      </form>
    </>
  )
}
