'use client'
import { useActionState, useContext, useEffect } from 'react'
import SubmitButton from '@/Components/SubmitBtn'
import { checkOtp } from '@/Actions/auth'
import { toast } from 'react-toastify'
import AuthContext from '@/Context/Auth-Context/AuthContext'
import ResendOtpBtn from '@/app/auth/ResendOtpBtn'
import { useRouter } from 'next/navigation'

export default function OtpForm() {
  const router = useRouter()
  const [stateOtp, formActionOtp] = useActionState(checkOtp, {})
  const { loginContext } = useContext(AuthContext)
  useEffect(() => {
    toast(stateOtp?.message, { type: `${stateOtp.status}` })
    if (stateOtp?.status === 'success') {
      loginContext(stateOtp?.user)
      router.push("/")
    }
  }, [stateOtp])

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="max-w-sm mx-auto w-[400px] shadow-custome shadow-zinc-800/70 dark:shadow-white py-10 px-4 md:px-6 rounded-md -mt-[100px] border border-gray-500">
          <form action={formActionOtp}>
            <div className="mb-4">
              <label className="block text mb-3 dark:text-white text-zinc-800 font-VazirMedium">
                کد تایید:
              </label>
              <input
                name="otp"
                type="text"
                className="border border-gray-500 rounded outline-hidden px-3 py-2 w-full dark:placeholder:text-gray-200 dark:text-gray-200"
              />
            </div>
            <div className="flex items-center justify-center mt-4">
              <SubmitButton width="w-full" title="ورود" />
            </div>
          </form>
          <ResendOtpBtn />
        </div>
      </div>
    </>
  )
}
