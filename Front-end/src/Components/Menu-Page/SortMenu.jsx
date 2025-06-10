"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SortMenu() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleChange(type) {
    const params = new URLSearchParams(searchParams);
    params.set("sortBy", type);
    params.delete("page");

    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <>
      {/* Sort Section */}
      <div className="flex flex-col gap-2 pt-6">
        <div className="flex items-center gap-1.5">
          <input
            checked={
              searchParams.has("sortBy") && searchParams.get("sortBy") == "max"
            }
            className="appearance-none dark:checked:bg-flame-orange/85 checked:bg-flame-orange/70 border-zinc-950/70 dark:border-gray-200/70 border p-1.5 rounded-full"
            name="categorySort"
            onChange={() => handleChange("max")}
            type="radio"
          />
          <p>بیشترین قیمت</p>
        </div>
        <div className="flex items-center gap-1.5">
          <input
            checked={
              searchParams.has("sortBy") && searchParams.get("sortBy") == "min"
            }
            className="appearance-none checked:bg-flame-orange/70 border-zinc-950/70 dark:border-gray-200/70 border p-1.5 rounded-full"
            name="categorySort"
            onChange={() => handleChange("min")}
            type="radio"
          />
          <p>کمترین قیمت</p>
        </div>
        <div className="flex items-center gap-1.5">
          <input
            checked={
              searchParams.has("sortBy") &&
              searchParams.get("sortBy") == "bestseller"
            }
            className="appearance-none checked:bg-flame-orange/70 border-zinc-950/70 dark:border-gray-200/70 border p-1.5 rounded-full"
            name="categorySort"
            onChange={() => handleChange("bestseller")}
            type="radio"
          />
          <p>پرفروش ترین</p>
        </div>
        <div className="flex items-center gap-1.5">
          <input
            checked={
              searchParams.has("sortBy") && searchParams.get("sortBy") == "sale"
            }
            className="appearance-none checked:bg-flame-orange/70 border-zinc-950/70 dark:border-gray-200/70 border p-1.5 rounded-full"
            name="categorySort"
            onChange={() => handleChange("sale")}
            type="radio"
          />
          <p>با تخفیف</p>
        </div>
      </div>
    </>
  );
}
