import logo from './logo.svg';
import './App.css';
import Input from './Components/Input';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import { Container } from 'react-bootstrap';
import Navbar from './Components/Navbar';
import Routing from './Components/Routing';
import { getDefaultNormalizer } from '@testing-library/react';
import { useEffect } from 'react'

function App() {

  // useEffect(() => {
  //   getData()
  // }, []);

  // const [fakedata, setfakedata] = useState([])


  // let getData = async () => {
  //   let fetchdata = await fetch("https://jsonplaceholder.typicode.com/users");
  //   let convertdata = await fetchdata.json()
  //   console.log(convertdata)
  //   setfakedata(convertdata);
  // }
  // console.log(fakedata);
  return (
    <div className="App">
      <Routing />
      {/* {fakedata.map((item) => {
        return (
          <h1>{item.id}</h1>
        )
      })} */}



    </div >
  );
}

export default App;
