import { useEffect, useState } from "react";

function Backend() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch('src\data.js') // her3e is to add the js object file
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData.products);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <tbody>
        <tr>
          <th>Name</th>
          <th>mail</th>
          
          <th>phone</th>
          <th>depts</th>
        </tr>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            
            <td>{item.phone}</td>
            <td>{item.depts}</td>
          </tr>
        ))}
      </tbody>
    </div>
  );
}

export default Backend;