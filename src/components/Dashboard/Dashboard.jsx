import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Data from '../Data/Data'
import {HomePage} from "../homepage/Home.jsx";

const Dashboard = () => {
  return (
    <div>
        <Navbar/>
        <Data/>
        <HomePage/>
        <Footer/>
    </div>
  )
}

export default Dashboard