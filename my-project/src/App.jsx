import { useState } from 'react'
import './App.css'
// import React from 'react'

function App() {
      // State to hold the random color
      const [color, setColor] = useState('#ffffff');
    
      // Function to generate a random color in hex format
      const generateRandomColor = () => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        setColor(randomColor);
      };

  return (
    <>

    <div className='w-full h-screen duration-200' style={{backgroundColor : color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
    <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
      <button onClick={() => setColor("#990000")} 
       className='outline-none px-4 py-3 rounded-full text-white shadow-lg' 
      style={{backgroundColor : "#990000"}}>Crimson red</button>
<button onClick={() => setColor("#040720")}
className='outline-none px-4 py-3 rounded-full text-white shadow-lg' 
      style={{backgroundColor : "#040720"}}>Black-blue</button>

<button onClick={() => setColor("#0C090A")}
className='outline-none px-4 py-3 rounded-full text-white shadow-lg' 
      style={{backgroundColor : "#0C090A"}}>Night</button>

<button onClick={() => setColor("#FE632A")} 
className='outline-none px-4 py-3 rounded-full text-white shadow-lg' 
      style={{backgroundColor : "#FE632A"}}>Fluro orange</button>

<button onClick={() => setColor("#16F529")}
 className='outline-none px-4 py-3 rounded-full text-white shadow-lg' 
      style={{backgroundColor : "#16F529"}}>neon-green</button>

<button onClick={() => setColor("#550A35")}
className='outline-none px-4 py-3 rounded-full text-white shadow-lg' 
      style={{backgroundColor : "#550A35"}}>Purple Lily</button>

<button onClick={() => setColor("#F67280")}
className='outline-none px-4 py-3 rounded-full text-white shadow-lg' 
      style={{backgroundColor : "#F67280"}}>Pastel Red</button>

<button onClick={generateRandomColor}
className='outline-none px-4 py-3 rounded-full text-white shadow-lg' 
      style={{backgroundColor : "black"}}>Generator color</button>



    </div>
    </div>
    </div>

      
    
    </>
  )
}

export default App
