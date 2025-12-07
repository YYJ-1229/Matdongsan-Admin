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
import { ApiList } from "./_components/ApiList";

export const metadata: Metadata = {
  title: "Seasonal Food",
};

export default function Page() {
  return (
    <>
      <Breadcrumb pageName="Seasonal Food List" />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div
          className={cn(
            "col-span-12 grid rounded-[10px] bg-white px-7.5 py-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-8",
          )}
        >
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-[1fr_1fr_0.5fr] sm:gap-4">
            <div>
              <label className="text-body-lg dart:text-white font-bold text-dark">
                음식명
              </label>
              <InputGroup
                label=""
                type="text"
                placeholder="EX) 사과"
                className="w-full min-w-[100px]"
              />
            </div>

            <div>
              <label className="text-body-lg dart:text-white font-bold text-dark">
                월별
              </label>
              <div className="flex">
                <Select
                  label=""
                  placeholder="Month"
                  className="mr-2 w-full min-w-[50px]"
                  items={[
                    { label: "1월", value: "1" },
                    { label: "2월", value: "2" },
                    { label: "3월", value: "3" },
                    { label: "4월", value: "4" },
                    { label: "5월", value: "5" },
                    { label: "6월", value: "6" },
                    { label: "7월", value: "7" },
                    { label: "8월", value: "8" },
                    { label: "9월", value: "9" },
                    { label: "10월", value: "10" },
                    { label: "11월", value: "11" },
                    { label: "12월", value: "12" },
                  ]}
                />
              </div>
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
            <Button
              label="API 업데이트"
              variant="primary"
              size="small"
              shape="rounded"
              className="h-[50px] p-3"
            />
          </div>
        </div>

        <div className="col-span-12 grid xl:col-span-8">
          <Suspense fallback={<FoodListSkeleton />}>
            <ApiList />
          </Suspense>
        </div>
      </div>
    </>
  );
}
