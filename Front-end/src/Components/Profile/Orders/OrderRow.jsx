'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function OrderButton({ order }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-flame-orange md:cursor-pointer hover:bg-[#ff7f26] text-white px-6 py-2 rounded-md transition-all hover:scale-95"
      >
        محصولات
      </button>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-opacity-40 backdrop-blur-sm z-40"
        ></div>
      )}
      {/* مودال */}

      <div
        className={`fixed z-50 left-1/2 -translate-x-1/2 ${
          open
            ? 'top-24 opacity-100 pointer-events-auto'
            : '-top-24 opacity-0 pointer-events-none'
        } w-[95%] max-w-5xl transition-all max-h-[80vh] overflow-y-auto bg-white dark:bg-zinc-800 text-black dark:text-white p-4 rounded-lg shadow-lg`}
      >
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg">محصولات سفارش شماره {order.id}</p>
          <p
            onClick={() => setOpen(false)}
            className="text-red-600 cursor-pointer text-3xl"
          >
            ×
          </p>
        </div>
        <table className="w-full text-sm text-center border-separate border-spacing-y-2">
          <thead className="bg-gray-200 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-2 rounded-r-lg">محصول</th>
              <th className="px-4 py-2">نام</th>
              <th className="px-4 py-2">قیمت</th>
              <th className="px-4 py-2">تعداد</th>
              <th className="px-4 py-2 rounded-l-lg">قیمت کل</th>
            </tr>
          </thead>
          <tbody>
            {order.order_items.map((item) => (
              <tr key={item.id} className="bg-gray-100 dark:bg-gray-950">
                <td className="px-4 py-2 rounded-r-lg">
                  <Image
                    width={80}
                    height={53}
                    src={item.product_primary_image}
                    className="w-16 md:w-32 max-w-full max-h-full rounded-md mx-auto"
                    alt="product"
                  />
                </td>
                <td className="px-4 py-2">{item.product_name}</td>
                <td className="px-4 py-2">
                  {item.price.toLocaleString()} تومان
                </td>
                <td className="px-4 py-2">{item.quantity}</td>
                <td className="px-4 py-2 rounded-l-lg">
                  {item.subtotal.toLocaleString()} تومان
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
