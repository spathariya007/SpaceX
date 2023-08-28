import React, { useEffect, useState } from 'react'
import './Dragons.css'
import axiosInstance from '../../helper/axiosInstance'
import img1 from '../../media/dragon1.jpg'
import img2 from '../../media/dragon2.jpg'

const Dragons = () => {
  let style = {
    textDecoration : "underline",
    color:"rgba(220,220,220)",
    fontSize : "1.1rem"
  }

  let [dragonData, setDragonData] = useState([])

  useEffect(() => {
    let fetchdata = async () => {
      let { data } = await axiosInstance.get("https://api.spacexdata.com/v3/dragons")
      setDragonData(data)
    }
    fetchdata()
  }, [])

  return (
    <div className='spaceX__dragon'>
      <header className='spaceX__dragon-header'>
        <section className='spaceX__dragon-header-heading'>
          <h1>
            <div></div>
            DRAGON
            <div></div>
          </h1>
          <p>SENDING HUMANS AND CARGO INTO SPACE</p>
        </section>
      </header>
      <section className='spaceX__dragon-cardgrid'>
        <div className='spaceX__dragon-cardgrid__heading'>
          <h1>Know more about Our dragons</h1>
        </div>
        <div className='spaceX__dragon-cardgrid__cards'>
          {
            dragonData.map((dragon) => {
              return (
                <div className='spaceX__rocket-card'
                key={dragon.id}
                  style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${dragon.id==="dragon1"?img1:img2})` }}>
                  <div className='spaceX__dragon-card-header'>
                    <h1>{dragon.name}</h1>
                  </div>
                  <div className='spaceX__dragon-card-details'>
                    <p><b style={style}>First-Flight</b> : {dragon.first_flight}</p>
                    <p><b style={style}>Type</b> : {dragon.type}</p>
                    <p><b style={style}>Status</b> : {dragon.active?"ACTIVE":"RETIRED"}</p>
                    <p>{dragon.description}</p>
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

export default Dragons