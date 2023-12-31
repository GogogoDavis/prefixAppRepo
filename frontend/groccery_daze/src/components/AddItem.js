import { useState, useEffect, useContext } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import React from 'react'; 
import './AddItem.css';
import { itemContext } from '../App.js';


export const AddItem = () => {
  const [newItem, setNewItem] = useState({
    userId: '',
    ItemName: '',
    description: '',
    quantity: 0,
  });
  // const [ItemArray, setItemArray] = useState([]);
  const [AddWindow, setAddWindow] = useState(false);
  const {isAdmin, setIsAdmin} = useContext(itemContext);

  const handleInputChange = (e) => {
    setNewItem({
      ...newItem,
      [e.target.name]: e.target.value,
    });
  };

  const addItem = () => {
    fetch('http://localhost:8080/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  };
  const openWindow = () => {
    setAddWindow(true);
  };

  const closeWindow = () => {
    setAddWindow(false);
  };

  return (
    <>
    {isAdmin ? (
    <div id='addItemId'>
      <button onClick={openWindow} id='newBtn'>New Entry</button>
      {AddWindow ?  (
          <div className="popup">
        <button className="close-btn" onClick={closeWindow}>Return</button>
        <form id='newFillForm'>
        <label htmlFor="userId">User ID:</label>
        <input
          type="text"
          id="userId"
          name="userId"
          value={newItem.userId}
          onChange={handleInputChange}
          required
        /><br />

        <label htmlFor="ItemName">Item Name:</label>
        <input
          type="text"
          id="ItemName"
          name="ItemName"
          value={newItem.ItemName}
          onChange={handleInputChange}
          required
        /><br />

        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={newItem.description}
          onChange={handleInputChange}
          required
        /><br />

        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={newItem.quantity}
          onChange={handleInputChange}
          required
        /><br />

        <button id='addBtn' type="button" onClick={addItem}>
          Add Item
        </button>
      </form>
    </div>
      ): null}
    </div>
    ): null}
    </>
  )}; 
