import React from 'react'
import './Homepage.css'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {

  let navigate = useNavigate()

  return (
    <div className='spaceX__homepage'>
      <div className='spaceX__homepage-header'>
        <div className='spaceX__homepage-header-hero'>
          <div className='spaceX__homepage-header__intro'>
            <h1>WELCOME TO SpaceX</h1>
          </div>
        </div>
        <div className='spaceX__homepage-header__quote'>
          <p>“You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars.” -Elon Musk</p>
        </div>
        <div className='spaceX__homepage-header__capsule'>
          <div className='spaceX__homepage__capsule-header'>
            <h1>The SpaceX Capsule</h1>
            <p>The Dragon spacecraft is capable of carrying up to 7 passengers to and from Earth orbit, and beyond.</p>
            <div className='spaceX__homepage-button' onClick={() => navigate('/capsules')}>
              LEARN MORE
            </div>
          </div>
        </div>
        <div className='spaceX__homepage-header__rocket'>
          <div className='spaceX__homepage__capsule-header'>
            <h1>The SpaceX ROCKET</h1>
            <p>Falcon 9 is a reusable, two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of people and payloads into Earth orbit and beyond. </p>
            <div className='spaceX__homepage-button' onClick={() => navigate('/rockets')}>
              LEARN MORE
            </div>
          </div>
        </div>
        <div className='spaceX__homepage-header__dragon'>
          <div className='spaceX__homepage__capsule-header'>
            <h1>The SpaceX DRAGON</h1>
            <p>Dragon 2 is the latest iteration of the reusable capsule, which SpaceX began flying in 2020. There are crewed and uncrewed Dragon 2 variants.</p>
            <div className='spaceX__homepage-button' onClick={() => navigate('/dragons')}>
              LEARN MORE
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage