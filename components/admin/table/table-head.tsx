import MUITableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell, { type TableCellProps } from "@mui/material/TableCell";

interface TableHeadProps {
  tableHead: {
    _id: string;
    name: string;
    align?: TableCellProps["align"];
  }[];
  showId?: boolean;
}

function TableHead({ tableHead, showId = false }: Readonly<TableHeadProps>) {
  return (
    <MUITableHead>
      <TableRow>
        {tableHead.map((item) => {
          if (item.name === "ID" && !showId) {
            return null;
          }

          const align = item.align ? item.align : "left";
          return (
            <TableCell key={item._id} align={align}>
              <strong>{item.name}</strong>
            </TableCell>
          );
        })}
      </TableRow>
    </MUITableHead>
  );
}

export default TableHead;
