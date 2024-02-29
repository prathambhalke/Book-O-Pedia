export type bookData = {
    _id: string;
    title: string;
    author: string;
    publish: string;
    createdAt : string;
    referenceLink : string;
    _v: number;
  };
  
  export type columnsData = {
    _id: string;
    header: string;
    accessorKey: string;
    footer: string;
    createdAt : string;
    referenceLink : string;
    cell?: (item: any) => JSX.Element;
  };  
  
  export type bookDataArrType = {
    count: number;
    data: bookData[];
  };
  