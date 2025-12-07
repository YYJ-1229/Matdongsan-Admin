"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getReportList } from "@/components/Tables/fetch";
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
  reportOpen: boolean;
  setReportOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function ModalReport({ reportOpen, setReportOpen }: ModalTriggerProps) {
  const [search, setSearch] = useState("");

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["foods"],
    queryFn: getReportList,
    enabled: reportOpen,
  });

  if (isLoading || !data) return <div>Loading...</div>;

  return (
    <>
      <Modal open={reportOpen} onClose={() => setReportOpen(false)}>
        <h2 className="my-5 text-body-2xlg font-bold text-dark dark:text-white">
          회원 상세
        </h2>

        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="mb-5 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="[&>th]:text-center">
                  <TableHead>번호</TableHead>
                  <TableHead>신고사유</TableHead>
                  <TableHead>신고자</TableHead>
                  <TableHead>신고일시</TableHead>
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
                    <TableCell>{food.content}</TableCell>
                    <TableCell>{food.name}</TableCell>
                    <TableCell>{food.regDT}</TableCell>
                  </TableRow>
                ))}
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
            onClick={() => setReportOpen(false)}
          />
        </div>
      </Modal>
    </>
  );
}
