
import React, { useState, useEffect } from 'react';
import { AddItem } from './components/AddItem';
import { Route, Routes, Link } from 'react-router-dom';
import { EditItem } from './EditItem.js';



const App = () => {
  const [LeadArray, setLeadArray] = useState([]);

  useEffect = (() => {
    fetch(`http://localhost:8080`)
    .then((res) => res.json())
    .then((data) => setLeadArray(data));
});

  return (
    <>
    <ol>
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
            </li>
          </div>
        ))}
        </ol>
    <Routes>
      <Route path='/' element={<AddItem />}/>
      <Route path='/edit/:id' element={<EditItem />}/>
    </Routes>
    </>
  )
}
export default App;


