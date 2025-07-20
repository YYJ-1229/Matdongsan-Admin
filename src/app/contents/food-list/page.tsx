import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import type { Metadata } from "next";
import { TopChannelsSkeleton } from "@/components/Tables/top-channels/skeleton";
import { Suspense } from "react";
import { TopChannels } from "@/components/Tables/top-channels";
import { Select } from "@/components/FormElements/select";
import { cn } from "@/lib/utils";
import InputGroup from "@/components/FormElements/InputGroup";
import DatePickerOne from "@/components/FormElements/DatePicker/DatePickerOne";
import { Button } from "@/components/ui-elements/button";
import { FoodList } from "@/components/Tables/food-list";
import { FoodListSkeleton } from "@/components/Tables/food-list/skeleton";

export const metadata: Metadata = {
  title: "Seasonal Food",
};

export default function Page() {
  return (
    <>
      <Breadcrumb pageName="Seasonal Food List" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div
          className={cn(
            "col-span-12 grid rounded-[10px] bg-white px-7.5 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-8",
          )}
        >
          <label className="text-body-lg font-bold text-dark dark:text-white">
            공개일자
          </label>

          <div className="grid grid-cols-4 gap-4 sm:grid-cols-4">
            <InputGroup
              label=""
              type="text"
              placeholder="EX) 2025"
              className="mb-4.5"
            />

            <Select
              label=""
              placeholder="Month"
              className="mb-4.5"
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
            <Select
              label=""
              placeholder="Week"
              className="mb-4.5"
              items={[
                { label: "1주차", value: "1" },
                { label: "2주차", value: "2" },
                { label: "3주차", value: "3" },
                { label: "4주차", value: "4" },
                { label: "5주차", value: "5" },
              ]}
            />
            <div className="mb-4.5 py-3.5">
              <Button
                label="검색"
                variant="primary"
                size="small"
                shape="rounded"
              />
            </div>
          </div>
        </div>

        <div className="col-span-12 grid xl:col-span-8">
          <Suspense fallback={<FoodListSkeleton />}>
            <FoodList />
          </Suspense>
        </div>
      </div>
    </>
  );
}
