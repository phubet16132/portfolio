import React from 'react'
import { Navbar } from '../../components'
import { Home } from '../../pages'

const DefaultLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="home-section">
        <Home />
      </div>
    </div>
  )
}

export default DefaultLayout
