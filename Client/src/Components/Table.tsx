import {
  ColumnDef,
  useReactTable,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";

import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { BsInfoSquareFill } from "react-icons/bs";
import Loader from "./Loader";
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

// const bookData: bookDataArrType[] = [
//   {
//     count : 9,
//   data :[ {
//     _id: "65cda450fdd8de233043a4a4",
//     title: "Love JS",
//     author: "aman simpson",
//     publish: "Pratham Publications",
//   },
//   {
//     _id: "65cda50c74324cb95220e1d4",
//     title: "sharu",
//     author: "aman simpson",
//     publish: "Pratham Publications",
//   }]}
// ];

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
    // accessorKey: "publish",
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

const Table = ({ Tdata, loader }: any) => {
  const table = useReactTable<bookDataArrType>({
    data: Tdata,
    columns: column,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div>
      {loader ? (
        <Loader />
      ) : (
        <table>
          {table.getHeaderGroups().map((headergroup) => (
            <tr key={headergroup.id}>
              {headergroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="border border-red-500 rounded-3xl"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}

          <tbody>
            {table.getRowModel().rows.map((row) => {
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="border border-red-500 px-16">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
