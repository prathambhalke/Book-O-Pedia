import {
  ColumnDef,
  useReactTable,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";

import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { BsInfoSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";

type bookDataArrType = {
  count: number;
  data: {
    _id: string;
    title: string;
    author: string;
    publish: string;
  }[];
};

const column: ColumnDef<bookDataArrType, any>[] = [
  {
    header: "ID",
    accessorKey: "_id",
    footer: "ID",
  },
  {
    header: "Title",
    accessorKey: "title",
    footer: "Title",
  },
  {
    header: "Author",
    accessorKey: "author",
    footer: "Author",
  },
  {
    header: "Publish",
    accessorKey: "publish",
    footer: "Publish",
  },
  {
    header: "Options",
    footer: "Options",
    cell: (item) => {
      const uId = item.cell.row._valuesCache._id;
      return (
        <div className="flex gap-5 text-xl">
          <Link to={`/books/details/${uId}`}>
            <BsInfoSquareFill className="text-blue-600" />
          </Link>
          <Link to={`/books/edit/${uId}`}>
            <FaEdit className="text-yellow-400" />
          </Link>
          <Link to={`/books/delete/${uId}`}>
            <MdDelete className="text-red-600" />
          </Link>
        </div>
      );
    },
  },
];

const Table = ({ Tdata }: any) => {
  const table = useReactTable<bookDataArrType>({
    data: Tdata,
    columns: column,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead className="sticky top-0 bg-white z-10">
          {table.getHeaderGroups().map((headergroup) => (
            <tr key={headergroup.id}>
              {headergroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-6 py-3 bg-purple-700 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody className="bg-white divide-y divide-purple-200">
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
