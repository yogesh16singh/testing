import axios from 'axios'
import './App.css'
function App() {
  async function getAllUsers() {

    await axios.get('https://api.theautring.com/api/v1/getalluser', {
      timeout: 10000,
      // headers: {
      //   "Access-Control-Allow-Origin": "*",
      //   "Access-Control-Allow-Methods": "POST, GET, OPTIONS"
      // }
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      })
  }



  // async function getAllUsers() {
  //   const apiUrl = 'https://api.theautring.com/api/v1/getalluser'; // API endpoint URL

  //   try {
  //     const response = await axios.get(apiUrl, {
  //       headers: {
  //         'Origin': 'http://localhost:5173/',
  //         'X-Requested-With': 'XMLHttpRequest'
  //       },
  //       timeout: 10000
  //     });

  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  getAllUsers();

  return (
    <h1>Hi</h1>
  )
}

export default App
