'use client'
import { useActionState, useEffect, useState } from 'react'
import { resendOtp } from '@/Actions/auth'
import { toast } from 'react-toastify'

export default function ResendOtpBtn() {
  const [stateResendOtp, formActionResendOtp] = useActionState(resendOtp, {})
  const [timeLeft, setTimeLeft] = useState(120)

  // تایمر
  useEffect(() => {
    if (timeLeft <= 0) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft])

  // پیام موفقیت toast
  useEffect(() => {
    if (stateResendOtp?.message) {
      toast(stateResendOtp.message, { type: `${stateResendOtp.status}` })
      setTimeLeft(120)
    }
  }, [stateResendOtp])

  // تبدیل به دقیقه:ثانیه برای نمایش
  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  return (
    <>
      {timeLeft > 0 ? (
        <div className="mb-1 my-3 text-center">
          {minutes.toString().padStart(2, '0')}:
          {seconds.toString().padStart(2, '0')}
        </div>
      ) : (
        <form action={formActionResendOtp}>
          <p className="text-center mt-4">
            کد تایید را دریافت نکردید؟
            <button
              type="submit"
              className="text-flame-orange underline mr-1 md:cursor-pointer"
            >
              ارسال دوباره
            </button>
          </p>
        </form>
      )}
    </>
  )
}
