import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import type { Metadata } from "next";
import { Suspense } from "react";
import { Select } from "@/components/FormElements/select";
import { cn } from "@/lib/utils";
import InputGroup from "@/components/FormElements/InputGroup";
import { Button } from "@/components/ui-elements/button";
import { FoodList } from "@/components/Tables/food-list";
import { FoodListSkeleton } from "@/components/Tables/food-list/skeleton";
import Link from "next/link";
import { CookingList } from "./_components/CookingList";

export const metadata: Metadata = {
  title: "Seasonal Food",
};

export default function Page() {
  return (
    <>
      <Breadcrumb pageName="제철 요리 관리" />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div
          className={cn(
            "col-span-12 grid rounded-[10px] bg-white px-7.5 py-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-8",
          )}
        >
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-[1fr_1fr_0.5fr] sm:gap-4">
            <div>
              <label className="text-body-lg dart:text-white font-bold text-dark">
                제철요리
              </label>
              <InputGroup
                label=""
                type="text"
                placeholder="입력"
                className="w-full min-w-[100px]"
              />
            </div>

            <div>
              <label className="text-body-lg dart:text-white font-bold text-dark">
                음식명
              </label>
              <InputGroup
                label=""
                type="text"
                placeholder="EX) 옥수수"
                className="w-full min-w-[100px]"
              />
            </div>

            <div className="flex items-end justify-end">
              <Button
                label="검색"
                variant="outlinePrimary"
                size="small"
                shape="rounded"
                className="h-[50px] p-3"
              />
            </div>
          </div>
        </div>

        <div className="col-span-12 grid xl:col-span-8">
          <div className="flex justify-end">
            <div className="mr-3 flex justify-end">
              <Select
                label=""
                placeholder="선택"
                className="mr-5 min-w-[150px] !space-y-0"
                items={[
                  { label: "노출", value: "open" },
                  { label: "노출 중지", value: "close" },
                ]}
              />
              <Button
                label="상태 변경"
                variant="primary"
                size="small"
                shape="rounded"
                className="h-[50px] p-3"
              />
            </div>
            <Link href={"/contents/cooking/write"}>
              <Button
                label="등록"
                variant="primary"
                size="small"
                shape="rounded"
                className="h-[50px] p-3"
              />
            </Link>
          </div>
        </div>

        <div className="col-span-12 grid xl:col-span-8">
          <Suspense fallback={<FoodListSkeleton />}>
            <CookingList />
          </Suspense>
        </div>
      </div>
    </>
  );
}
