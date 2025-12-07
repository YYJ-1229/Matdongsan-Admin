"use client";
import { Checkbox } from "@/components/FormElements/checkbox";
import Modal from "@/components/Modal/Modal";
import { getUserList } from "@/components/Tables/fetch";
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
import { ModalTrigger } from "./modalTrigger";
import { useState } from "react";
import { ModalReport } from "./modalReport";

export function UserList({ className }: { className?: string }) {
  const { data, isLoading } = useQuery({
    queryKey: ["foods", ""], // search 없으면 undefined
    queryFn: getUserList,
  });

  const [open, setOpen] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);

  if (isLoading || !data) return <div>Loading...</div>;

  return (
    <div
      className={cn(
        "grid rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card",
        className,
      )}
    >
      <ModalTrigger open={open} setOpen={setOpen} />
      <ModalReport reportOpen={reportOpen} setReportOpen={setReportOpen} />
      <Table>
        <TableHeader>
          <TableRow className="border-none uppercase [&>th]:text-center">
            <TableHead className="min-w-[20px] !text-left">번호</TableHead>
            <TableHead className="min-w-[100px]">이메일</TableHead>
            <TableHead className="min-w-[80px]">이름</TableHead>
            <TableHead className="min-w-[90px]">게시물수</TableHead>
            <TableHead className="min-w-[80px]">상태</TableHead>
            <TableHead>최근 접속일자</TableHead>
            <TableHead>가입일</TableHead>
            <TableHead className="min-w-[80px]">신고이력</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((food, i) => (
            <TableRow
              className="text-base font-medium text-dark dark:text-white [&>td]:text-center"
              onDoubleClick={() => setOpen(true)}
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
              <TableCell>{food.email}</TableCell>
              <TableCell>{food.name}</TableCell>
              <TableCell>{food.contents}</TableCell>
              <TableCell>{food.status}</TableCell>
              <TableCell>{food.recDT}</TableCell>
              <TableCell>{food.regDT}</TableCell>
              <TableCell onClick={() => setReportOpen(true)}>
                상세보기
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
