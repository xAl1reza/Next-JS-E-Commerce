"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Search() {
  const [term, setTerm] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleSearch(e, remove) {
    e.preventDefault();
    setTerm("");

    const params = new URLSearchParams(searchParams);
    params.delete("page");

    if (remove) {
      params.delete("search");
    } else {
      params.set("search", term);
    }

    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <>
      <div className="pb-6 border-b border-b-black/50 dark:border-b-white/50">
        <div className="flex items-center gap-2">
          <p className="mb-2">جستجو</p>
          {searchParams.has("search") ? (
            <span onClick={(e) => handleSearch(e, true)}>
              <i className="text-xl md:cursor-pointer text-red-600 bi bi-x"></i>
            </span>
          ) : (
            ""
          )}
        </div>

        <form
          onSubmit={(e) => (term !== "" ? handleSearch(e) : e.preventDefault())}
          className="flex items-center gap-2 rounded-md border border-black dark:border-white px-3 w-full"
        >
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="دنبال چی میگردی؟"
            className="flex-1 min-w-0 h-12 rounded-md outline-none font-VazirLight text-sm bg-transparent"
          />
          <button
            type="submit"
            className="md:cursor-pointer hover:scale-90 transition-all text-xl"
          >
            <i className="bi  bi-search"></i>
          </button>
        </form>
      </div>
    </>
  );
}
