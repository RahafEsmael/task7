import './OurServicesCard.css'


function OurServicesCard({photo,title,description}) {
  return (
    <div className='serviceCards'>
        <img src={photo} alt="..." />
        <h4>{title}</h4>
        <p>{description}</p>
        <button>Read More</button>
        
    </div>
  )
}

export default OurServicesCard