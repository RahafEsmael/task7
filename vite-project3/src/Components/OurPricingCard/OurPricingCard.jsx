import React from 'react'
import './OurPricingCard.css'

function OurPricingCard({num,title,description}) {
  return (
    
    <div className ='PricingCard'>
    <h3>{num}</h3>
    <h4>{title}</h4>
    <p>{description}</p>
    </div>
    
  )
}

export default OurPricingCard