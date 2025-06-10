import { salePercent } from '@/Components/helper'
import { getFetch } from '@/utils/fetch'
import ProductImageSlider from '@/Components/Products/ProductImageSlider'
import ProductBox from '@/Components/Layout/ProductBox'
import AddToCart from '@/Components/Products/AddToCart'

export default async function ProductPage({ params }) {
  const product = await getFetch(`/products/${decodeURI(params.slug)}`)
  const randomProducts = await getFetch(`/random-products?count=4`)

  return (
    <div className="container mt-[72px] pt-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-3 gap-y-10 gap-x-16">
        {/* تصاویر محصول */}
        <div className="md:col-span-2 xl:col-span-1 flex justify-center items-center">
          <ProductImageSlider product={product} />
        </div>

        {/* اطلاعات محصول */}
        <div className="md:col-span-2 flex flex-col justify-around gap-10">
          <div className="space-y-6">
            <h2 className="text-2xl lg:text-3xl font-VazirBold">
              {product.name}
            </h2>
            {product.is_sale ? (
              <>
                <p className="text-lg font-VazirMedium line-through text-gray-800 dark:text-gray-200">
                  {product.price.toLocaleString()} تومان
                </p>
                <p className="text-lg font-VazirMedium text-gray-800 dark:text-gray-200">
                  {product.sale_price.toLocaleString()} تومان
                </p>
              </>
            ) : (
              <p className="text-lg font-VazirMedium text-gray-800 dark:text-gray-200">
                {product.price.toLocaleString()} تومان
              </p>
            )}
            <p className="text-base leading-relaxed font-VazirLight text-gray-800 dark:text-gray-100">
              {product.description}
            </p>
            {product.is_sale && (
              <p className="font-VazirLight text-red-600">
                {salePercent(product.price, product.sale_price)} % تخفیف
              </p>
            )}
          </div>
          <AddToCart product={product} />
        </div>
      </div>

      <div className="pt-16 mt-16 border-t border-black/60 dark:border-white/60">
        <h2 className="text-2xl lg:text-3xl font-VazirBold text-center mb-8 md:mb-10">
          پیشنهاد های دیگر
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {randomProducts.map((product, idx) => (
            <ProductBox key={idx} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
