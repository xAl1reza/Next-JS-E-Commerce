'use client'

import { addToCart } from '@/redux/slices/cartSlice'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

export default function ProductBox({ product }) {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.shoppingCart.cart)

  const handleAddToCart = () => {
    const productInCart = cart.find((item) => item.id === product.id)
    const currentQty = productInCart ? productInCart.qty : 0

    if (currentQty >= product.quantity) {
      toast.warning('سقف موجودی محصول')
    } else {
      dispatch(addToCart({ product, qty: 1 }))
      toast.success('محصول به سبد خرید اضافه شد')
    }
  }

  return (
    <div className="flex flex-col h-full bg-zinc-950 dark:bg-stone-700 font-VazirLight rounded-lg overflow-hidden">
      {/* تصویر */}
      <div className="aspect-[16/9] w-full overflow-hidden">
        <Link href={`/products/${product.slug}`}>
          <Image
            src={product.primary_image}
            alt={product.name}
            width={800}
            height={500}
            className="w-full h-full object-cover transition-all duration-300 md:hover:scale-110"
          />
        </Link>
      </div>

      {/* محتوا */}
      <div className="flex flex-col justify-between flex-grow p-4">
        {/* نام و توضیحات */}
        <div>
          <h3 className="text-white text-xl font-VazirBold leading-snug mb-2">
            <Link href={`/products/${product.slug}`}>{product.name}</Link>
          </h3>
          <p className="text-white text-sm leading-relaxed line-clamp-3 mb-6">
            {product.description}
          </p>
        </div>

        {/* قیمت و دکمه */}
        <div className="flex items-center justify-between mt-auto">
          <div>
            {product.is_sale ? (
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-white line-through text-sm md:text-base">
                  {product.price.toLocaleString()} تومان
                </p>
                <p className="text-white text-sm md:text-base">
                  {product.sale_price.toLocaleString()} تومان
                </p>
              </div>
            ) : (
              <p className="text-white text-sm md:text-base">
                {product.price.toLocaleString()} تومان
              </p>
            )}
          </div>

          <div
            onClick={() => handleAddToCart()}
            className="bg-flame-orange text-white p-2 flex items-center justify-center rounded-full md:cursor-pointer hover:scale-95 transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5 md:size-6"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
