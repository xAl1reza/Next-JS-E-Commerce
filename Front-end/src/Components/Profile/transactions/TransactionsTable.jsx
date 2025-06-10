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
      <div className="relative overflow-x-auto sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="font-VazirLight text-sm text-gray-700 bg-gray-300 dark:bg-gray-900 dark:text-gray-200">
            <tr>
              <th scope="col" className="px-16 py-3">
                <span>شماره سفارش</span>
              </th>
              <th scope="col" className="px-6 py-3">
                مبلغ
              </th>
              <th scope="col" className="px-6 py-3">
                وضعیت
              </th>
              <th scope="col" className="px-6 py-3">
                شماره پیگیری
              </th>

              <th scope="col" className="px-6 py-3">
                تاریخ
              </th>
            </tr>
          </thead>
          <tbody>
            {data.transactions.map((transaction, i) => (
              <tr
                key={transaction.id}
                className={`${
                  i % 2 == 0
                    ? 'bg-white dark:bg-gray-950'
                    : 'bg-gray-300 dark:bg-gray-800'
                } border-b text-black dark:text-white dark:border-gray-700 border-gray-200 transition-all`}
              >
                <td className="p-4 text-center">{transaction.id}</td>
                <td className="px-6 py-4 text-center">{transaction.amount}</td>
                <td
                  className={`px-6 py-4 text-center ${
                    transaction.status == 'موفق'
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  {transaction.status}
                </td>
                <td className="px-6 py-4 text-center">
                  {transaction.trans_id}
                </td>
                <td className="px-6 py-4 text-center">
                  {transaction.created_at}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Paginate links={data.meta.links} />
    </>
  )
}
