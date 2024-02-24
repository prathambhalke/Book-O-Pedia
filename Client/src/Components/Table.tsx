import { ColumnDef, useReactTable, flexRender, getCoreRowModel } from "@tanstack/react-table";

type bookDataArrType = {
  count : number,
 data : { _id: string,
  title: string,
  author: string,
  publish: string
}[]
};

const bookData: bookDataArrType[] = [
  {
    count : 9,
  data :[ {
    _id: "65cda450fdd8de233043a4a4",
    title: "Love JS",
    author: "aman simpson",
    publish: "Pratham Publications",
  },
  {
    _id: "65cda50c74324cb95220e1d4",
    title: "sharu",
    author: "aman simpson",
    publish: "Pratham Publications",
  }]}
];

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
];

const Table = () => {
  const table = useReactTable<bookDataArrType>({ data: bookData, columns: column, getCoreRowModel : getCoreRowModel() });
  return (
    <div>
      <table>
        {table.getHeaderGroups().map((headergroup) => (
          <tr key={headergroup.id}>
            {headergroup.headers.map((header) => (
              <th key={header.id}>
                {flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Table;
