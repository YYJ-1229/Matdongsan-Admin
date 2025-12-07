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

type ModalTriggerProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function ModalTrigger({ open, setOpen }: ModalTriggerProps) {
  const [search, setSearch] = useState("");

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["foods"],
    queryFn: getFoodList,
    enabled: open,
  });

  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
        <h2 className="my-5 text-body-2xlg font-bold text-dark dark:text-white">
          회원 상세
        </h2>

        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="mb-5 overflow-x-auto">
            <Table className="[&_td]:border-b [&_th]:border-b">
              <TableBody>
                <TableRow className="text-center text-base font-medium text-dark dark:text-white">
                  <TableHead className="max-w-[150px]">이메일</TableHead>
                  <TableCell>yyyy@nnn.ccc</TableCell>
                  <TableHead className="min-w-[150px]">이름</TableHead>
                  <TableCell>송예나</TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow className="text-center text-base font-medium text-dark dark:text-white">
                  <TableHead className="max-w-[15px]">작성 게시물</TableHead>
                  <TableCell>10</TableCell>
                  <TableHead className="min-w-[150px]">계정상태</TableHead>
                  <TableCell>활성화</TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow className="text-center text-base font-medium text-dark dark:text-white">
                  <TableHead className="max-w-[150px]">죄근접속일</TableHead>
                  <TableCell>2025-12-12 12:00:50</TableCell>
                  <TableHead className="min-w-[150px]">가입일시</TableHead>
                  <TableCell>2025-11-11 11:00:50</TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow className="text-center text-base font-medium text-dark dark:text-white">
                  <TableHead className="max-w-[150px]">등록자</TableHead>
                  <TableCell>aaaa@nnn.ccc</TableCell>
                  <TableHead className="min-w-[150px]">회원탈퇴</TableHead>
                  <TableCell>
                    <Button
                      label="탈퇴"
                      variant="dark"
                      size="small"
                      shape="rounded"
                      className="mr-3 h-[50px] p-3"
                      onClick={() => setOpen(true)}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        )}

        <div className="flex justify-center">
          <Button
            label="확인"
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
