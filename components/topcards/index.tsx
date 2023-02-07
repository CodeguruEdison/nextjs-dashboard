import React from 'react'
import TopCard from './topcard'
import { topCardData } from './topcard.type'

const TopCards = () => {
  return (
    <div className='grid lg:grid-cols-5 gap-4 p-4'>
      {
        topCardData?.map((cardInfo, index) => {
          return (
            <TopCard cardInfo={cardInfo} key={cardInfo.title}></TopCard>
          )
        })
      }

    </div>
  )
}

export default TopCards