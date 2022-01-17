import React, { useEffect } from 'react';
import './App.css';
import { createDemoApp } from 'polotno/polotno-app';
function App() {

  useEffect(() => {
    const  store = createDemoApp({
      container: document.getElementById("App"),
      key: "Jq19lz43FJSa7QAkVGmM"
    });
  }, [])

  return (
    <> 
      <h4> Design Center </h4> 
      <div id="App" >
      </div>
    </>
  );
}

export default App;
