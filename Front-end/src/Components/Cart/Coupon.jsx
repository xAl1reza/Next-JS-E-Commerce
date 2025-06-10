'use client'

import { useActionState, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { checkCoupon } from '@/Actions/cart'
import SubmitButton from '../SubmitBtn'

export default function Coupon({ setCoupon }) {
  const [state, formAction] = useActionState(checkCoupon, {})

  useEffect(() => {
    toast(state?.message, { type: `${state.status}` })
    if (state?.status == 'success') {
      setCoupon({
        code: state.code,
        percent: state.percentage,
      })
    }
  }, [state])

  return (
    <>
      <div>
        <form
          className="flex flex-col sm:flex-row items-center"
          action={formAction}
        >
          <input
            name="code"
            placeholder="کد تخفیف"
            className="h-10 w-full sm:w-auto  rounded-md outline-hidden border border-black dark:border-white px-4 sm:ml-2 dark:placeholder:text-white/80"
          />

          <div className="mt-2">
            <SubmitButton
              width={'w-full'}
              title={'اعمال کد تخفیف'}
              size={'px-6 py-3 lg:px-5 lg:py-2'}
              colors={
                'text-white bg-zinc-950 dark:bg-gray-200  disabled:bg-zinc-700 dark:disabled:bg-gray-400 hover:bg-zinc-900 dark:hover:bg-gray-300 dark:text-black '
              }
            />
          </div>
        </form>
      </div>
    </>
  )
}
