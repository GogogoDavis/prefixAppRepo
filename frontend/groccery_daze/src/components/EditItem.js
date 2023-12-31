import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './EditItem.css';
export const EditItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [toggleEdit, setToggleEdit] = useState(true);
  const [item, setItem] = useState({
    userId: '',
    ItemName: '',
    description: '',
    quantity: 0,
});

  useEffect(() => {
    fetch(`http://localhost:8080/item/${id}`)
      .then((response) => response.json())
      .then((data) =>  setItem(data))
      .catch((error) => console.error('Error fetching item:', error));
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8080/edit/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    })
      .then((response) => response.json())
      .then((updatedItem) => {
        console.log('Item updated successfully:', updatedItem);
        navigate(`/`);
      })
      .catch((error) => console.error('Error updating item:', error));

      // window.location.reload();
      //it's times like these that make me wish I'd spent more time on kanban 
  }
  return (
    <div>
      <h2>Edit Item</h2>
      <form onSubmit={handleSubmit}>
        <label>
          User ID:
          <input
            id='userId'
            type="text"
            name="userId"
            value={item.userId}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Item Name:
          <input
            id='ItemName'
            type="text"
            name="ItemName"
            value={item.ItemName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            id='description'
            name="description"
            value={item.description}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Quantity:
          <input
            id='quantity'
            type="number"
            name="quantity"
            value={item.quantity}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit" id='updateBtn'>Update Item</button>
        <Link to={`/`}>
          <button id='nvmBtn'>Never Mind</button>
        </Link>
        </form>
    </div>
  );
};

export default EditItem;
