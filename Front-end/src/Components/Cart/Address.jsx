'use client'

import { useEffect, useState } from 'react'
import SubmitButton from '../SubmitBtn'
import { getAddresses } from '@/Actions/cart'
import Link from 'next/link'

export default function Address({ setAddressId }) {
  const [loading, setLoading] = useState(true)
  const [addresses, setAddresses] = useState([])

  useEffect(() => {
    const fetchAddresses = async () => {
      const data = await getAddresses()
      setAddresses(data)

      setLoading(false)
    }
    fetchAddresses()
  }, [])

  console.log(addresses)

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <span className="loader border-black dark:border-white border-b-transparent size-8"></span>
      </div>
    )
  }

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center">
        {addresses && addresses.length === 0 ? (
          <div className="mt-2">
            <Link href={'/profile/addresses'}>
              <SubmitButton
                width={'w-auto'}
                title={'ایجاد آدرس'}
                size={'px-6 py-3 lg:px-5 lg:py-2'}
                colors={
                  'text-white bg-zinc-950 dark:bg-gray-200  disabled:bg-zinc-700 dark:disabled:bg-gray-400 hover:bg-zinc-900 dark:hover:bg-gray-300 dark:text-black '
                }
              />
            </Link>
          </div>
        ) : (
          <div className='flex flex-col sm:flex-row items-center gap-2'>
            <p>انتخاب آدرس</p>
            <select
              defaultValue={''}
              onChange={(e) => setAddressId(e.target.value)}
              placeholder="انتخاب آدرس"
              className="h-11 font-VazirLight w-full sm:w-auto rounded-md outline-hidden border border-black dark:border-white px-6 sm:ml-2"
            >
              <option disabled={true} value={''} className="text-black">
                انتخاب آدرس
              </option>
              {addresses.map((address) => (
                <option
                  key={address.id}
                  value={address.id}
                  className="text-black"
                >
                  {address.title}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    </>
  )
}
