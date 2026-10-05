import React from 'react';
import './App.css'

function App(){

let username = "sia"

function Greet(){
   alert('hi guys')
}

  return(
    // HTML
    // REACT CLOSE ALL THE HTML TAG
    // <Tag Name -  Input /Img
    <div>
      <nav>
        <ul>
          <li>Home</li> <br></br>
          <li>Support</li>
        </ul>
      </nav>

      <h1 className="head">this is react session</h1>

      <h2>my name is {username}</h2>

      <p>good evening</p>

      <button onClick={Greet}>greet</button>

      <input type="text" placeholder='enter your name' />
    </div>
  )
}

export default App