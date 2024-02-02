import React from 'react'
import Banner from './photo-grid.png'

export default function Hero(){
    return (
        <div className="hero">
            <img className="banner" src={Banner} alt="banner" />
            <div className="hero-text">
                <h1 className="hero-title">Online experiences</h1>
                <p className="blurb">Join unique interactive activities led by one-of-a-kind hosts all without leaving home.</p>
            </div>
        </div>
    )
}