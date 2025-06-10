'use client'

import { editAddress } from '@/Actions/profile'
import SubmitButton from '@/Components/SubmitBtn'
import { useActionState, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import DeleteAddress from './DeleteAddress'

export default function EditAddress({ data }) {
  const [citiesFilter, setCitiesFilter] = useState(data.cities)

  const [stateEdit, formActionEdit] = useActionState(editAddress, {})

  useEffect(() => {
    toast(stateEdit?.message, { type: `${stateEdit.status}` })
  }, [stateEdit])

  function changeProvince(e) {
    setCitiesFilter(
      data.cities.filter((city) => city.province_id == e.target.value)
    )
  }

  return (
    <>
      {/* Edit Forms */}

      <div
        key={data.address.id}
        className="relative border border-black/60 dark:border-white/60 rounded-lg mt-8 p-6 transition-all opacity-100"
      >
        <form action={formActionEdit}>
          <div className="flex flex-col gap-6 font-VazirLight">
            <div className="flex items-center flex-wrap md:flex-nowrap gap-4">
              <div className="w-full">
                <label className="mb-3 inline-block">عنوان:</label>
                <input
                  defaultValue={data.address.title}
                  name="title"
                  className="border border-black dark:border-white h-12 px-4 font-VazirLight outline-hidden rounded-md w-full"
                />
              </div>
              <div className="w-full">
                <label className="mb-3 inline-block">شماره تماس:</label>
                <input
                  defaultValue={data.address.cellphone}
                  name="cellphone"
                  className="border border-black dark:border-white h-12 px-4 font-VazirLight outline-hidden rounded-md w-full"
                />
              </div>
            </div>

            <div className="flex items-center flex-wrap md:flex-nowrap gap-4">
              <div className="w-full">
                <label className="mb-3 inline-block">کد پستی:</label>
                <input
                  defaultValue={data.address.postal_code}
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
                defaultValue={data.address.address}
                rows={4}
                cols={30}
                className="border border-black dark:border-white p-4 font-VazirLight outline-hidden rounded-md w-full"
              />
            </div>
            <input name="address_id" type="hidden" value={data.address.id} />
            <div className="flex flex-wrap gap-y-4 items-center justify-between">
              <SubmitButton title={'ویرایش'} width={'w-auto'} />
            </div>
          </div>
        </form>
        <div className="mt-6 sm:mt-0 sm:absolute bottom-[24px] left-[24px] right-[24px] sm:bottom-[24px] sm:left-[24px] sm:right-auto sm:top-auto">
          <DeleteAddress address_id={data.address.id}/>
        </div>
      </div>
    </>
  )
}
