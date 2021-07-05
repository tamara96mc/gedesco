import React, { useState, useEffect }  from 'react';
import './App.css';
import db from "./db.json"
import schema from './schema';
import Table from './Table';
import axios from 'axios';

function App() {
  const [ data, setData] = useState({});

  useEffect(() => {
    const obtenerRecetas = async () => {
      const url = `https://jsonplaceholder.typicode.com/users`;
  
      const resultado = await axios.get(url);
      
      console.log(resultado.data);
     
      setData(resultado.data);
  }
  
  obtenerRecetas();
  }, []);




  return (
    <div className="container p-2">
      <div className="row">
        <div className="col">
          <Table headers={Object.keys(schema)} rows={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
