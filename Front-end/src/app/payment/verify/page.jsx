'use client'

import { paymentVerify } from '@/Actions/cart'
import SubmitButton from '@/Components/SubmitBtn'
import { clearCart } from '@/redux/slices/cartSlice'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

export default function PaymentVerify() {
  const dispatch = useDispatch()
  const searchParams = useSearchParams()
  const status = searchParams.get('status')
  const trackId = searchParams.get('trackId')

  const [payment, setPayment] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const verify = async () => {
      const data = await paymentVerify(trackId, status)
      setPayment(data.payment)
      setLoading(false)
    }

    verify()
  }, [])
  console.log(payment)

  useEffect(() => {
    if (payment.status) {
      dispatch(clearCart())
    }
  }, [payment])

  return (
    <>
      <div className="container mt-[72px] pt-12 h-screen font-VazirLight">
        {loading ? (
          <div className="flex items-center justify-center">
            <span className="loader border-black dark:border-white border-b-transparent size-8"></span>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 p-6 rounded-lg justify-center bg-gray-300 dark:bg-stone-800 w-full md:w-[70%] mx-auto">
            {payment.status ? (
              <i className="bi bi-check-circle-fill text-green-600 text-center text-4xl"></i>
            ) : (
              <i className="bi bi-x-circle-fill text-red-600 text-center text-4xl"></i>
            )}
            {payment.status ? (
              <p className="text-center text-2xl">پرداخت با موفقیت انجام شد</p>
            ) : (
              <p className="text-center text-2xl">{payment.error}</p>
            )}

            <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
              {payment.status ? (
                <Link href={'/profile/orders'}>
                  <SubmitButton
                    size={'px-6 py-2'}
                    title={'مشاهده سفارش'}
                    width={'w-auto'}
                  />
                </Link>
              ) : (
                <Link href={'/cart'}>
                  <SubmitButton
                    size={'px-6 py-2'}
                    title={'سبد خرید'}
                    width={'w-auto'}
                  />
                </Link>
              )}
              <Link href={'/'}>
                <SubmitButton
                  size={'px-6 py-2'}
                  colors={
                    'bg-zinc-950 dark:disabled:bg-gray-400 dark:bg-gray-200 dark:hover:bg-gray-300 dark:text-black hover:bg-zinc-900 disabled:bg-zinc-600 text-white'
                  }
                  title={'بازگشت به سایت'}
                  width={'w-auto'}
                />
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
