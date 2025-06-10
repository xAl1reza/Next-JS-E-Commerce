import { getFetch } from '@/utils/fetch'
import { cookies } from 'next/headers'
import OrderButton from './OrderRow'
import Paginate from './Paginate'

export default async function OrdersTable({params}) {
  const cookiesStore = await cookies()
  const token = cookiesStore.get('token')
  const data = await getFetch(`/profile/orders?${params}`, {
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
                آدرس
              </th>
              <th scope="col" className="px-6 py-3">
                وضعیت
              </th>
              <th scope="col" className="px-6 py-3">
                وضعیت پرداخت
              </th>
              <th scope="col" className="px-6 py-3">
                قیمت کل
              </th>
              <th scope="col" className="px-6 py-3">
                تاریخ
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {data.orders.map((order, i) => (
              <tr
                key={order.id}
                className={`${
                  i % 2 == 0
                    ? 'bg-white dark:bg-gray-950'
                    : 'bg-gray-300 dark:bg-gray-800'
                } border-b text-black dark:text-white dark:border-gray-700 border-gray-200 transition-all`}
              >
                <td className="p-4 text-center">{order.id}</td>
                <td className="px-6 py-4 text-center">{order.address_title}</td>
                <td
                  className={`px-6 py-4 text-center ${
                    order.status == 'در حال پردازش'
                      ? 'text-green-700'
                      : 'text-yellow-600'
                  }`}
                >
                  {order.status}
                </td>
                <td
                  className={`px-6 py-4 text-center ${
                    order.payment_status == 'موفق'
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  {order.payment_status}
                </td>
                <td className="px-6 py-4 text-center">
                  {order.paying_amount.toLocaleString()} تومان
                </td>
                <td className="px-6 py-4 text-center">{order.created_at}</td>
                <td className="px-6 py-4 text-center">
                  <OrderButton order={order} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Paginate links={data.meta.links}/>
    </>
  )
}
