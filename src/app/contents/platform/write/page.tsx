import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import type { Metadata } from "next";
import { FoodInfo } from "./_components/food-info";
import { FoodDetail } from "./_components/food-detail";
import { FoodNutrition } from "./_components/food-nutrition";
import { Button } from "@/components/ui-elements/button";
import { ModalTrigger } from "./_components/modalTrigger";

export const metadata: Metadata = {
  title: "Seasonal Food",
};

export default function Page() {
  return (
    <>
      <Breadcrumb pageName="제철요리 등록 / 상세" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-3">
          <FoodInfo />
          <button className="flex w-full justify-center rounded-lg bg-primary p-[13px] font-medium text-white hover:bg-opacity-90">
            저장하기
          </button>
        </div>
      </div>
    </>
  );
}
