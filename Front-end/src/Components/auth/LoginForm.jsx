'use client'
import { useActionState, useEffect } from 'react'
import SubmitButton from '@/Components/SubmitBtn'
import { login } from '@/Actions/auth'
import { toast } from 'react-toastify'

export default function LoginForm({setStep}) {
  const [stateLogin, formActionLogin] = useActionState(login, {})

  useEffect(() => {
    toast(stateLogin?.message, { type: `${stateLogin.status}` })
    if(stateLogin?.status === "success"){
      setStep(2)
    }
  }, [stateLogin])
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <form
          action={formActionLogin}
          className="max-w-sm mx-auto w-[400px] shadow-custome shadow-zinc-800/70 dark:shadow-white py-10 px-4 md:px-6 rounded-md -mt-[100px] border border-gray-500"
        >
          <div className="mb-4">
            <label className="block text mb-3 dark:text-white text-zinc-800 font-VazirMedium">
              شماره موبایل:
            </label>
            <input
              placeholder="09010000000"
              name="cellphone"
              type="text"
              className="border border-gray-500 rounded outline-hidden px-3 py-2 w-full dark:placeholder:text-gray-200 dark:text-gray-200"
            />
          </div>
          <div className="flex items-center justify-center mt-4">
            <SubmitButton width="w-full" title="ورود" />
          </div>
        </form>
      </div>
    </>
  )
}
