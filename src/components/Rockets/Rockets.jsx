import React, { useEffect, useState } from 'react'
import './Rockets.css'
import axiosInstance from '../../helper/axiosInstance'

const Rockets = () => {

  let style = {
    textDecoration : "underline",
    color:"rgba(220,220,220)",
    fontSize : "1.1rem"
  }

  let [rocketData, setRocketData] = useState([])

  useEffect(() => {
    let fetchdata = async () => {
      let { data } = await axiosInstance.get('https://api.spacexdata.com/v3/rockets')
      setRocketData(data)
    }
    fetchdata()
    console.log(rocketData);
  }, [])

  return (
    <div className='spaceX__rocket'>
      <header className='spaceX__rocket-header'>
        <section className='spaceX__rocket-header-heading'>
          <h1>
            <div></div>
            ROCKET
            <div></div>
          </h1>
          <p>SpaceX’s Starship spacecraft and Super Heavy rocket – collectively referred to as Starship – represent a fully reusable transportation system designed to carry both crew and cargo to Earth orbit, the Moon, Mars and beyond.</p>
        </section>
      </header>
      <section className='spaceX__rocket-cardgrid'>
        <div className='spaceX__rocket-cardgrid__heading'>
          <h1>Know more about Our rockets</h1>
        </div>
        <div className='spaceX__rocket-cardgrid__cards'>
          {
            rocketData.map((rocket, index) => {
              return (
                <div className="spaceX__rocket-card"
                  key={rocket.id}
                  style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${rocket.flickr_images[1]})` }}>
                  <div className='spaceX__rocket-card-header'>
                    <h1>{rocket.rocket_name}</h1>
                  </div>
                  <div className='spaceX__rocket-card-details'>
                    <p>{rocket.description}</p>
                    <p><b style={style}>First-Flight</b> : {rocket.first_flight}</p>
                    <p><b style={style}>Country</b> : {rocket.country}</p>
                    <p><b style={style}>Status</b> : {rocket.active?"ACTIVE":"RETIRED"}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
    </div>
  )
}

export default Rockets