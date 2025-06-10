'use server'

import { handleError } from '@/Components/helper'
import { getFetch, postFetch } from '@/utils/fetch'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'

async function checkCoupon(stateOtp, formData) {
  const code = formData.get('code')
  const cookiesStore = await cookies()

  if (code === '') {
    return {
      status: 'error',
      message: 'وارد کردن کد تخفیف الزامی است',
    }
  }

  const token = cookiesStore.get('token')

  if (!token) {
    return {
      status: 'error',
      message: 'توکن ورودی معتبر نیست. دوباره تلاش کنید',
    }
  }

  const data = await postFetch(
    '/check-coupon',
    {
      code,
    },
    {
      Authorization: `Bearer ${token.value}`,
    }
  )
  if (data.status === 'success') {
    revalidatePath('/profile')
    return {
      status: data.status,
      message: 'کد تخفیف شما اعمال شد',
      percentage: data.data.percentage,
      code: code,
    }
  } else {
    return {
      status: data.status,
      message: handleError(data.message),
    }
  }
}

async function getAddresses() {
  const cookiesStore = await cookies()
  const token = cookiesStore.get('token')
  const data = await getFetch('/user/addresses', {
    Authorization: `Bearer ${token.value}`,
  })
  return data
}

async function payment(stateOtp, formData) {
  const cart = formData.get('cart')
  const coupon = formData.get('coupon')
  const address_id = formData.get('address_id')

  const cookiesStore = await cookies()

  if (address_id === '') {
    return {
      status: 'error',
      message: 'انتخاب آدرس الزامی است',
    }
  }

  const token = cookiesStore.get('token')

  if (!token) {
    return {
      status: 'error',
      message: 'توکن ورودی معتبر نیست. دوباره تلاش کنید',
    }
  }

  const data = await postFetch(
    '/payment/send',
    {
      cart: JSON.parse(cart),
      coupon,
      address_id,
    },
    {
      Authorization: `Bearer ${token.value}`,
    }
  )
  if (data.status === 'success') {
    return {
      status: data.status,
      message: 'درحال انتقال به درگاه پرداخت',
      url: data.data.url,
    }
  } else {
    return {
      status: data.status,
      message: handleError(data.message),
    }
  }
}

async function paymentVerify(trackId, status) {
  const data = await postFetch('/payment/verify', {
    token: trackId,
    status,
  })
  if (data.status === 'success') {
    return {
      status: data.status,
      payment: data.data,
    }
  } else {
    return {
      status: data.status,
      message: handleError(data.message),
    }
  }
}
export { checkCoupon, getAddresses, payment, paymentVerify }
