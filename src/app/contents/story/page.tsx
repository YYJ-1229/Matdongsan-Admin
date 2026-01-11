import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import type { Metadata } from "next";
import { Suspense } from "react";
import { Select } from "@/components/FormElements/select";
import { cn } from "@/lib/utils";
import InputGroup from "@/components/FormElements/InputGroup";
import { Button } from "@/components/ui-elements/button";
import { FoodListSkeleton } from "@/components/Tables/food-list/skeleton";
import Link from "next/link";
import { StoryList } from "./_components/storyList";

export const metadata: Metadata = {
  title: "Seasonal Food",
};

export default function Page() {
  return (
    <>
      <Breadcrumb pageName="이야기 관리" />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div
          className={cn(
            "col-span-12 grid rounded-[10px] bg-white px-7.5 py-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-8",
          )}
        >
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-[1fr_1fr_2fr_0.5fr] sm:gap-4">
            <div>
              <label className="text-body-lg dart:text-white font-bold text-dark">
                음식명
              </label>
              <InputGroup
                label=""
                type="text"
                placeholder="입력"
                className="mt-2 w-full min-w-[100px]"
              />
            </div>

            <div>
              <label className="text-body-lg dart:text-white font-bold text-dark">
                구분
              </label>
              <Select
                label=""
                placeholder="선택"
                className="mr-5 mt-2 min-w-[150px] !space-y-0"
                items={[
                  { label: "플레이스", value: "place" },
                  { label: "제철기록", value: "contents" },
                  { label: "레시피", value: "recipe" },
                ]}
              />
            </div>
            <div className="">
              <label className="text-body-lg dart:text-white font-bold text-dark">
                등록일시
              </label>
              <div className="flex items-center">
                <InputGroup
                  label=""
                  type="date"
                  placeholder="입력"
                  className="mr-2 mt-2 w-full min-w-[80px]"
                />
                -
                <InputGroup
                  label=""
                  type="date"
                  placeholder="입력"
                  className="ml-2 mt-2 w-full min-w-[80px]"
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
            <div className="mr-3 flex justify-end">
              <Select
                label=""
                placeholder="선택"
                className="mr-5 min-w-[150px] !space-y-0"
                items={[
                  { label: "승인대기", value: "open" },
                  { label: "승인", value: "close" },
                  { label: "승인취소", value: "cancel" },
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
          </div>
        </div>

        <div className="col-span-12 grid xl:col-span-8">
          <Suspense fallback={<FoodListSkeleton />}>
            <StoryList />
          </Suspense>
        </div>
      </div>
    </>
  );
}
