import React, { useState } from 'react'
import Navbar from './Navbar'
import './Dashboard.css'

function Dashboard() {
  const [dashboard, setDashboard] = useState()
  return (
    <div>
      <Navbar/>
      <div class = "dashboard">
        
          

         <ul>
          <div class="border border-success p-2 mb-2 border-opacity-25">Dashboard</div>
          <div class="border border-success p-2 mb-2 border-opacity-25">View Users</div>
          <div class="border border-success p-2 mb-2 border-opacity-25">View Business</div>
          <div class="border border-success p-2 mb-2 border-opacity-25">Log out</div>
         
         </ul> 
        
      </div>
      
    </div>
  )
}

export default Dashboard
