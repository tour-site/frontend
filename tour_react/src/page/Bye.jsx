import { useEffect, useState } from "react";
import axios from "axios";

const Bye = () => {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    axios.get("/api/bye")
      .then(res => setMsg(res.data))
      .catch(err => console.error(err));
  }, []);

  return <h1>{msg}</h1>;
};

export default Bye;
