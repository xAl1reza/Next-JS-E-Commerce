export default function FeaturesBoxes() {
  return (
    <>
      <h2 className="text-2xl lg:text-3xl font-VazirBold text-center mb-6 md:mb-8">
        چرا ما را انتخاب کنید؟
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-4 rounded-xl border border-flame-orange shadow-sm md:shadow-md shadow-flame-orange">
          <div className="flex flex-col items-center mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-10 mb-3 fill-flame-orange dark:fill-[#ffaa66]"
            >
              <path
                fillRule="evenodd"
                d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
                clipRule="evenodd"
              />
            </svg>

            <p className="font-VazirBold md:text-xl">کیفیت بی نظیر</p>
          </div>
          <p className="font-VazirLight text-sm md:text-lg">
            ما با وسواس زیاد بهترین مواد اولیه رو انتخاب می‌کنیم. هر گازی که
            میزنی طعم تازگی و کیفیت رو حس می‌کنی.
          </p>
        </div>
        <div className="p-4 rounded-xl border border-flame-orange shadow-sm md:shadow-md shadow-flame-orange">
          <div className="flex flex-col items-center mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-10 mb-3 fill-flame-orange dark:fill-[#ffaa66]"
            >
              <path
                fillRule="evenodd"
                d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                clipRule="evenodd"
              />
            </svg>

            <p className="font-VazirBold md:text-xl">آماده سازی سریع</p>
          </div>
          <p className="font-VazirLight text-sm md:text-lg">
            اینجا خبری از معطلی نیست. سفارشت با عشق و سرعت آماده میشه تا داغ و خوشمزه به دستت برسه
          </p>
        </div>
        <div className="p-4 rounded-xl border border-flame-orange shadow-sm md:shadow-md shadow-flame-orange">
          <div className="flex flex-col items-center mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-10 mb-3 fill-flame-orange dark:fill-[#ffaa66]"
            >
              <path
                fillRule="evenodd"
                d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z"
                clipRule="evenodd"
              />
            </svg>

            <p className="font-VazirBold md:text-xl">طعم اصیل</p>
          </div>
          <p className="font-VazirLight text-sm md:text-lg">
            دنبال یه طعم واقعی و آتیشی هستی؟ با یه بار امتحان برگرهامون، مشتری
            دائمی میشی
          </p>
        </div>
      </div>
    </>
  );
}
