'use client'

import { addToCart } from '@/redux/slices/cartSlice'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

export default function AddToCart({ product }) {
  const [quantity, setQuantity] = useState(1)
  const cart = useSelector((state) => state.shoppingCart.cart)
  const dispatch = useDispatch()
  const handleAddToCart = () => {
    const productInCart = cart.find((item) => item.id === product.id)
    const currentQty = productInCart ? productInCart.qty : 0

    if (currentQty + quantity > product.quantity) {
      toast.warning('سقف موجودی محصول')
    } else {
      dispatch(addToCart({ product, qty: quantity }))
      toast.success('محصول به سبد خرید اضافه شد')
    }
  }

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <button
          onClick={() => handleAddToCart()}
          className="font-VazirLight w-full sm:w-auto text-center px-6 py-3 md:px-4 md:py-3 lg:px-6 lg:py-3 text-base sm:text-lg md:text-base text-white bg-flame-orange hover:bg-[#ff7f26] hover:scale-95 transition-all rounded-xl"
        >
          افزودن به سبد خرید
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={() => quantity > 1 && setQuantity((prev) => prev - 1)}
            className="w-10 h-10 flex md:cursor-pointer items-center justify-center rounded-lg bg-gray-200 dark:bg-stone-800 text-2xl font-bold hover:bg-gray-300 dark:hover:bg-stone-700 transition-all"
          >
            -
          </button>
          <div className="w-10 text-center text-lg font-semibold">
            {quantity}
          </div>
          <button
            onClick={() =>
              quantity < product.quantity && setQuantity((prev) => prev + 1)
            }
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-200 dark:bg-stone-800 text-2xl font-bold hover:bg-gray-300 dark:hover:bg-stone-700 transition-all"
          >
            +
          </button>
        </div>
      </div>
    </>
  )
}
