export type bookData = {
    _id: string;
    title: string;
    author: string;
    publish: string;
    _v: number;
  };
  
  export type columnsData = {
    header: string;
    accessorKey: string;
    footer: string;
    createdAt : string;
    cell?: (item: any) => JSX.Element;
  };  
  
  export type bookDataArrType = {
    count: number;
    data: bookData[];
  };
  