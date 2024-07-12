import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

interface ResType {
  id: string;
  name: string;
  country: string;
  lang: string;
}

function App() {
  const [peopleData, setPeopleData] = useState<ResType[]>([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("/people");
      console.log(res.data);
      if (res.status === 200) {
        setPeopleData(res.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='App'>
      {peopleData.length > 0 ? (
        peopleData.map((item: ResType) => (
          <div key={item.id}>
            <p>이름: {item.name}</p>
            <p>나라: {item.country}</p>
            <p>언어: {item.lang}</p>
          </div>
        ))
      ) : (
        <p>...로딩 중</p>
      )}
    </div>
  );
}

export default App;
