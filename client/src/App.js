import React, {useEffect, useState} from 'react'
import './App.css'
import './belownavigation.js'
import './bp.jpg'
//import Axios from "axios"

function App() {
  const [data, setData] = useState([]);
  const [message, setMessage]=useState('');
  const handleChange = event => {setMessage(event.target.value)
    console.log('value is',event.target.value);
  };

   useEffect(() => {
     fetch("http://localhost:5000/members").then(
       res => res.json()
     ).then(res => setData(res))
     .then(
       data => 
        
         // setData(data);
         console.log(data)
     ).catch(error => console.error(error))
   }, []);
   return(
    <div className='APP'>
      <h1> REACT AND FLASK DEMO WEBSITE </h1>
      <img src="https://projectbucket7896.s3.ap-south-1.amazonaws.com/bp.jpg" />
      {data.map(data => {
        return(
          <div className='disp'> 
            <h2> {data}</h2> 
            </div>
        )
      })}
      <div>
        <input
        type="text"
        id="message"
        name="message"
        onChange   ={handleChange}
        value={message}
      />
      <h2>NICE TO MEET YOU: {message}</h2>
      </div>
    </div>
    
   )


}

export default App
