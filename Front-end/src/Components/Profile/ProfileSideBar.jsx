'use client'

import { logout } from '@/Actions/auth'
import AuthContext from '@/Context/Auth-Context/AuthContext'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'

export default function ProfileSideBar() {
  const path = usePathname()
  const { logoutContext } = useContext(AuthContext)
  const router = useRouter()

  return (
    <>
      <div className="w-full lg:col-span-1">
        <ul className="space-y-2 border border-gray-400 rounded-lg divide-y divide-gray-400">
          <li className="px-4 py-3 0">
            <Link
              href="/profile"
              className={`${
                path === '/profile' ? 'block text-flame-orange' : 'block'
              }`}
            >
              اطلاعات کاربر
            </Link>
          </li>
          <li className="px-4 py-3 ">
            <Link
              href="/profile/addresses"
              className={`${
                path === '/profile/addresses'
                  ? 'block text-flame-orange'
                  : 'block'
              }`}
            >
              آدرس ها
            </Link>
          </li>
          <li className="px-4 py-3">
            <Link
              href={'/profile/orders'}
              className={`${
                path === '/profile/orders' ? 'block text-flame-orange' : 'block'
              }`}
            >
              سفارشات
            </Link>
          </li>
          <li className="px-4 py-3 ">
            <Link
              href={'/profile/transactions'}
              className={`${
                path === '/profile/transactions'
                  ? 'block text-flame-orange'
                  : 'block'
              }`}
            >
              تراکنش ها
            </Link>
          </li>
          <li className="px-4 py-3 text-red-600">
            <Link
              onClick={async () => {
                await logout()
                logoutContext()
                router.push('/')
              }}
              href={'/'}
              className={`${
                path === '/' ? 'block text-flame-orange' : 'block'
              }`}
            >
              خروج
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
