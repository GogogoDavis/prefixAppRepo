
import React, { useState, useEffect, createContext } from 'react';
import { AddItem } from './components/AddItem';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { EditItem } from './components/EditItem.js';
import { Delete } from './components/Delete.js';
// import { Detail } from './components/itemDetail.js';

export const itemContext = createContext();

const App = () => {
  const [LeadArray, setLeadArray] = useState([]);
  const [usersData, setUsersData] = useState([]);
  const [adminUsername, setAdminUsername] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false); 

  const value = {isAdmin, setIsAdmin} 

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8080/items`)
    .then((res) => res.json())
    .then((data) => {
      const sortData = data.sort((a, b) => a.id - b.id);
      setLeadArray(sortData)
    });
}, []);
    
  useEffect(() => {
    fetch('http://localhost:8080/users')
    .then(res => res.json())
    .then(data => {setUsersData(data); console.log(data)});
  }, [])

const handleAdminUsername = (e) => {
    setAdminUsername(e.target.value);
}


const handleAdminPassword = (e) => { 
  setAdminPassword(e.target.value);
}

const handleLogin = () => {
  const isAdmin = usersData.some //this .some() method is a godsend 
    (user => user.username === adminUsername && user.password === adminPassword);
  const message = isAdmin ? 'Logged in successfully!' : 'incorrect username or password'
  setIsAdmin(isAdmin);

}

const handleLogout = () => {
  setIsAdmin(false);
  window.location.reload();
}

const handleEditDelete = () => {
  //plz work
  navigate('/', { replace: true });
  // window.location.reload();
  //^ stretch goal try and find a way to not use .reload(). Only do if time permits 
};


  return (
    <>
    <itemContext.Provider value={value}>
    <h1>
      <label>Admin Login:</label>
      </h1>
      <div>
        <label>username</label>
      <input 
      type='text' id='username' onChange={handleAdminUsername}
      />
      </div>
      <div>
        <label>password</label>
        <input 
        type='text' id='password' onChange={handleAdminPassword}
        />
      </div>
      <button onClick={handleLogin}>Log In</button>
      {isAdmin ? ( 
        <div>
        <button onClick={handleLogout}>Log Out</button>
      <ul>
  {LeadArray.map((item) => (
        <div key={item.id}>
          <li>
            <h1>{item.ItemName}</h1>
            <p>Description: {item.description}</p>
            <p>userId: {item.userId}</p>
            <p>Quantity: {item.quantity}</p>
            <Link to={`/edit/${item.id}`}>
              <button>Edit Items</button>
            </Link>
            <Link to={`/delete/${item.id}`}>
              <button onClick={handleEditDelete}>Delete</button>
            </Link>
          </li>
        </div>
      ))}
      </ul>
    </div>  
        ): 
        <div>
          <ul>
  {LeadArray.map((item) => (
        <div key={item.id}>
          <li>
            <h1>{item.ItemName}</h1>
            <p>Description: {item.description}</p>
            <p>userId: {item.userId}</p>
            <p>Quantity: {item.quantity}</p>
          </li>
        </div>
      ))}
      </ul>
        </div>
        }
    <Routes>
      <Route path='/' element={<AddItem />}/>
      <Route path='/edit/:id' element={<EditItem />}/>
      <Route path='/delete/:id' element={<Delete />}/>
    </Routes>
    </itemContext.Provider>
    </>
  )
}
export default App;


