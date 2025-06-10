'use client'

import { editInfo } from '@/Actions/profile'
import SubmitButton from '@/Components/SubmitBtn'
import { useActionState, useEffect } from 'react'
import { toast } from 'react-toastify'

export default function EditForm({ user }) {
  const [state, formAction] = useActionState(editInfo, {})

  useEffect(() => {
    toast(state?.message, { type: `${state.status}` })
  }, [state])

  return (
    <>
      <form action={formAction}>
        <div className="flex flex-col gap-6 font-VazirLight">
          <div className="flex items-center flex-wrap md:flex-nowrap gap-4">
            <div className="w-full">
              <label className="mb-3 inline-block">نام و نام خانوادگی:</label>
              <input
                name="name"
                defaultValue={user.name}
                className="border border-black dark:border-white h-12 px-4 font-VazirLight outline-hidden rounded-md w-full"
              />
            </div>
            <div className="w-full">
              <label className="mb-3 inline-block">ایمیل:</label>
              <input
                name="email"
                defaultValue={user.email}
                className="border border-black dark:border-white h-12 px-4 font-VazirLight outline-hidden rounded-md w-full"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="mb-3 inline-block">شماره موبایل:</label>
            <input
              disabled={true}
              defaultValue={user.cellphone}
              className="border border-black dark:border-white h-12 px-4 font-VazirLight outline-hidden rounded-md w-full md:w-[50%] disabled:bg-gray-300 dark:bg-stone-700 opacity-60"
            />
          </div>
          <div>
            <SubmitButton title={'ویرایش'} width={'w-auto'} />
          </div>
        </div>
      </form>
    </>
  )
}
