import './globals.css'
import Navbar from '@/Components/Layout/Header/Navbar'
import ThemeProvider from '@/Context/ThemeContext/ThemeProvider'
import ToastContainer from '@/Components/libraries/React-Tostify'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Footer from '@/Components/Layout/Footer'
import NextNprogress from '@/Components/libraries/NextNprogress'
import { AuthProvider } from '@/Context/Auth-Context/AuthContext'
import Providers from '@/redux/Provider'
export const metadata = {
  title: 'Next.js Course',
  description: 'Next Course',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body dir="rtl">
        <ThemeProvider>
          <AuthProvider>
            <Providers>
              <Navbar />
              <NextNprogress>{children}</NextNprogress>
              <div className="mt-12">
                <Footer />
              </div>
              <ToastContainer />
            </Providers>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
