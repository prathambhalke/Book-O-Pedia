import axios from "axios";
import { useEffect, useState } from "react";
import Table from "../Components/Table";
import { BiSolidBookAdd } from "../Constants";
import { CreateBook, Loader } from "../..";

const Home = () => {
  const [data, setData] = useState([]);
  const [bookCount, setbookCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showCreateForm, setShowCreateForm] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://book-o-pedia.vercel.app/books")
      .then((res) => {
        setData(res.data.data);
        setbookCount(res.data.count);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  const toggleCreateForm = () => {
    setShowCreateForm(!showCreateForm);
  };

  return (
    <div className={`w-[85vw] flex flex-col relative`}>
      <div className="flex justify-between items-center gap-4 py-6 border-b border-gray-200">
        <div className="text-2xl font-bold flex items-center">
          <img src="https://img.icons8.com/color/48/book.png" alt="book logo" />
          Book-O-Pedia
        </div>
        <div className="flex items-center gap-4 relative">
          <button
            onClick={toggleCreateForm}
            className="flex items-center text-green-600 relative hover:scale-110 transition-all duration-100"
          >
            <BiSolidBookAdd className="text-4xl relative" />
            <span className="absolute top-1 right-1 transform translate-x-1/2 -translate-y-1/2 bg-white rounded-full text-[15px] font-medium w-5 h-5 flex items-center justify-center border border-gray-200">
              {bookCount}
            </span>
          </button>
        </div>
      </div>
      {loading ? <Loader /> : <Table Tdata={data} />}
      {showCreateForm && (
        <div className="fixed m-auto w-[85vw] h-full z-10 flex justify-center items-center backdrop-blur-[2px]">
          <CreateBook setShowCreateForm={setShowCreateForm} setData={setData} />
        </div>
      )}
    </div>
  );
};

export default Home;
5