import { useEffect, useState } from "react";

const useGetData = (path) => {
  if (!path) return;
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch(path)
      .then((res) => res.json())
      .then((d) => setData([...d]))
      .catch((err) => console.error("Fetch error: ", err));
  }, [path]);

  return data;
};

export default useGetData;
