import axios from "axios";
import { useEffect, useState } from "react";
import { IoArrowBackCircle } from "react-icons/io5";

const ShowBook = ({ setShowInfoForm, editId }: any) => {
  const [book, setBook] = useState<any>({});

  useEffect(() => {
    axios
      .get(`https://book-o-pedia.vercel.app/books/${editId}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const goBack = () => setShowInfoForm(false);

  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-md rounded-md overflow-hidden absolute w-screen z-10 border border-purple-400">
      <button onClick={goBack} className="absolute top-4 left-4">
        <IoArrowBackCircle className="text-red-400 text-4xl cursor-pointer hover:scale-125 transition-all duration-100" />
      </button>
      <div className="text-center mb-6">
        <p className="text-3xl font-bold text-blue-600">Book Details</p>
        <p className="text-lg">Book ID: <span className="font-bold">{editId}</span></p>
      </div>
      <div className="px-6 py-4">
        <div className="flex items-center mb-4">
          <div className="w-1/3">
            <label className="block text-gray-700 text-lg font-bold">Title:</label>
          </div>
          <div className="w-2/3">
            <p className="text-lg font-bold text-gray-900">{book.title}</p>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <div className="w-1/3">
            <label className="block text-gray-700 text-lg font-bold">Author:</label>
          </div>
          <div className="w-2/3">
            <p className="text-lg font-bold text-gray-900">{book.author}</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-1/3">
            <label className="block text-gray-700 text-lg font-bold">Publish:</label>
          </div>
          <div className="w-2/3">
            <p className="text-lg font-bold text-gray-900">{book.publish}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowBook;
