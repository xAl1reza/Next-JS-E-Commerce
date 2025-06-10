import InformationBoxes from "@/Components/Main-Page/InformationBoxes";
import HeadSection from "@/Components/Main-Page/HeadSection";
import ProductSection from "@/Components/Main-Page/ProductsSection";
import { getFetch } from "@/utils/fetch";
import About from "@/Components/About-Page/About";
import Contact from "@/Components/Contact-Page/Contact";

export default async function Home() {
  const productsTab = await getFetch("/products/products-tabs");

  return (
    <>
      <div className="container mx-auto mt-[72px]">
        {/* Head Section */}
        <div className="pt-12">
          <HeadSection />
        </div>

        {/* Features Section */}
        <div className="pt-12">
          <InformationBoxes />
        </div>

        {/* Products Section */}
        <div className="pt-12">
          <ProductSection
            tabList={productsTab.tabList}
            tabPanel={productsTab.tabPanel}
          />
        </div>
      </div>

      {/* About Section */}
      <div className="pt-12">
        <About />
      </div>

      <div className="container mx-auto">
        {/* Contact form */}
        <div className="pt-12">
          <Contact />
        </div>
      </div>
    </>
  );
}
