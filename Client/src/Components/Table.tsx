import {
  ColumnDef,
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import Pagination from "./Pagination";

import { useState } from "react";
import { DeleteBook, EditBook, ShowBook } from "../..";
import { bookDataArrType, columnsData } from "../Types";
import {
  BsInfoSquareFill,
  CgUnavailable,
  FaEdit,
  GoCrossReference,
  MdDelete,
} from "../Constants";
import moment from "moment";

const Table = ({ Tdata }: { Tdata: bookDataArrType[] }) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [showInfoForm, setShowInfoForm] = useState(false);
  const [editId, setEditId] = useState<string>("");

  const handleClicks = (id: string, action: string) => {
    setEditId(id);
    if (action === "Edit") {
      setShowEditForm(true);
    } else if (action === "Delete") {
      setShowDeleteForm(true);
    } else if (action === "Info") {
      setShowInfoForm(true);
    }
  };

  const column: ColumnDef<columnsData>[] = [
    {
      header: "No.",
      cell: (item) => {
        const rowIndex = item.cell.row.index;
        const count = rowIndex + 1;
        return <span>{count}</span>;
      },
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
      header: "Reference Link",
      footer: "Reference Link",
      cell: (item) => {
        const referenceLink = item.row.original.referenceLink;

        const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
        // if (!urlPattern.test(referenceLink)) {
        //   toast.error("Please enter a valid URL for the reference link!");
        //   return;
        // }
        return (
          <div>
            {
              !urlPattern.test(referenceLink) ? (
                <CgUnavailable className="text-red-600 text-2xl cursor-not-allowed" title={"this book has not available the reference Link!"}/>
              ) : (
                <a href={referenceLink} target="_blank" rel="noopener noreferrer" title={referenceLink}>
                <GoCrossReference className="text-blue-400 text-xl text-center" />
              </a>
              )
            }
          </div>
        );
      },
    },
    {
      header: "Created At",
      accessorKey: "createdAt",
      footer: "Created At",
      cell: (item) => {
        const createdAt = item.row.original.createdAt;
        const formattedDate = moment(createdAt).format("MMM D, YYYY");
        const formattedTime = moment(createdAt).format("h:mm A");
        return (
          <span className="flex flex-col">
            <span style={{ fontWeight: "bold" }}>Date : {formattedDate}</span>{" "}
            <span style={{ fontStyle: "italic" }}>TIme : {formattedTime}</span>
          </span>
        );
      },
    },
    {
      header: "Options",
      footer: "Options",
      cell: (item) => {
        const uId: string = item.row.original._id;
        return (
          <div className="flex gap-5 text-2xl">
            <button onClick={() => handleClicks(uId, "Info")}>
              <BsInfoSquareFill className="text-blue-600 hover:scale-110 transition-all duration-100" />
            </button>
            <button onClick={() => handleClicks(uId, "Edit")}>
              <FaEdit className="text-yellow-400 hover:scale-110 transition-all duration-100" />
            </button>
            <button onClick={() => handleClicks(uId, "Delete")}>
              <MdDelete className="text-red-600 hover:scale-110 transition-all duration-100" />
            </button>
          </div>
        );
      },
    },
  ];

  const table = useReactTable<columnsData>({
    data: Tdata.reverse(),
    columns: column,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="overflow-x-auto w-[85vw] h-[80vh] flex flex-col relative">
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
                    className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900 text-center"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination table={table} />
      {showEditForm && (
        <div className="fixed m-auto w-[85vw] h-full z-10 flex justify-center items-center backdrop-blur-[2px]">
          <EditBook setShowEditForm={setShowEditForm} editId={editId} />
        </div>
      )}
      {showDeleteForm && (
        <div className="fixed m-auto w-[85vw] h-full z-10 flex justify-center items-center backdrop-blur-[2px]">
          <DeleteBook setShowDeleteForm={setShowDeleteForm} editId={editId} />
        </div>
      )}
      {showInfoForm && (
        <div className="fixed m-auto w-[85vw] h-full z-10 flex justify-center items-center backdrop-blur-[2px]">
          <ShowBook setShowInfoForm={setShowInfoForm} editId={editId} />
        </div>
      )}
    </div>
  );
};

export default Table;
