import React, { useState } from 'react'


function Colours() {
  const [colour, setColour] = useState({ height: '100px', width: '100px', backgroundColor: 'black' })

  return (
    <>
      <h1 className="text-center">Colours</h1>
      
      <h3 className="text-center">Click on the different buttons below to change the colour of the square:</h3>

      <div className="position-absolute start-50 translate-middle-x">
        <div className="border-2 border-white" style={colour} />
      </div>

      <div className="position-absolute top-50 start-50 translate-middle-x">
        <div className="row">
          <button className="bg-danger text-black" onClick={() => setColour({ height: '100px', width: '100px', backgroundColor: 'red' })}>Red</button>

          <button className="bg-success text-black" onClick={() => setColour({ height: '100px', width: '100px', backgroundColor: 'green' })}>Green</button>

          <button className="bg-warning text-black" onClick={() => setColour({ height: '100px', width: '100px', backgroundColor: 'yellow' })}>Yellow</button>

          <button className="bg-primary text-black" onClick={() => setColour({ height: '100px', width: '100px', backgroundColor: 'blue' })}>Blue</button>
        </div>
      </div>
    </>
  )
}

export default Colours