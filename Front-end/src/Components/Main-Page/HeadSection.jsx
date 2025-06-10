import Image from "next/image";
import Link from "next/link";

export default function HeadSection() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="col-span-6 lg:col-span-4 flex justify-center items-center relative">
          <div className="w-48 md:w-80 relative aspect-square mb-4 md:mb-0">
            <Image
              priority
              src="/images/hero-image.png"
              alt="Hero-Image"
              fill
              className="drop-shadow-lg drop-shadow-black dark:drop-shadow-white"
            />
          </div>
        </div>

        <div className="col-span-6 lg:col-span-8 flex flex-col justify-center items-center text-center gap-6">
          <h2 className="text-2xl lg:text-3xl font-VazirBold">
            با ما طعم متفاوتی از غذا را تجربه کنید
          </h2>
          <p className="text-sm md:text-lg font-VazirLight leading-relaxed">
            در رستوران ما با استفاده از تازه‌ترین مواد اولیه، غذاهایی با کیفیت و
            طعمی بی‌نظیر تهیه می‌شود. ما همیشه تلاش می‌کنیم تا با ارائه بهترین
            خدمات، لحظاتی خوشمزه و فراموش‌نشدنی برای شما بسازیم.
          </p>
          <Link href={"/menu"} className="font-VazirLight md:cursor-pointer px-8 py-3 text-base md:text-lg text-white bg-flame-orange hover:bg-[#ff7f26] hover:scale-95 transition-all rounded-xl">
            سفارش
          </Link>
        </div>
      </div>
    </>
  );
}
