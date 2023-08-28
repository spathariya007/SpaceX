import React from 'react'
import './ViewCapsule.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axiosInstance from '../../../helper/axiosInstance'

const ViewCapsule = ({data}) => {

  let {id} = useParams()
  let [capsule , setCapsule] = useState([])
  let navigate = useNavigate()

  useEffect(()=>{
    let fetchdata = async ()=>{
      let {data} = await axiosInstance.get(`https://api.spacexdata.com/v3/capsules/${id}`)
      setCapsule(data)
    };
    fetchdata();
  }, [id])

  return (
    <main className='spaceX__viewcapsule'>
        <table>
          <tr>
            <td colSpan={2}>
              <h1>
                {capsule.capsule_serial}
              </h1>
            </td>
          </tr>
          <tr>
            <td>Capsule ID</td>
            <td>{capsule.capsule_id===null?"-":capsule.capsule_id}</td>
          </tr>
          <tr>
            <td>Status</td>
            <td>{capsule.status===null?"-":capsule.status}</td>
          </tr>
          <tr>
            <td>original launch</td>
            <td>{capsule.original_launch===null?"-":capsule.original_launch}</td>
          </tr>
          <tr>
            <td>original launch unix</td>
            <td>{capsule.original_launch_unix===null?"-":capsule.original_launch_unix}</td>
          </tr>
          <tr>
            <td>landings</td>
            <td>{capsule.landings===null?"-":capsule.landings}</td>
          </tr>
          <tr>
            <td>type</td>
            <td>{capsule.type===null?"-":capsule.type}</td>
          </tr>
          <tr>
            <td>Details</td>
            <td>{capsule.details===null?"-":capsule.details}</td>
          </tr>
          <tr>
            <td>reuse count</td>
            <td>{capsule.reuse_count===null?"-":capsule.reuse_count}</td>
          </tr>
        </table>
        <div className='spaceX__viewcapsule-backbtn' onClick={()=>{navigate('/capsules')}}>
              Go back
        </div>
    </main>
  )
}

export default ViewCapsule