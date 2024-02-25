import axios from "axios";
import { useEffect, useState } from "react";
import Table from "../Components/Table";
import { BiSolidBookAdd } from "react-icons/bi";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const [bookCount,setbookCount] = useState(0)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://book-o-pedia.vercel.app/books")
      .then((res) => {
        setData(res.data.data);
        setbookCount(res.data.count)
        setLoading(false);
      })
      .catch((err: any) => {
        setLoading(false);
        console.log(err);
      });
  }, []);
  return (
    <div className="flex flex-col p-12">
      <div className="flex gap-10">
      <h1 className="text-2xl font-bold">Books Store</h1> <Link to={"/books/create"}><BiSolidBookAdd className="text-green-600 text-xl"/></Link> 

      <span>{bookCount} Books</span>
      </div>
      <Table Tdata = {data} loader ={loading}/>
    </div>
  );
};

export default Home;
