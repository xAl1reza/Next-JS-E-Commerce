'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

export default function ProductImageSlider({ product }) {


  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      className="rounded-xl"
    >
      <SwiperSlide>
        <Image
          src={product.primary_image}
          alt="Product Image 1"
          width={800}
          height={500}
          className="rounded-xl h-auto object-cover"
        />
      </SwiperSlide>
      {product.images.map((img) => (
        <SwiperSlide key={img.id}>
          <Image
            alt={img.id}
            src={img.image}
            width={800}
            height={500}
            className="rounded-xl h-auto object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
