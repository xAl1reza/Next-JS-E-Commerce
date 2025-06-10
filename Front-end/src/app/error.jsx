'use client'

export default function Error({ error, reset }) {
  return (
    <>
      <div className="font-VazirMedium flex flex-col items-center justify-center gap-4 mt-[72px] pt-12">
        <h2 className="text-3xl text-red-600">{error.message}</h2>
        <button
          className="px-6 py-2 bg-flame-orange font-VazirMedium rounded-md hover:scale-95 transition-all"
          onClick={() => reset()}
        >
          تلاش دوباره
        </button>
      </div>
    </>
  )
}
