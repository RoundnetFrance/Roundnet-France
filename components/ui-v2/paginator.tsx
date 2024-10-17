// this is where pagination logic is implemented, like whether a next page is available, which can then be imported to the DataTable

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "../../@/components/ui/pagination";
import { generatePaginationLinks } from "./generate-pages";

type PaginatorProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
};

export default function Paginator({
  currentPage,
  totalPages,
  onPageChange,
}: PaginatorProps) {
  return (
    <Pagination>
      <PaginationContent className="flex justify-center items-center mt-6 gap-10">
        <PaginationItem>
          <PaginationPrevious
            onClick={() => onPageChange(currentPage - 1)}
            className={`flex p-2 border rounded ${
              currentPage === 1 ? "invisible" : ""
            }`}
          />
        </PaginationItem>
        <div className="flex items-center gap-2">
          {generatePaginationLinks(currentPage, totalPages, onPageChange)}
        </div>
        <PaginationItem>
          <PaginationNext
            onClick={() => onPageChange(currentPage + 1)}
            className={`flex p-2 border rounded ${
              currentPage === totalPages ? "invisible" : ""
            }`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
