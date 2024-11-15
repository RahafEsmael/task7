import './OurServices.css'
import photo1 from './../../assets/serviceIcon1_1.svg'
import photo2 from './../../assets/serviceIcon1_2.svg'
import photo3 from './../../assets/serviceIcon1_3.svg'
import photo4 from './../../assets/serviceIcon1_4.svg'
import OurServicesCard from './../OurServicesCard/OurServicesCard'
function OurServices() {
  return (
    <>
    <section className='photo'>
      
        <img src="./V7-task/brandLogo1_1.svg" alt="error"/>
        <img src="./V7-task/brandLogo1_2.svg" alt="error"/>
        <img src="./V7-task/brandLogo1_3.svg" alt="error"/>
        <img src="./V7-task/brandLogo1_4.svg" alt="error"/>
        <img src="./V7-task/brandLogo1_5.svg" alt="error"/>
      </section>   
      <section className='OUR-IT-SERVICES'>
        <p>OUR IT SERVICES</p>
        <h2>Elevating Businesses With Ingenuity</h2>
        <div className='ourCards'>
        <OurServicesCard  photo={photo1} title={"Data Guard Sentinel"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio architectoe eeeeeeeeeeeeeee"} />
        <OurServicesCard  photo={photo2} title={"Web Design"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio architectoeeeeeeee eeeeeee eeeeeeeeeee "} />
        <OurServicesCard  photo={photo3} title={"CMR Solution"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio architectoeeeeeeeeeeeeee eeeeeeeeeeeeeeee"} />
        <OurServicesCard  photo={photo4} title={"Woo Commerce"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio architectoeeeeeee eeeeeeeeeeeeeeeee"} />
</div>
      </section>
     
</>
  )
}

export default OurServices