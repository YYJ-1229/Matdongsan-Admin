import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { compactFormat, standardFormat } from "@/lib/format-number";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { getFoodList } from "../fetch";

export async function FoodList({ className }: { className?: string }) {
  const data = await getFoodList();
  console.log(data);

  if (!data) return <div>Loading...</div>;

  return (
    <div
      className={cn(
        "grid rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card",
        className,
      )}
    >
      <h2 className="mb-4 text-body-2xlg font-bold text-dark dark:text-white">
        Foods List
      </h2>

      <Table>
        <TableHeader>
          <TableRow className="border-none uppercase [&>th]:text-center">
            <TableHead className="min-w-[120px] !text-left">음식명</TableHead>
            <TableHead>공개일자</TableHead>
            <TableHead className="!text-right">공개주차</TableHead>
            <TableHead>Sales</TableHead>
            <TableHead>Conversion</TableHead>
          </TableRow>
        </TableHeader>
        {/* 
        <TableBody>
          {data.map((food, i) => (
            <TableRow
              className="text-center text-base font-medium text-dark dark:text-white"
              key={food.name + i}
            >
              <TableCell className="flex min-w-fit items-center gap-3">
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
                {/* ${standardFormat(food.name)} 
              </TableCell>

              <TableCell>{food.name}</TableCell>

              <TableCell>{food.name}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
        */}
      </Table>
    </div>
  );
}
