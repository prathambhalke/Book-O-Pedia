import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DeleteBook = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const deleteBook = (e : any) => {
    e.preventDefault();
    axios
      .delete(`https://book-o-pedia.vercel.app/books/${id}`)
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };


     return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden p-4">
          <p className="text-2xl">Delete Book</p>
          
          <p className="text-lg font-bold">Book : <span>{id}</span></p> 
      <div className="px-6 py-4">
        <p className="text-gray-700 text-lg mb-4">Are you sure you want to delete the Book?</p>
        <div className="flex justify-end">
          <button onClick={deleteBook} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">Delete</button>
          <button onClick={() => navigate("/")} className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteBook