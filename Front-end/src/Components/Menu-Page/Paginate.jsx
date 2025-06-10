"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Paginate({ links }) {

  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  function handlePage(page) {
    const params = new URLSearchParams(searchParams);
    params.set('page', page)

    router.replace(`${pathname}?${params.toString()}`)
}

  return (
    <ul className="flex items-center justify-center flex-wrap gap-4 mt-8 text-lg font-VazirLight">
      {links.slice(1 , -1).map((link, index) => (
        <li
          key={index}
          onClick={() => handlePage(link.label)}
          className={`${
            link.active
              ? "size-7 pt-1 flex items-center justify-center bg-flame-orange/70 rounded-full"
              : ""
          } transition-all md:cursor-pointer border-none outline-none`}
        >
          {link.label}
        </li>
      ))}
    </ul>
  );
}
