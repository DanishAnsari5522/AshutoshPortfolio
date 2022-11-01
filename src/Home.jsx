import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'
import Common from './Common'

function Home() {
    return (
        <div className='bg'>
        <Common name="Grow your business with" visit="/about" btname="Get Started" />

        </div>
    )
}

export default Home