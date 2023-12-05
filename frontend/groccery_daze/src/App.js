// Parent component (e.g., App.js)
import React, { useState, useEffect } from 'react';
import { AddItem } from './components/AddItem';
import { Route, Routes } from 'react-router-dom';



const App = () => {

  // const [ItemArray, setItemArray] = useState([]);
  // const [AddWindow, setAddWindow] = useState(false);

  // const fetchData = () => {
  //   fetch( `http://localhost:8080`)
  //   .then(res => res.json())
  //   .then(data => {setItemArray(data); 
  //     console.log(data);
  //   });
  // }

  // useEffect(() => {
  // fetchData()
  // }, []);

  // //returns all data, map through this and add the addWindow
 

  // const openWindow = () => {
  //   setAddWindow(true);
  // };

  // const closeWindow = () => {
  //   setAddWindow(false);
  //   fetchData();
  // };

  return (
    <Routes>
      <Route path='/verified' element={<AddItem />}/>
    </Routes>
  )
//     <>
//     <div>
//       <h1>Inventory Manager</h1>
//       <form>
//         <ol>
//           {ItemArray.map(item => {
//             return <div key={item.id}>
//               <li>{item.ItemName}</li>
//             </div>
//           })}
//         </ol>
//       </form>
//       <button onClick={openWindow}>New Entry</button>
//       {AddWindow ?  (
//         <div className="popup-overlay">
//           <div className="popup">
//             <button className="close-btn" onClick={closeWindow}>Return</button>
//             <AddItem closeWindow={closeWindow} />
//           </div>
//         </div>
//       ): null }
//     </div>
//   </>
//   );
// };


  }
export default App;


