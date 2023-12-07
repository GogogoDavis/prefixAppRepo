import React, { useState, useContext } from 'react';
import { itemContext } from '../App';
import { useNavigate } from 'react-router-dom';
import './NewAdmin.css';

export const AddAdminForm = () => {
  const navigate = useNavigate();
  const [newAdmin, setNewAdmin] = useState({
    FirstName: '',
    LastName: '',
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setNewAdmin({
      ...newAdmin,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateAdmin = () => {
    fetch('http://localhost:8080/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newAdmin),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Admin created successfully:', data);
        navigate('/');
        window.location.reload();

      })
      .catch((error) => {
        console.error('Error creating admin:', error);
      });
  };

  const goHome = () => {
    navigate('/');
  }

  return (
    <div>
        <div>
          <h2>Add Admin</h2>
          <form>
            <label htmlFor="FirstName">First Name:</label>
            <input
              type="text"
              id="FirstName"
              name="FirstName"
              value={newAdmin.FirstName}
              onChange={handleInputChange}
              required
            />
            <br />

            <label htmlFor="LastName">Last Name:</label>
            <input
              type="text"
              id="LastName"
              name="LastName"
              value={newAdmin.LastName}
              onChange={handleInputChange}
              required
            />
            <br />

            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={newAdmin.username}
              onChange={handleInputChange}
              required
            />
            <br />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={newAdmin.password}
              onChange={handleInputChange}
              required
            />
            <br />

            <button type="button" onClick={handleCreateAdmin} id='adminBtn'>
              Add Admin
            </button>
            <button onClick={goHome} id='homeBtn'>Return</button>
          </form>
        </div>
    </div>
  );
};


