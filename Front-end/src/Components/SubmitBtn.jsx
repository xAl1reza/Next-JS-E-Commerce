'use client'

import { useFormStatus } from 'react-dom'

export default function SubmitButton({ title, width, colors, borderColor , size }) {
  const { pending } = useFormStatus()

  return (
    <button
      className={`flex items-center gap-4 text-center justify-center font-VazirLight w-full sm:${width} md:cursor-pointer text-base md:text-lg ${
        colors
          ? `${colors}`
          : 'bg-flame-orange hover:bg-[#ff7f26] disabled:bg-orange-300 text-white'
      }
       hover:scale-95 transition-all rounded-xl ${size ? `${size}` : "px-8 py-3"}`}
      type="submit"
      disabled={pending}
    >
      {title}
      {pending && (
        <span
          className={`loader ${
            borderColor ? `${borderColor}` : 'border-white'
          } border-b-transparent size-5`}
        ></span>
      )}
    </button>
  )
}
