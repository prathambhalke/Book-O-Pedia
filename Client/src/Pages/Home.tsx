import axios from "axios";
import { useEffect, useState } from "react";
import Table from "../Components/Table";
import { BiSolidBookAdd } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Loader } from "../..";

const Home = () => {
  const [data, setData] = useState([]);
  const [bookCount, setbookCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://book-o-pedia.vercel.app/books")
      .then((res) => {
        setData(res.data.data);
        setbookCount(res.data.count);
        setLoading(false);
      })
      .catch((err: any) => {
        setLoading(false);
        console.log(err);
      });
  }, []);
  return (
    <div className="w-[85vw] flex flex-col relative">
      <div className="flex justify-between items-center gap-4 py-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold">Books Store</h1>
        <div className="flex items-center gap-4 relative">
          <Link
            to="/books/create"
            className="flex items-center text-green-600 relative hover:scale-110 transition-all duration-100'"
          >
            <BiSolidBookAdd className="text-3xl relative" />
            <span className="absolute top-1 right-1 transform translate-x-1/2 -translate-y-1/2 bg-white rounded-full text-[12px] font-medium w-4 h-4 flex items-center justify-center border border-gray-200">
              {bookCount}
            </span>
          </Link>
        </div>
      </div>
      {loading ? <Loader /> : <Table Tdata={data} />}
    </div>
  );;
};

export default Home;
