'use client'

import SwitchTheme from '../../ThemeButtons/SwitchThemeBtn'
import SwitchThemeMobile from '../../ThemeButtons/SwitchThemeBtnMobile'
import Link from 'next/link'
import { useContext, useState } from 'react'
import { usePathname } from 'next/navigation'
import AuthContext from '@/Context/Auth-Context/AuthContext'
import { useSelector } from 'react-redux'

function Navbar() {
  const { user } = useContext(AuthContext)
  const cart = useSelector((state) => state.shoppingCart.cart)
  const path = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)
  const closeNav = () => {
    setIsOpen(false)
  }

  return (
    <>
      <nav className="nav fixed right-0 left-0 mx-auto top-0 z-40 bg-white dark:bg-black/70 text-[#222222] dark:text-white shadow-custome shadow-black/5 dark:shadow-white/5">
        <div className="max-w-[1440px] flex items-center justify-between mx-auto p-4">
          {/* لوگو */}
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap font-VazirMedium">
              فایربرگر
            </span>
          </a>

          {/* دکمه موبایل */}
          <button onClick={toggleMenu} className="inline-block md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          {/* منو */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex w-full max-w-md gap-6 justify-center lg:justify-between font-VazirMedium">
              <li>
                <Link
                  href="/"
                  className={path === '/' ? 'nav-link--active' : 'nav-link'}
                >
                  صفحه اصلی
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className={path === '/menu' ? 'nav-link--active' : 'nav-link'}
                >
                  منو
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className={
                    path === '/about-us' ? 'nav-link--active' : 'nav-link'
                  }
                >
                  درباره ما
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className={
                    path === '/contact-us' ? 'nav-link--active' : 'nav-link'
                  }
                >
                  تماس با ما
                </Link>
              </li>
            </ul>
          </div>

          {/* آیکون + دکمه + سوییچ تم */}
          <div className="hidden md:flex items-center gap-10">
            <div className="relative inline-block">
              <Link href={'/cart'}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-8 hover:fill-flame-orange transition-all"
                >
                  <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                </svg>
              </Link>

              <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-flame-orange text-white text-xs w-5 h-5 rounded-full flex items-center justify-center shadow">
                {cart.length}
              </span>
            </div>
            {user ? (
              <Link
                href={'/profile'}
                className="font-VazirLight md:cursor-pointer px-6 py-2 bg-[#222222] text-white dark:bg-white hover:bg-flame-orange dark:hover:bg-flame-orange dark:hover:text-white transition-all dark:text-black rounded-xl"
              >
                پروفایل
              </Link>
            ) : (
              <Link
                href={'/auth/login'}
                className="font-VazirLight md:cursor-pointer px-6 py-2 bg-[#222222] text-white dark:bg-white hover:bg-flame-orange dark:hover:bg-flame-orange dark:hover:text-white transition-all dark:text-black rounded-xl"
              >
                ورود
              </Link>
            )}
            <SwitchTheme />
          </div>
        </div>
      </nav>
      {/* Nav Mobile */}
      <nav
        className={`${
          isOpen ? 'left-0' : '-left-[274px]'
        } z-50 md:hidden transition-all fixed top-0 h-screen w-[180px] bg-white dark:bg-black text-[#222222] dark:text-white shadow-custome shadow-black/5 dark:shadow-white/5`}
      >
        <div
          onClick={closeNav}
          className="flex items-center justify-center mt-6 mr-3 cursor-pointer"
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-red-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="flex flex-col items-center gap-6 mt-6">
          <h3 className="text-2xl font-semibold whitespace-nowrap font-VazirMedium">
            فایربرگر
          </h3>
          <SwitchThemeMobile />
        </div>
        <ul className="flex flex-col items-center mt-12 gap-6 font-VazirMedium">
          <li>
            <Link
              onClick={closeNav}
              href="/"
              className={path === '/' ? 'nav-link--active' : 'nav-link--mobile'}
              aria-current="page"
            >
              صفحه اصلی
            </Link>
          </li>
          <li>
            <Link
              onClick={closeNav}
              href="/menu"
              className={
                path === '/menu' ? 'nav-link--active' : 'nav-link--mobile'
              }
              aria-current="page"
            >
              منو
            </Link>
          </li>
          <li>
            <Link
              onClick={closeNav}
              href="/about-us"
              className={
                path === '/about-us' ? 'nav-link--active' : 'nav-link--mobile'
              }
              aria-current="page"
            >
              درباره ما
            </Link>
          </li>
          <li>
            <Link
              onClick={closeNav}
              href="/contact-us"
              className={
                path === '/contact-us' ? 'nav-link--active' : 'nav-link--mobile'
              }
              aria-current="page"
            >
              تماس با ما
            </Link>
          </li>
        </ul>
        <div className="flex flex-col gap-8 items-center justify-center mt-10">
          {user ? (
            <Link
              href={'/profile'}
              className="font-VazirLight md:cursor-pointer px-6 py-2 bg-[#222222] text-white dark:bg-white hover:bg-flame-orange dark:hover:bg-flame-orange dark:hover:text-white transition-all dark:text-black rounded-xl"
            >
              پروفایل
            </Link>
          ) : (
            <Link
              href={'/auth/login'}
              className="font-VazirLight md:cursor-pointer px-6 py-2 bg-[#222222] text-white dark:bg-white hover:bg-flame-orange dark:hover:bg-flame-orange dark:hover:text-white transition-all dark:text-black rounded-xl"
            >
              ورود
            </Link>
          )}
          <div className="relative inline-block">
            <Link href={'/cart'}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-8 hover:fill-flame-orange transition-all"
              >
                <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
              </svg>
            </Link>

            <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-flame-orange text-white text-xs w-5 h-5 rounded-full flex items-center justify-center shadow">
              {cart.length}
            </span>
          </div>
        </div>
      </nav>

      <div
        onClick={closeNav}
        className={`${
          isOpen ? 'block' : 'hidden'
        } fixed top-0 left-0 bottom-0 right-0 bg-black/40 z-20`}
      ></div>
    </>
  )
}

export default Navbar
