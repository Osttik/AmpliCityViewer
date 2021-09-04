import React from 'react';
import MapComponent from './components/mapPage/MapComponent';
import Sidebar from './components/sidebar/SideBar';
import { getData, postData } from './axios/data';

import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [data, setData] = useState([]);

  //useEffect(async () => {
  //  getData("http://localhost:8080/getdata")
  //  .then(function (resp) {
  //    setData(resp);
  //  });
  //}, []);
//
  //const handlePost = () => {
  //      var reader = new FileReader();
  //      reader.onload = function(){
  //        var text = reader.result;
  //  postData(text).then((_) => {
  //    //getData("http://localhost:8080/getdata")
  //      //.then(function (response) {
  //        // handle success
  //        //setData(response);
  //    //const copy = [...data];
  //    //copy.push({name: document.getElementById("inpt").value});
  //    //setData(copy)
  //      //});
  //  })
  //      };
  //      reader.readAsText(document.getElementById("inpt").files[0]);
  //};

  return (
    <div>
      <Sidebar />
      <MapComponent />
      <button onClick={() => postData({"abx":"abs"})} style={{position: "absolute", top: "50vh", left: "50vw"}}>Add</button>
    </div>
  )
}

export default App;
