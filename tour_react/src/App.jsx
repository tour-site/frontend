import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    axios.get("/api/hello")
      .then(res => setMsg(res.data))
      .catch(err => console.error(err));
  }, []);
  useEffect(() => {
    axios.get("/api/bye")
      .then(res => setMsg(res.data))
      .catch(err => console.error(err));
  }, []);

  return <h1>{msg}</h1>;
}

export default App;
