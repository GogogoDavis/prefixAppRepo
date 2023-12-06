
import React, { useState, useEffect } from 'react';
import { AddItem } from './components/AddItem';
import { Route, Routes, Link } from 'react-router-dom';
import { EditItem } from './components/EditItem.js';
import { Delete } from './components/Delete.js';
// import { Detail } from './components/itemDetail.js';



const App = () => {
  const [LeadArray, setLeadArray] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080`)
    .then((res) => res.json())
    .then((data) => {
      const sortData = data.sort((a, b) => a.id - b.id);
      setLeadArray(sortData)
    });
}, []);


  return (
    <>
    <h1></h1>
    <ul>
    {LeadArray.map((item) => (
          <div key={item.id}>
            <li>
              <h1>{item.ItemName}</h1>
              <p>Description: {item.description}</p>
              <p>userId: {item.userId}</p>
              <p>Quantity: {item.quantity}</p>
              <Link to={`/edit/${item.id}`}>
                <button>Edit Item</button>
              </Link>
              <Link to={`/delete/${item.id}`}>
                <button>Delete</button>
              </Link>
            </li>
          </div>
        ))}
        </ul>
    <Routes>
      <Route path='/' element={<AddItem />}/>
      <Route path='/edit/:id' element={<EditItem />}/>
      <Route path='/delete/:id' element={<Delete />}/>
      {/* <Route path='/item/:id' element={<Detail />}/> */}
    </Routes>
    </>
  )
}
export default App;


