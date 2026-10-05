import React from 'react';
import './App.css'

function App() {
  
  function Greet(){
    alert ('welcome to the library');
  }

  return(
    <div className='app'>
      <nav>
        <a href="home">home</a>
        <a href="feedback">feedback</a>
        <a href="help">help</a>
      </nav>

      <h1 className="head">Your Library</h1>
      <p className='para'>have a great day, stay productive.</p>

      <button onCLick={Greet}>greet</button>
      <input type="text" placeholder='enter your name'/>
      <input type= "password" placeholder='enter your library id'/>
    </div>
  )
}

export default App