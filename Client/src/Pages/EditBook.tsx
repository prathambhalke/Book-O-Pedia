import axios from "axios";
import { useEffect, useState } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { toast } from "react-toastify";

const EditBook = ({ setShowEditForm, editId, setData }: any) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publish, setPublish] = useState("");
  const data = { title, author, publish };

  const handleEdit = (e: any) => {
    e.preventDefault();
    axios
      .put(`https://book-o-pedia.vercel.app/books/${editId}`, data)
      .then(() => {
        toast.success("Book Updated Successfully!");
        setTimeout(() => {
          location.reload()
        }, 2000)
      })
      .catch((err) => {
        toast.error("Failed to Update book!");
        console.log(err)
      }
      );
    setShowEditForm(false)
  };

  useEffect(() => {
    axios
      .get(`https://book-o-pedia.vercel.app/books/${editId}`)
      .then((res) => {
        console.log(res.data)
        setAuthor(res.data.author)
        setPublish(res.data.publish)
        setTitle(res.data.title)

      })
      .catch((err) => console.log(err));
  }, [])
  const goBack = () => setShowEditForm(false)

  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-md rounded-md overflow-hidden absolute w-screen z-10 border border-purple-400">
      <button onClick={goBack}><IoArrowBackCircle className="text-red-400 text-4xl text-center mb-4 cursor-pointer hover:scale-125 transition-all duration-100" /></button>
      <p className="text-2xl">Edit Book</p>
      <form onSubmit={handleEdit} className="px-6 py-4">
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
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:scale-110 transition-all duration-100"
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBook;
