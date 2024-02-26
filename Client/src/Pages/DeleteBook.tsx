import axios from "axios";
import { IoArrowBackCircle } from "react-icons/io5";
import { toast } from "react-toastify";

const DeleteBook = ({ setShowDeleteForm, editId }: any) => {

  const deleteBook = (e: any) => {
    e.preventDefault();
    axios
      .delete(`https://book-o-pedia.vercel.app/books/${editId}`)
      .then(() => {
        toast.warn("Book Deleted successfully!");
        setTimeout(() => {
          location.reload()
        }, 1000)
      }
      )
      .catch((err) => {
        toast.warn("Failed to Deleted Book!");

        console.log(err)
      });
    setShowDeleteForm(false)
  };
  const goBack = () => setShowDeleteForm(false)


  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-md rounded-md overflow-hidden absolute w-screen z-10 border border-purple-400">
      <button onClick={goBack} className="absolute top-4 left-4">
        <IoArrowBackCircle className="text-red-400 text-4xl cursor-pointer hover:scale-125 transition-all duration-100" />
      </button>
      <div className="text-center mb-6">
        <p className="text-3xl font-bold text-red-600">Delete Book</p>
        <p className="text-lg">Book ID: <span className="font-bold">{editId}</span></p>
      </div>
      <p className="text-gray-700 text-lg mb-4 text-center">Are you sure you want to delete this book?</p>
      <div className="flex justify-center">
        <button onClick={deleteBook} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded mr-2 transition-colors duration-300 hover:scale-110 transition-all duration-100">
          Delete
        </button>
      </div>
    </div>
  );

}

export default DeleteBook