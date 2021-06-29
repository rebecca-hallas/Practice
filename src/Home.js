import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <div class="p-3 mb-2 bg-primary text-white">
 
          <Link to="/Colours">
            <button type="button" className="btn btn-success btn-lg">
              <h1 className="">Colours</h1>
            </button>
          </Link>

        </div>
    </>
  )
}

export default Home
