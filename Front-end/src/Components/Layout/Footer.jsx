export default function Footer() {
  return (
    <footer className="bg-zinc-950 dark:bg-neutral-900 text-white font-VazirMedium pt-10 pb-6 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
        {/* درباره ما */}
        <div className="flex flex-col items-center">
          <a href="#" className="text-2xl font-VazirBold block mb-3">
            Fire Berger
          </a>
          <p className="text-sm mb-4 leading-6 max-w-xs">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </p>
          <div className="flex justify-center items-center gap-4 mt-2">
            <a href="#">
              <i className="bi bi-facebook text-xl hover:text-gray-400"></i>
            </a>
            <a href="#">
              <i className="bi bi-twitter text-xl hover:text-gray-400"></i>
            </a>
            <a href="#">
              <i className="bi bi-linkedin text-xl hover:text-gray-400"></i>
            </a>
            <a href="#">
              <i className="bi bi-instagram text-xl hover:text-gray-400"></i>
            </a>
            <a href="#">
              <i className="bi bi-pinterest text-xl hover:text-gray-400"></i>
            </a>
          </div>
        </div>

        {/* تماس با ما */}
        <div className="flex flex-col items-center">
          <h4 className="text-xl font-VazirBold mb-4">تماس با ما</h4>
          <div className="space-y-4 text-sm">
            <div className="flex justify-center items-center gap-2 hover:text-gray-400">
              <i className="bi bi-geo-alt-fill text-lg"></i>
              <span>آدرس</span>
            </div>
            <div className="flex justify-center items-center gap-2 hover:text-gray-400">
              <i className="bi bi-telephone-fill text-lg"></i>
              <span className="ltr:ml-2">0910 000 0000</span>
            </div>
            <div className="flex justify-center items-center gap-2 hover:text-gray-400">
              <i className="bi bi-envelope-fill text-lg"></i>
              <span>demo@gmail.com</span>
            </div>
          </div>
        </div>

        {/* ساعت کاری */}
        <div className="flex flex-col items-center">
          <h4 className="text-xl font-VazirBold mb-4">ساعت کاری</h4>
          <p className="text-sm mb-2">هر روز</p>
          <p className="text-sm mb-2">10.00 صبح تا 12.00 شب</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm">
        <p>لورم ایپسوم متن ساختگی با تولید سادگی</p>
      </div>
    </footer>
  );
}
