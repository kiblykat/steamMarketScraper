import { useState } from "react";
import steamApi from "../api/api";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await steamApi.get("/api/data");
      console.log(response.data);
      setData(response.data);
    };
    fetchData();
  });
  return (
    <>
      <p>{`${data}`}</p>
    </>
  );
}

export default App;
