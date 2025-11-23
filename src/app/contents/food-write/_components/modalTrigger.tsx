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
      <button
        className="rounded bg-blue-600 px-4 py-2 text-white"
        onClick={() => setOpen(true)}
      >
        음식 리스트 보기
      </button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <h2 className="mb-8 text-body-2xlg font-bold text-dark dark:text-white">
          제철음식 API 조회
        </h2>

        <div className="mb-10 grid grid-cols-7 gap-4">
          <div className="col-span-4">
            <label className="text-body-lg dart:text-white font-bold text-dark">
              음식명
            </label>
            <div className="grid grid-cols-2 gap-2">
              <Select
                label=""
                placeholder="선택"
                className="w-full"
                items={[{ label: "음식명", value: "foodName" }]}
              />
              <InputGroup
                label=""
                type="text"
                placeholder="EX) 사과"
                className="w-full"
              />
            </div>
          </div>
          <div className="col-span-2">
            <label className="text-body-lg dart:text-white font-bold text-dark">
              월별
            </label>
            <Select
              label=""
              placeholder="선택"
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

          <div className="col-span-1 grid items-center">
            <label className="text-body-lg text-transparent">"EMPTY"</label>
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
                  <TableHead className="min-w-[100px]">음식명</TableHead>
                  <TableHead className="min-w-[170px]">식품번호</TableHead>
                  <TableHead className="min-w-[150px]">공개일자</TableHead>
                  <TableHead>업데이트일시</TableHead>
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
                    <TableCell>219953</TableCell>
                    <TableCell>4월</TableCell>
                    <TableCell>{food.finalUpdate}</TableCell>
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
