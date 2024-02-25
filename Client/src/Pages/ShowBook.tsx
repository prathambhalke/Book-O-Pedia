import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowBook = () => {
  const [book, setBook] = useState<any>({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://book-o-pedia.vercel.app/books/${id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-md flex items-center h-screen">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2"><strong>Title:</strong> {book.title}</div>
        <p className="text-sm text-gray-700"><strong>Id:</strong> {book._id}</p>
        <p className="text-sm text-gray-700"><strong>Author:</strong> {book.author}</p>
        <p className="text-sm text-gray-700"><strong>Publish:</strong> {book.publish}</p>
      </div>
    </div>
  )
};

export default ShowBook;
