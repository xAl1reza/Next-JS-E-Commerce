import ProductMenuList from "@/Components/Menu-Page/ProductsMneuList";
import { getFetch } from "@/utils/fetch";
import { Suspense } from "react";
import Loading from "@/Components/Menu-Page/Loading";
import Search from "@/Components/Menu-Page/Search";
import Categories from "@/Components/Menu-Page/Categories";

export default async function Menu({ searchParams }) {
  const categories = await getFetch("/categories");
  const params = new URLSearchParams(Object.entries(searchParams));

  return (
    <div className="container mt-[72px] pt-12 font-VazirLight">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        <div className="px-4 md:px-0">
          {/* Search Input */}
          <Search />

          {/* Categories */}
          <Categories categories={categories} />
        </div>

        {/* Content */}
        <div className="col-span-2">
          <Suspense key={params.toString()} fallback={<Loading />}>
            <ProductMenuList params={params.toString()} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
