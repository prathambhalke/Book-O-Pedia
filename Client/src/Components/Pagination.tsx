import { FaAngleDoubleLeft, FaAngleLeft, FaAngleRight, FaAngleDoubleRight } from 'react-icons/fa';

const Pagination  = ({table} : any) => {
    return (
        <div className="flex items-center justify-center gap-2 text-purple-700 text-lg">
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
                onChange={(e) => {
                    table.setPageSize(Number(e.target.value));
                }}
                className="border rounded p-1 text-purple-700 hover:bg-purple-400 hover:text-white transition-colors"
            >
                {[10, 20, 30, 40, 50].map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                        Show {pageSize}
                    </option>
                ))}
            </select>
        </div>
    )
}


export default Pagination