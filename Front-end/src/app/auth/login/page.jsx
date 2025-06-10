'use client'

import LoginForm from '@/Components/auth/LoginForm'
import OtpForm from '@/Components/auth/OtpForm'
import { useState } from 'react'

export default function Login() {
  const [step, setStep] = useState(1)

  return (
    <div className="container font-VazirLight">
      {step == 1 && <LoginForm setStep={setStep} />}

      {step == 2 && <OtpForm />}
    </div>
  )
}
