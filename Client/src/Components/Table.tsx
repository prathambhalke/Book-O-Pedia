import {
  ColumnDef,
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import Pagination from "./Pagination";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { BsInfoSquareFill } from "react-icons/bs";
import { GoCrossReference } from "react-icons/go";
import { useState } from "react";
import { DeleteBook, EditBook, ShowBook } from "../..";

type bookDataArrType = {
  count: number;
  data: {
    _id: string;
    title: string;
    author: string;
    publish: string;
  }[];
};


const Table = ({ Tdata}: any) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [showInfoForm, setShowInfoForm] = useState(false);

  const [editId, setEditId] = useState<any>("");

  const handleClicks = (id: string, action: string) => {
    setEditId(id);
    if(action === "Edit"){
      setShowEditForm(true);
    }else if(action === "Delete"){
      setShowDeleteForm(true)
    }else if(action === "Info") {
      setShowInfoForm(true)
    }
  };
  const column: ColumnDef<bookDataArrType, any>[] = [
    {
      header: "Id",
      accessorKey: "_id",
      footer: "Id"
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
      cell: () => {
        return <GoCrossReference className="text-blue-400 text-xl text-center" />
      }
    },
    {
      header: "Options",
      footer: "Options",
      cell: (item) => {
        let uId : any = item.cell.row._valuesCache._id;
        return (
          <div className="flex gap-5 text-2xl">
            <button onClick={()=> handleClicks (uId , "Info")}>
              <BsInfoSquareFill className="text-blue-600 hover:scale-110 transition-all duration-100" />
            </button>
            <button onClick={() => handleClicks(uId, "Edit")}
            >
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

  const table = useReactTable<bookDataArrType>({
    data: Tdata.reverse(),
    columns: column,
    // onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  return (
    <div className="overflow-x-auto w-[85vw] flex flex-col relative">
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
          <ShowBook setShowInfoForm={setShowInfoForm} editId={editId}/>
        </div>
      )}
    </div>
  );
};

export default Table;
