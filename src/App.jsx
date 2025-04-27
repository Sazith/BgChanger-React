
import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState("olive")

  const colors = [
    { name: "Red", code: "red" },
    { name: "Green", code: "green" },
    { name: "Blue", code: "blue" },
    { name: "Olive", code: "olive" },
    { name: "Gray", code: "gray" },
    { name: "Yellow", code: "yellow" },
    { name: "Pink", code: "pink" },
    { name: "Purple", code: "purple" },
    { name: "Lavender", code: "lavender" },
    { name: "White", code: "white" },
    { name: "Black", code: "black" },
  ];

  return (
    <div className='w-full h-screen duration-200 bg-amber-800'
      style={{ backgroundColor: color }}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>

          {/* <button className='outline-none px-4 rounded-full text-white shadow-lg'
            style={{ backgroundColor: 'red' }}
            onClick={() => setColor('red')}
          >Red</button> */}

          {colors.map((item) => (
            <button
              key={item.code}
              className={`
                outline-none px-4 py-1 rounded-full shadow-lg 
                ${item.code === 'white' || item.code === 'pink' || item.code === 'yellow' || item.code === 'lavender' ? 'bg-white text-black' : `bg-${item.code}-500 text-white`}
              `}
              style={{ backgroundColor: item.code}}
              onClick={() => setColor(item.code)}
            >
              {item.name}
            </button>
          ))}

        </div>
      </div>
    </div>
  )
}

export default App
