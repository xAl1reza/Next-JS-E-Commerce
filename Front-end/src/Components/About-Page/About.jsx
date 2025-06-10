import Image from "next/image";
import AboutImg from "../../../public/images/About.png";
import Link from "next/link";
export default function About() {
  return (
    <>
      <section className="py-16 bg-zinc-950 dark:bg-neutral-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="w-full">
              <div className="overflow-hidden flex items-center justify-center relative size-[200px] md:size-[300px] mx-auto">
                <Image src={AboutImg} alt="about-image" fill />
              </div>
            </div>
            <div className="space-y-6 text-right">
              <div>
                <h2 className="text-3xl font-VazirBold text-white text-center">
                  لورم ایپسوم متن
                </h2>
              </div>
              <p className="font-VazirLight leading-relaxed text-white">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
                جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت
              </p>
              <Link href={"/about-us"} className="w-full md:w-auto font-VazirLight md:cursor-pointer px-8 py-3 text-base md:text-lg text-white bg-flame-orange hover:bg-[#ff7f26] hover:scale-95 transition-all rounded-xl">
                بیشتر
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
