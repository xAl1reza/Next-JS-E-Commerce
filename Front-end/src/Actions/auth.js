'use server'

import { handleError } from '@/Components/helper'
import { postFetch } from '@/utils/fetch'
import { cookies } from 'next/headers'

async function login(stateLogin, formData) {
  const cookiesStore = await cookies()
  const cellphone = formData.get('cellphone')

  if (cellphone === '') {
    return {
      status: 'error',
      message: 'شماره موبایل الزامی است',
    }
  }

  const pattern = /^(\+98|0)?9\d{9}$/

  if (!pattern.test(cellphone)) {
    return {
      status: 'error',
      message: 'شماره موبایل معتبر نیست',
    }
  }
  const data = await postFetch('/auth/login', { cellphone })
  if (data.status === 'success') {
    cookiesStore.set({
      name: 'login-token',
      value: data.data.login_token,
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // A week
    })
    return {
      status: data.status,
      message: 'کد تایید برای شما با موفقیت ارسال شد',
    }
  } else {
    return {
      status: data.status,
      message: handleError(data.message),
    }
  }
}

async function checkOtp(stateOtp, formData) {
  const cookiesStore = await cookies()
  const otp = formData.get('otp')

  if (otp === '') {
    return {
      status: 'error',
      message: 'کد تایید الزامی است',
    }
  }

  const pattern = /^[0-9]{6}$/

  if (!pattern.test(otp)) {
    return {
      status: 'error',
      message: 'کد تایید معتبر نیست',
    }
  }

  const loginToken = cookiesStore.get('login-token')
  if (!loginToken) {
    return {
      status: 'error',
      message: 'توکن ورودی معتبر نیست. دوباره تلاش کنید',
    }
  }

  const data = await postFetch('/auth/check-otp', {
    otp,
    login_token: loginToken.value,
  })
  if (data.status === 'success') {
    cookiesStore.delete('login-token')
    cookiesStore.set({
      name: 'token',
      value: data.data.token,
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // A week
    })
    return {
      status: data.status,
      message: 'شما با موفقیت وارد شدید',
      user: data.data.user,
    }
  } else {
    return {
      status: data.status,
      message: handleError(data.message),
    }
  }
}

async function me() {
  const cookiesStore = await cookies()
  const token = cookiesStore.get('token')

  if (!token) {
    return {
      error: 'Not Authorized',
    }
  }

  const data = await postFetch(
    '/auth/me',
    {},
    { Authorization: `Bearer ${token.value}` }
  )
  if (data.status === 'success') {
    return {
      user: data.data,
    }
  } else {
    return {
      error: 'User Forbidden',
    }
  }
}

async function resendOtp() {
  const cookiesStore = await cookies()
  const loginToken = cookiesStore.get('login-token')

  if (!loginToken) {
    return {
      status: 'error',
      message: 'توکن ورودی معتبر نیست. دوباره تلاش کنید',
    }
  }

  const data = await postFetch('/auth/resend-otp', {
    login_token: loginToken.value,
  })
  if (data.status === 'success') {
    cookiesStore.set({
      name: 'login-token',
      value: data.data.login_token,
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // A week
    })
    return {
      status: data.status,
      message: 'کد ورود ارسال شد',
    }
  } else {
    return {
      status: data.status,
      message: handleError(data.message),
    }
  }
}

async function logout() {
  const cookiesStore = await cookies()
  const token = cookiesStore.get('token')

  const data = await postFetch(
    '/auth/logout',
    {},
    { Authorization: `Bearer ${token.value}` }
  )
  if (data.status === 'success') {
    cookiesStore.delete('token')
    return {
      user: 'شما با موفقیت خارج شدید',
    }
  } else {
    return {
      error: 'User Forbidden',
    }
  }
}

export { login, checkOtp, me, resendOtp, logout }
