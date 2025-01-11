"use client";

import { SetStateAction, useState } from "react";
import Paginator from "../../../components/ui-v2/paginator";
import { DataTable } from "../../../components/ui-v2/data-table";
import { Member, columns } from "./columns";

import { generateUserList } from "./user-generator";

const adherentsData = generateUserList(43);

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
