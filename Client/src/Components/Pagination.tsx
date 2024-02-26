import { FaAngleDoubleLeft, FaAngleLeft, FaAngleRight, FaAngleDoubleRight } from '../Constants';

const Pagination  = ({table} : any) => {
    return (
        <div className="flex items-center justify-center w-full gap-2 text-black text-md sticky bottom-0 z-10 bg-slate-400 backdrop-blur-sm">
            <button
                className="border rounded p-1 disabled:opacity-50 disabled:pointer-events-none hover:bg-purple-400 hover:text-white transition-colors"
                onClick={() => table.setPageIndex(0)}
                disabled={!table.getCanPreviousPage()}
            >
                <FaAngleDoubleLeft />
            </button>
            <button
                className="border rounded p-1 disabled:opacity-50 disabled:pointer-events-none hover:bg-purple-400 hover:text-white transition-colors"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
            >
                <FaAngleLeft />
            </button>
            <button
                className="border rounded p-1 disabled:opacity-50 disabled:pointer-events-none hover:bg-purple-400 hover:text-white transition-colors"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
            >
                <FaAngleRight />
            </button>
            <button
                className="border rounded p-1 disabled:opacity-50 disabled:pointer-events-none hover:bg-purple-400 hover:text-white transition-colors"
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                disabled={!table.getCanNextPage()}
            >
                <FaAngleDoubleRight />
            </button>
            <span className="flex items-center gap-1">
                <div>Page</div>
                <strong>
                    {table.getState().pagination.pageIndex + 1} of{' '}
                    {table.getPageCount()}
                </strong>
            </span>
            <select
                value={table.getState().pagination.pageSize}
                onChange ={(e) => {
                    table.setPageSize(Number(e.target.value));
                }}
                className="border rounded my-1 p-1 text-black transition-colors"
            >
                {[10, 20, 30, 40, 50].map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                        {pageSize}
                    </option>
                ))}
            </select>
        </div>
    )
}


export default Pagination