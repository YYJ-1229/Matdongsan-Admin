"use client";
import { Checkbox } from "@/components/FormElements/checkbox";
import { getStoryList, getVoteList } from "@/components/Tables/fetch";
import Image from "next/image";
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
import { useState } from "react";
import { ModalTrigger } from "./modalTrigger";

export function StoryList({ className }: { className?: string }) {
  const { data, isLoading } = useQuery({
    queryKey: ["foods", ""], // search 없으면 undefined
    queryFn: getStoryList,
  });

  const [open, setOpen] = useState(false);
  const [type, setType] = useState("");

  if (isLoading || !data) return <div>Loading...</div>;

  return (
    <div
      className={cn(
        "grid rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card",
        className,
      )}
    >
      <ModalTrigger open={open} setOpen={setOpen} type={type} />

      <Table>
        <TableHeader>
          <TableRow className="border-none uppercase [&>th]:text-center">
            <TableHead>
              <Checkbox withIcon="check" label={""} />
            </TableHead>
            <TableHead className="min-w-[15px] !text-left">번호</TableHead>
            <TableHead className="min-w-[130px]">구분</TableHead>
            <TableHead className="min-w-[100px]">음식명</TableHead>
            <TableHead className="min-w-[150px]">미리보기</TableHead>
            <TableHead className="min-w-[70px]">등록수</TableHead>
            <TableHead className="min-w-[60px]">상태</TableHead>
            <TableHead>등록자</TableHead>
            <TableHead>최초 등록일시</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((food, i) => (
            <TableRow
              className="text-base font-medium text-dark dark:text-white [&>td]:text-center"
              onClick={() => {
                setOpen(true);
                setType(food.type);
              }}
              key={food.seq + 1}
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
              <TableCell>
                <Checkbox withIcon="check" label={""} />
              </TableCell>
              <TableCell>{food.seq}</TableCell>
              <TableCell>{food.type}</TableCell>
              <TableCell>{food.food}</TableCell>
              <TableCell className="flex justify-center">
                <Image
                  className="dark:hidden"
                  src={food.img}
                  alt={food.food}
                  width={100}
                  height={100}
                />
              </TableCell>
              <TableCell>{food.imgCount}</TableCell>
              <TableCell>{food.status}</TableCell>
              <TableCell>{food.regID}</TableCell>
              <TableCell>{food.regDT}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
