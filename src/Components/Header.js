import React from 'react'
import logo from '../logo.svg'
import './Header.css'

export default function Header() {
  return (
    <div>
        <header className='header'>
            <img src={logo} alt="#" className='img-logo' />
            <h2 className='heading-1'>ReactFacts</h2>
            <h3 className='heading-2'>React Course - Project 1</h3>
        </header>
    </div>
  )
}
