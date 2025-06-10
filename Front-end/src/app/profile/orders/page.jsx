import OrdersTable from '@/Components/Profile/Orders/OrdersTable'
import { Suspense } from 'react'

export default function OrdersPage({ searchParams }) {
  const params = new URLSearchParams(Object.entries(searchParams))
  return (
    <>
      <Suspense key={params.toString()} fallback={<div className='flex items-center justify-center'>
        <span className='loader border-r-black size-12 dark:border-white border-b-transparent dark:border-b-transparent'></span>
      </div>}>
        <OrdersTable params={params.toString()} />
      </Suspense>
    </>
  )
}
