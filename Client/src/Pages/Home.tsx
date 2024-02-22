import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:2000/books").then(res => {
      setData(res.data);
      setLoading(false);
    }).catch((err : any) => {
        setLoading(false);
        console.log(err)
    })
  }, []);

  console.log(data)
  return <div>Home</div>;
};

export default Home;
