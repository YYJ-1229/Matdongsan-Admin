"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getFoodList } from "@/components/Tables/fetch";
import Modal from "@/components/Modal/Modal";
import { RadioInput } from "@/components/FormElements/radio";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui-elements/button";
import InputGroup from "@/components/FormElements/InputGroup";
import { Select } from "@/components/FormElements/select";

export function ModalTrigger() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["foods"],
    queryFn: getFoodList,
    enabled: open,
  });

  return (
    <>
      <Button
        label="조회"
        variant="primary"
        size="small"
        shape="rounded"
        className="mr-3 h-[50px] p-3"
        onClick={() => setOpen(true)}
      />

      <Modal open={open} onClose={() => setOpen(false)}>
        <h2 className="mb-8 text-body-2xlg font-bold text-dark dark:text-white">
          제철음식 조회
        </h2>

        <div className="mb-10 grid grid-cols-6 gap-4">
          <div className="col-span-3">
            <InputGroup
              label="음식명"
              type="text"
              placeholder="EX) 사과"
              className="w-full"
            />
          </div>

          <div className="col-span-1 col-start-6 grid items-center">
            <label className="text-body-lg text-transparent">EMPTY</label>
            <Button
              label="검색"
              variant="primary"
              size="small"
              shape="rounded"
            />
          </div>
        </div>

        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-none uppercase [&>th]:text-center">
                  <TableHead className="max-w-[15px] !text-left">
                    선택
                  </TableHead>
                  <TableHead className="min-w-[150px]">음식명</TableHead>
                  <TableHead className="min-w-[120px]">공개주차</TableHead>
                  <TableHead className="min-w-[120px]">노출상태</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data?.map((food, i) => (
                  <TableRow
                    className="text-center text-base font-medium text-dark dark:text-white"
                    key={food.name + i}
                  >
                    <TableCell>
                      <RadioInput label="" />
                    </TableCell>
                    <TableCell>{food.name}</TableCell>
                    <TableCell>2025년 9월 5주차</TableCell>
                    <TableCell>노출</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}

        <div className="flex justify-center">
          <Button
            label="선택"
            variant="outlinePrimary"
            size="small"
            shape="rounded"
            onClick={() => setOpen(false)}
          />
        </div>
      </Modal>
    </>
  );
}
