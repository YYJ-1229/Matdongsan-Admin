import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import type { Metadata } from "next";
import { FoodInfo } from "./_components/food-info";
import { FoodDetail } from "./_components/food-detail";
import { FoodNutrition } from "./_components/food-nutrition";

export const metadata: Metadata = {
  title: "Seasonal Food",
};

export default function Page() {
  return (
    <>
      <Breadcrumb pageName="Write Seasonal Food" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          <FoodInfo />
          <FoodNutrition />
        </div>

        <div className="flex flex-col gap-9">
          <FoodDetail />
          <button className="flex w-full justify-center rounded-lg bg-primary p-[13px] font-medium text-white hover:bg-opacity-90">
            제철 음식 등록
          </button>
        </div>
      </div>
    </>
  );
}
