import React from 'react'
import Logo from './airbnb-logo.png'

export default function Navbar(){
    return (
        <div className="navbar">
            <img className="logo" src={Logo} alt="airbnb logo" />
        </div>
    )
}