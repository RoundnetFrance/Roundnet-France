"use client";

import { SetStateAction, useState } from "react";
import Paginator from "../../../components/ui-v2/paginator";
import { DataTable } from "../../../components/ui-v2/data-table";
import { Member, columns } from "./columns";

import { generateUserList } from "./user-generator";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../@/components/ui/select";

const adherentsData = generateUserList(50);

const ConnectMembers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const totalPages = Math.ceil(adherentsData.length / pageSize);

  const paginatedData = adherentsData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="container mx-auto py-5">
      <h2 className="text-xl font-semibold mb-4 text-center">
        {adherentsData.length} adhérent.es en{" "}
        <span className="font-bold">2024</span>
        <Select defaultValue={"2024"}>
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2024">2024</SelectItem>
            <SelectItem value="2023">2023</SelectItem>
            <SelectItem value="2022">2022</SelectItem>
          </SelectContent>
        </Select>
      </h2>
      <DataTable columns={columns} data={adherentsData} />

      {/* <Paginator
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(pageNumber: SetStateAction<number>) =>
          setCurrentPage(pageNumber)
        }
      /> */}
    </div>
  );
};

export default ConnectMembers;
