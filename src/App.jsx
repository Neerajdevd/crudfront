import { useState } from 'react'

function App() {
  
  const [createddata, setData] = useState(null);
  
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/created');
        const jsonData = await response.json();
        // http://localhost:8000/api/getalldata
        setData(jsonData);
        console.log(jsonData)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
  

            
 

  return (
   <div>
    <p>hello{createddata}</p>
    <button onClick={fetchData}>
        jhbxjhvjhx
    </button>
   </div>
  )
}

export default App




// import React, { useState } from 'react';
// import axios from 'axios';

// const CreateData = () => {
//   const [newData, setNewData] = useState('');

//   const handleCreate = async () => {
//     try {
//       await axios.post('https://api.example.com/data', { newData });
//       alert('Data created successfully!');
//       // Optionally, fetch and update the displayed data
//     } catch (error) {
//       console.error('Error creating data:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Create New Data</h2>
//       <input
//         type="text"
//         value={newData}
//         onChange={(e) => setNewData(e.target.value)}
//       />
//       <button onClick={handleCreate}>Create</button>
//     </div>
//   );
// };

// export default CreateData;import React, { useState } from 'react';
// import axios from 'axios';

// const CreateData = () => {
//   const [newData, setNewData] = useState('');

//   const handleCreate = async () => {
//     try {
//       await axios.post('https://api.example.com/data', { newData });
//       alert('Data created successfully!');
//       // Optionally, fetch and update the displayed data
//     } catch (error) {
//       console.error('Error creating data:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Create New Data</h2>
//       <input
//         type="text"
//         value={newData}
//         onChange={(e) => setNewData(e.target.value)}
//       />
//       <button onClick={handleCreate}>Create</button>
//     </div>
//   );
// };

// export default CreateData;import React, { useState } from 'react';
// import axios from 'axios';

// const CreateData = () => {
//   const [newData, setNewData] = useState('');

//   const handleCreate = async () => {
//     try {
//       await axios.post('https://api.example.com/data', { newData });
//       alert('Data created successfully!');
//       // Optionally, fetch and update the displayed data
//     } catch (error) {
//       console.error('Error creating data:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Create New Data</h2>
//       <input
//         type="text"
//         value={newData}
//         onChange={(e) => setNewData(e.target.value)}
//       />
//       <button onClick={handleCreate}>Create</button>
//     </div>
//   );
// };

// export default CreateData;


