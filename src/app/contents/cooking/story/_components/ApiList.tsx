"use client";
import { getApiList } from "@/components/Tables/fetch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

import { useQuery } from "@tanstack/react-query";

export function ApiList({ className }: { className?: string }) {
  const { data, isLoading } = useQuery({
    queryKey: ["foods", ""], // search 없으면 undefined
    queryFn: getApiList,
  });

  if (isLoading || !data) return <div>Loading...</div>;

  return (
    <div
      className={cn(
        "grid rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card",
        className,
      )}
    >
      <h2 className="mb-8 text-body-2xlg font-bold text-dark dark:text-white">
        Foods List
      </h2>

      <Table>
        <TableHeader>
          <TableRow className="border-none uppercase [&>th]:text-center">
            <TableHead className="max-w-[15px] !text-left">번호</TableHead>
            <TableHead className="min-w-[100px]">음식명</TableHead>
            <TableHead className="min-w-[170px]">식품번호</TableHead>
            <TableHead className="min-w-[150px]">월별</TableHead>
            <TableHead>최종 업데이트일시</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((food, i) => (
            <TableRow
              className="text-base font-medium text-dark dark:text-white [&>td]:text-center"
              key={food.name + i}
            >
              {/* <TableCell className="flex min-w-fit items-center gap-3">
                <Image
                  src={channel.logo}
                  className="size-8 rounded-full object-cover"
                  width={40}
                  height={40}
                  alt={channel.name + " Logo"}
                  role="presentation"
                />
                <div className="">{food.name}</div>
              </TableCell>

              <TableCell>{compactFormat(food.seasonMonths)}</TableCell>

              <TableCell className="!text-right text-green-light-1">
                ${standardFormat(food.name)}
              </TableCell> */}
              <TableCell>{food.seq}</TableCell>
              <TableCell>{food.name}</TableCell>
              <TableCell>{food.openWeek}</TableCell>
              <TableCell>{food.openDate}</TableCell>
              <TableCell>{food.finalUpdate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
