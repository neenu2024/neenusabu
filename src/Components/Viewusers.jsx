import React from 'react'
import Dashboard from './Dashboard'
import Navbar from './Navbar'
import './Dashboard.css'

function viewusers() {
  return (
    <div>
        
        <Dashboard/>
        <div class ="h1">
        <h1>View Users</h1>
        </div>
        <div class="table">
       <table class="table">
  <thead>
    <tr>
      <th scope="col">Sl.no:</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone No:</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto56</td>
      <td>123</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton89</td>
      <td>789</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>John</td>
      <td>Doe48</td>
      <td>122</td>
    </tr>
     <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto56</td>
      <td>123</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton89</td>
      <td>789</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>John</td>
      <td>Doe48</td>
      <td>122</td>
    </tr>
  </tbody>
</table>
</div>
    </div>
  )
}

export default viewusers
