"use client";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState } from "react";
import ProductBox from "@/Components/Layout/ProductBox";
import Link from "next/link";

export default function ProductSection({ tabList, tabPanel }) {
  const [active, setActive] = useState("پیتزا");

  const activeHandle = (category) => {
    setActive(category);
  };

  return (
    <>
      <Tabs>
        {/* Categoris */}
        <TabList>
          <div>
            <h2 className="text-2xl lg:text-3xl font-VazirBold text-center mb-6 md:mb-8">
              محصولات ما
            </h2>
            <div className="font-VazirMedium flex items-center justify-center gap-8 flex-wrap text-base md:text-lg mb-6 md:mb-8">
              {tabList.map((category, index) => (
                <Tab
                  key={index}
                  onClick={() => activeHandle(category)}
                  className={`${
                    active === category
                      ? "px-4 py-2 bg-flame-orange rounded-xl"
                      : ""
                  } transition-all md:cursor-pointer border-none outline-none`}
                >
                  {category}
                </Tab>
              ))}
            </div>
          </div>
        </TabList>

        {/* Products */}
        {tabPanel.map((panel, index) => (
          <TabPanel key={index}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {panel.map((product, idx) => (
                <ProductBox key={idx} product={product} />
              ))}
            </div>
          </TabPanel>
        ))}
        <div className="flex items-center justify-center mt-8">
          <Link href={"/menu"} className="font-VazirLight md:cursor-pointer px-8 py-3 text-base md:text-lg text-white bg-flame-orange hover:bg-[#ff7f26] hover:scale-95 transition-all rounded-xl">
            بیشتر
          </Link>
        </div>
      </Tabs>
    </>
  );
}
