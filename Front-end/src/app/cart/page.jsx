'use client'

import Address from '@/Components/Cart/Address'
import Coupon from '@/Components/Cart/Coupon'
import Payment from '@/Components/Cart/Payment'
import { salePercent } from '@/Components/helper'
import SubmitButton from '@/Components/SubmitBtn'
import {
  clearCart,
  decrement,
  increment,
  removeFromCart,
  totalAmountCart,
} from '@/redux/slices/cartSlice'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

export default function CartPage() {
  const [coupon, setCoupon] = useState({ code: '', percent: 0 })
  const [addressId , setAddressId] = useState("")
  const cart = useSelector((state) => state.shoppingCart.cart)
  const totalAmount = useSelector(totalAmountCart)
  const dispatch = useDispatch()

  return (
    <>
      <div className="container mt-[72px] pt-12 font-VazirMedium">
        {cart.length == 0 ? (
          <div className="flex flex-col gap-4 items-center justify-center mb-[200px]">
            <i className="bi bi-basket text-6xl"></i>
            <p className="text-xl">سبد خرید خالی است!</p>
            <Link href={'/menu'}>
              <SubmitButton width={'w-auto'} title={'منو'} />
            </Link>
          </div>
        ) : (
          <div className="mx-auto w-full">
            <div className="bg-gray-300 dark:bg-stone-900 rounded-md  py-8 px-4 lg:py-10 lg:px-8 space-y-6">
              {cart &&
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col gap-y-6 gap-x-4 lg:flex-row items-center justify-between border-b dark:border-b-white border-b-black/40 pb-6"
                  >
                    <div>
                      <Image
                        className="rounded-md"
                        alt={item.name}
                        width={200}
                        height={200}
                        src={item.primary_image}
                      />
                    </div>
                    <p>{item.name}</p>
                    {item.is_sale ? (
                      <div className="flex flex-col flex-wrap items-center gap-3">
                        <p className="line-through text-sm">
                          {item.price.toLocaleString()} تومان
                        </p>
                        <p className="text-sm">
                          {item.sale_price.toLocaleString()} تومان
                        </p>
                        <p className="font-VazirLight text-red-500">
                          {salePercent(item.price, item.sale_price)} % تخفیف
                        </p>
                      </div>
                    ) : (
                      <p className="text-sm">
                        {item.price.toLocaleString()} تومان
                      </p>
                    )}
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() =>
                          item.qty > 1 && dispatch(decrement(item.id))
                        }
                        className="w-10 h-10 flex md:cursor-pointer items-center justify-center rounded-lg bg-gray-200 dark:bg-stone-800 text-xl hover:bg-gray-400 dark:hover:bg-stone-700 transition-all"
                      >
                        -
                      </button>
                      <div className="w-10 text-center text-lg">{item.qty}</div>
                      <button
                        onClick={() =>
                          item.qty < item.quantity
                            ? dispatch(increment(item.id))
                            : toast.warning('سقف موجودی محصول')
                        }
                        className="w-10 h-10 flex md:cursor-pointer  items-center justify-center rounded-lg bg-gray-200 dark:bg-stone-800 text-xl hover:bg-gray-400 dark:hover:bg-stone-700 transition-all"
                      >
                        +
                      </button>
                    </div>
                    {item.is_sale ? (
                      <p className="text-sm">
                        {(item.sale_price * item.qty).toLocaleString()} تومان
                      </p>
                    ) : (
                      <p className="text-sm">
                        {(item.price * item.qty).toLocaleString()} تومان
                      </p>
                    )}
                    <i
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="bi bi-x md:cursor-pointer text-red-500 text-4xl"
                    ></i>
                  </div>
                ))}
              <div className="flex items-center justify-center">
                <button
                  onClick={() => dispatch(clearCart())}
                  className="px-4 py-2 inline-block lg:px-5 lg:py-2 bg-red-700 rounded-md text-white hover:bg-red-600 md:cursor-pointer hover:scale-95 transition-all"
                >
                  پاک کردن سبد خرید
                </button>
              </div>
            </div>

            <div className="flex flex-col xl:flex-row items-center justify-center md:justify-between">
              <div className="mt-6">
                <Coupon setCoupon={setCoupon} />
              </div>

              <div className="mt-6">
                <Address setAddressId={setAddressId} />
              </div>
            </div>

            <div className="mx-auto w-full lg:w-[60%] border border-black dark:border-white p-4 font-VazirLight rounded-md mt-12">
              <h2 className="mb-4">مجموع سبد خرید</h2>
              <ul className="divide-y-1 divide-black dark:divide-white border border-black dark:border-white rounded-sm">
                <li className="p-2 flex items-center justify-between">
                  <p>مجموع قیمت:</p>
                  <p>{totalAmount.toLocaleString()} تومان</p>
                </li>
                <li className="p-2 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <p>تخفیف:</p>
                    <p className="text-red-600">{coupon.percent}%</p>
                  </div>
                  <p>{((totalAmount * coupon.percent) / 100).toLocaleString()} تومان</p>
                </li>
                <li className="p-2 flex items-center justify-between">
                  <p>قیمت پرداختی</p>
                  <p>{(totalAmount - (totalAmount * coupon.percent) / 100).toLocaleString()} تومان</p>
                </li>
              </ul>
             <Payment cart={cart} addressId={addressId} coupon={coupon}/>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
