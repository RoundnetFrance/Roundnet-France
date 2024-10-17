// this implementation can be a bit jumpy for larger tables, but should be good for most and easily adaptable if not
// this file is where the logic for how when ellipses are shown and other fiddly bits

import {
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "../../@/components/ui/pagination";

export const generatePaginationLinks = (
  currentPage: number,
  totalPages: number,
  onPageChange: (page: number) => void
) => {
  const pages: JSX.Element[] = [];
  if (totalPages <= 6) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink
            className={`p-2 border rounded
              ${currentPage === i ? "bg-blue-500 text-white" : ""}`}
            onClick={() => onPageChange(i)}
            isActive={i === currentPage}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
  } else {
    let start: number;
    if (currentPage == 1) {
      start = 1;
    } else if (currentPage == totalPages) {
      start = currentPage - 2;
    } else {
      start = currentPage - 1;
    }

    pages.push(
      <PaginationEllipsis
        key="left-pagination-ellipsis-members"
        className={`${currentPage < 3 ? "invisible" : ""}`}
      />
    );

    for (let i = start; i < start + 3; i++) {
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink
            className={`p-2 border rounded
              ${currentPage === i ? "bg-blue-500 text-white" : ""}
              ${i > currentPage - 3 && i < currentPage + 3 ? "" : "hidden"} `}
            onClick={() => onPageChange(i)}
            isActive={i === currentPage}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    pages.push(
      <PaginationEllipsis
        key="right-pagination-ellipsis-members"
        className={`${currentPage > totalPages - 2 ? "invisible" : ""}`}
      />
    );
  }

  return pages;
};
