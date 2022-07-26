import React from 'react'
import './Main.css'

export default function Main() {
  return (
    <div className='main'>
      <h1 className='main--title'>Fun Facts About React</h1>
      <ul className='main--facts'>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Power thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  )
}
