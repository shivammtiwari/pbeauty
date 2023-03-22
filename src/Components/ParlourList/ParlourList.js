import React from 'react'
import Navbar from '../Navbar/Navbar'
import './ParlourList.css'
import { useParams } from 'react-router-dom'
import List from './List'

const ParlourList = () => {

  const { cityName } = useParams()

  return (
    <>
      <Navbar />
      <div className='ParlourHeaderWrap'>
        <div className='ParlourHeader'>
          <i class="fa-sharp fa-solid fa-location-dot"></i>
          <h2>
            {cityName}
          </h2>
        </div>
      </div>
      <List />
    </>
  )
}

export default ParlourList