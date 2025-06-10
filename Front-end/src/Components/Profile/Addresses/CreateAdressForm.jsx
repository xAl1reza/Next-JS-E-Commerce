'use client'

import { createAddress } from '@/Actions/profile'
import SubmitButton from '@/Components/SubmitBtn'
import { useActionState, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export default function CreateAddressForm({ data }) {
  const [open, setOpen] = useState(false)
  const [citiesFilter, setCitiesFilter] = useState(
    data.cities.filter((city) => city.province_id == data.provinces[0].id)
  )

  const [stateCreate, formActionCreate] = useActionState(createAddress, {})

  useEffect(() => {
    toast(stateCreate?.message, { type: `${stateCreate.status}` })
    if (stateCreate?.status === 'success') {
      setOpen(false)
    }
  }, [stateCreate])

  function changeProvince(e) {
    setCitiesFilter(
      data.cities.filter((city) => city.province_id == e.target.value)
    )
  }

  return (
    <>
      {/* Open Create Address Form Button */}
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-4 text-center justify-center font-VazirLight w-full sm:w-auto md:cursor-pointer px-8 py-3 text-base md:text-lg text-white bg-flame-orange hover:bg-[#ff7f26] hover:scale-95 transition-all rounded-xl disabled:bg-orange-300`}
      >
        آدرس جدید
      </button>

      {/* Create Address Form */}
      <div
        className={`border border-black/60 dark:border-white/60 rounded-lg overflow-hidden transition-all duration-300 ease-in-out ${
          open
            ? 'p-6 opacity-100 max-h-[1000px] mt-8'
            : 'p-0 opacity-0 max-h-0 mt-0 border-none'
        }`}
      >
        <form action={formActionCreate}>
          <div className="flex flex-col gap-6 font-VazirLight">
            <div className="flex items-center flex-wrap md:flex-nowrap gap-4">
              <div className="w-full">
                <label className="mb-3 inline-block">عنوان:</label>
                <input
                  name="title"
                  className="border border-black dark:border-white h-12 px-4 font-VazirLight outline-hidden rounded-md w-full"
                />
              </div>
              <div className="w-full">
                <label className="mb-3 inline-block">شماره تماس:</label>
                <input
                  name="cellphone"
                  className="border border-black dark:border-white h-12 px-4 font-VazirLight outline-hidden rounded-md w-full"
                />
              </div>
            </div>

            <div className="flex items-center flex-wrap md:flex-nowrap gap-4">
              <div className="w-full">
                <label className="mb-3 inline-block">کد پستی:</label>
                <input
                  name="postal_code"
                  className="border border-black dark:border-white h-12 px-4 font-VazirLight outline-hidden rounded-md w-full"
                />
              </div>
              <div className="w-full">
                <label className="mb-3 inline-block">استان:</label>
                <select
                  name="province_id"
                  onChange={changeProvince}
                  className="border border-black dark:border-white h-12 px-4 font-VazirLight outline-hidden rounded-md w-full"
                >
                  {data.provinces.map((province) => (
                    <option
                      value={province.id}
                      key={province.id}
                      className="text-black"
                    >
                      {province.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col">
              <label className="mb-3 inline-block">شهر:</label>
              <select
                name="city_id"
                onChange={changeProvince}
                className="border border-black dark:border-white h-12 px-4 font-VazirLight outline-hidden rounded-md w-full"
              >
                {citiesFilter.map((city) => (
                  <option value={city.id} key={city.id} className="text-black">
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-3 inline-block">آدرس:</label>
              <textarea
                name="address"
                rows={4}
                cols={30}
                className="border border-black dark:border-white p-4 font-VazirLight outline-hidden rounded-md w-full"
              />
            </div>
            <div>
              <SubmitButton title={'ایجاد'} width={'w-auto'} />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
