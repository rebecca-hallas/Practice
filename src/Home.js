import React from 'react'
import { Link } from 'react-router-dom'
import Colours from './Colours'

function Home() {
  return (
    <>
    <h1 className="text-center">Fun with Bootstrap and React</h1>
      <div className="position-absolute top-50 start-50 translate-middle-x">
          <Link to="/Colours">
            <button type="button" className="btn btn-primary btn-lg">
              <h1 className="">Colours</h1>
            </button>
          </Link>

        </div>
    </>
  )
}

export default Home
