"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import SortMenu from "./SortMenu";

export default function Categories({ categories }) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleClick(id) {
    const params = new URLSearchParams(searchParams);
    params.set("category", id);
    params.delete("page");

    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <>
      {/* Filter Section */}
      <div className="py-6 border-b border-b-black/50 dark:border-b-white/50">
        <ul className="flex flex-col gap-2">
          {categories.map((category) => (
            <li
              className={`hover:text-flame-orange hover:scale-105 md:cursor-pointer transition-all ${
                searchParams.has("category") &&
                searchParams.get("category") == category.id
                  ? "text-flame-orange"
                  : ""
              }`}
              onClick={() => handleClick(category.id)}
              key={category.id}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Sort Section */}
      <SortMenu />
    </>
  );
}
