import React from 'react'

import './Hero.css'
function Hero() {
  
  return (
    <>
    <section className='backImage'>
      <img src="./V7-task/heroShape1_1.webp" className='backImage1'/>
      <img src="./V7-task/heroThumb1_1.webp" className='backImage2'/>
      <img src="./V7-task/heroShape1_2.webp" className='backImage3' />
      <div className='paragraphs'> 
        <p>Everythink You Need To Create A Website</p>
        <h1>Business Innovation With IT Services Expertise</h1>
        <ul>
        <li>Deployment and Support</li>
        <li>Flexibility and Adaptability</li>
        <li>Discovery and Analysis</li>
        <li>Competitive Advantage</li>
        </ul>
        <button>GET STARTED</button>
     
      <div className='valuing'> 
        <div>
          <p>Trustipilot</p>
          <span>
          <img src="./V7-task/profileShape1_1.webp" />
         <p> 450+reviews</p></span>
        </div>
        <div>
          <p>Google</p>
          <span>
          <img src="./V7-task/profileShape1_1.webp" />
         <p> 450+reviews</p></span>
        </div>
        </div>
      </div>
      </section>
      
    </>
  )
}

export default Hero