import { getFetch } from "@/utils/fetch";
import ProductBox from "@/Components/Layout/ProductBox";
import Paginate from "./Paginate";

export default async function ProductMenuList({ params }) {
  
  const data = await getFetch(`/menu?${params}`);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch">
        {data.products.map((product) => (
          <ProductBox key={product.id} product={product} />
        ))}
      </div>
      <div>
        <Paginate links={data.meta.links} />
      </div>
    </>
  );
}
