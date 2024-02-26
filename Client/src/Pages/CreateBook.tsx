import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publish, setPublish] = useState("");

  const data = { title, author, publish };

  const handleSubmit = (e : any) => {
    if(title === "" || author === "" || title === "") toast("fill the all fields")
    e.preventDefault();
    axios
      .post("https://book-o-pedia.vercel.app/books", data)
      .then().catch((err) => console.log(err));
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-md rounded-md overflow-hidden absolute w-screen z-10 top-24 left-[30%]">
      <p className="text-2xl">Create New Book</p>
      <form onSubmit={handleSubmit} className="px-6 py-4">
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
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBook;
