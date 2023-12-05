import { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import React from 'react'; 


export const AddItem = () => {
  const [newItem, setNewItem] = useState({
    userId: '',
    ItemName: '',
    description: '',
    quantity: 0,
  });

  const handleInputChange = (e) => {
    setNewItem({
      ...newItem,
      [e.target.name]: e.target.value,
    });
  };

  const addItem = () => {
    fetch('http://localhost:8080/', {
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

  return (
    <div>
      <h2>Add New Item</h2>
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
    </div>
  );
};







//     const [add, setAdd] = useState(false); 
//     const[itemData, setItemData] = useState();
//     const [newItem, setNewItem] = useState(' '); 

//     useEffect(() => {
//         getItemData()
//       }, [])
    
//       const getItemData = () => {
//         fetch('http://localhost:8080/')
//         .then(res => res.json())
//         .then(data => data.sort((a, b) => a.id - b.id))
//         .then(sortedData => setItemData(sortedData))
//       }
    
//     const handleNewItem = (e) => {
//         e.preventDefault();
//         const { queryParams } = `?newItem=${newItem}`
//         fetch(`http://localhost:8080/${queryParams}`, {
//             method: 'POST', 
//             headers: { 'Content-type': 'application/json'}
//         })
//     }
//     const handleItemInput = (e) => {
//         setNewItem(e.target.value)
//        }
//     return ( 
//         <>
//         <form id='addForm' onSubmit={handleNewItem}>
//             <label>
//                 <input type="text" value={newItem} onChange={handleItemInput}></input>
//                 <button type='submit'>Add Item</button>
//             </label>
//         </form>
//         <>
//         {useEffect(() => {
//         console.log(itemData);
//     }, [itemData])}
//     </>
//         </>
//     )


