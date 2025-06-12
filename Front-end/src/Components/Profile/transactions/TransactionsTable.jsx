import { getFetch } from '@/utils/fetch'
import { cookies } from 'next/headers'
import Paginate from './Paginate'

export default async function TransactionsTable({ params }) {
  const cookiesStore = await cookies()
  const token = cookiesStore.get('token')
  const data = await getFetch(`/profile/transactions?${params}`, {
    Authorization: `Bearer ${token.value}`,
  })

  return (
    <>
      <div className="relative overflow-x-auto sm:rounded-lg mt-6">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="font-VazirLight text-sm text-gray-700 bg-gray-300 dark:bg-gray-900 dark:text-gray-200">
            <tr>
              <th scope="col" className="px-6 py-3 text-center">
                <span>نام</span>
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                ایمیل
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                شماره تلفن
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                تاریخ عضویت
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                عملیات
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white dark:bg-gray-950 border-b text-black dark:text-white dark:border-gray-700 border-gray-200 transition-all">
              <td className="px-6 py-4 text-center">12345</td>
              <td className="px-6 py-4 text-center">250,000 تومان</td>
              <td className="px-6 py-4 text-center text-green-600">موفق</td>
              <td className="px-6 py-4 text-center">TRX987654321</td>
              <td className="px-6 py-4 text-center">1403/03/22</td>
            </tr>
            <tr className="bg-gray-300 dark:bg-gray-800 border-b text-black dark:text-white dark:border-gray-700 border-gray-200 transition-all">
              <td className="px-6 py-4 text-center">67890</td>
              <td className="px-6 py-4 text-center">180,000 تومان</td>
              <td className="px-6 py-4 text-center text-red-600">ناموفق</td>
              <td className="px-6 py-4 text-center">TRX123456789</td>
              <td className="px-6 py-4 text-center">1403/03/20</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Paginate links={data.meta.links} />
    </>
  )
}
