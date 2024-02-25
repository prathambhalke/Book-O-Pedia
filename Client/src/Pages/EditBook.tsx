import axios from "axios";
import { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publish, setPublish] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const data = { title, author, publish };

  const handleEdit = (e : any) => {
    e.preventDefault();
    axios
      .put(`https://book-o-pedia.vercel.app/books/${id}`,data)
      .then(() => {
        navigate("/");
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(()=> {
    axios
    .get(`https://book-o-pedia.vercel.app/books/${id}`)
    .then((res) => {
      console.log(res.data)
    setAuthor(res.data.author)
    setPublish(res.data.publish)
    setTitle(res.data.title)

    })
    .catch((err) => console.log(err));
  },[])

  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-md rounded-md overflow-hidden">
      <p className="text-2xl">Edit Book</p>
      <form className="px-6 py-4">
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Title:
          </label>
          <input
            type="text"
            id="title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="author"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Author:
          </label>
          <input
            type="text"
            id="author"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="publish"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Publish:
          </label>
          <input
            type="text"
            id="publish"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter publisher"
            value={publish}
            onChange={(e) => setPublish(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-between items-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleEdit}
          >
            Edit
          </button>
          <button
            onClick={() => navigate("/")}
            className="flex items-center bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            <FiArrowLeft className="mr-2" />
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBook;
