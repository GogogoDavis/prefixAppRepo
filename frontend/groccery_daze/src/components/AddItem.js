import { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import React from 'react'; 
import './AddItem.css';


export const AddItem = () => {
  const [newItem, setNewItem] = useState({
    userId: '',
    ItemName: '',
    description: '',
    quantity: 0,
  });
  const [ItemArray, setItemArray] = useState([]);
  const [AddWindow, setAddWindow] = useState(false);

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
        // You can handle the success response here (e.g., show a success message).
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle the error (e.g., show an error message to the user).
      });

  };

  const fetchData = () => {
  fetch( `http://localhost:8080/items`)
    .then(res => res.json())
    .then(data => {
        const sortedData = data.sort((a, b) => a.id - b.id); 
        setItemArray(sortedData);
    }) 
}; 

useEffect(() => {
    console.log(ItemArray);
}, [ItemArray]);

  useEffect(() => {
  fetchData()
  }, []);

  //returns all data, map through this and add the addWindow
 

  const openWindow = () => {
    setAddWindow(true);
  };

  const closeWindow = () => {
    setAddWindow(false);
    fetchData();
  };

  return (
    <div id='addItemId'>
      <form>
      </form>
      <button onClick={openWindow}>New Entry</button>
      {AddWindow ?  (
          <div className="popup">
        <button className="close-btn" onClick={closeWindow}>Return</button>
        <form>
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

        <button type="button" onClick={addItem}>
          Add Item
        </button>
      </form>
      <div>
       <h1>Inventory Manager</h1>
       <form>
            </form>
          </div>
    </div>
      ): null}
    </div>
  )}; 
