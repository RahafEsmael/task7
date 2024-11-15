import './OurPricing.css'
import OurPricingCard from './../OurPricingCard/OurPricingCard'

function OurPricing() {
  return (
    <>
    <section className='ourPricing'>
    <div className='video'>
       <video width="320" height="240" controls>
      <source src="movie.mp4" type="video/mp4" />
      <source src="movie.ogg" type="video/ogg" />
      Your browser does not support the video tag.
    </video>
        </div>
      <div className='ourPricingCards'>  
       <OurPricingCard num={"01"} title={"eieiejijid"} description={"jicudifie gfiugife ufiu ehdj buiib uidub "}/>
       <OurPricingCard num={"02"} title={"eieiejijid"} description={"jicudifie gfiugife ufiu ehdj buiib uidub "}/>
       <OurPricingCard num={"03"} title={"eieiejijid"} description={"jicudifie gfiugife ufiu ehdj buiib uidub "}/>
       <OurPricingCard num={"04"} title={"eieiejijid"} description={"jicudifie gfiugife ufiu ehdj buiib uidub "}/>
        </div>
        </section>
        
        </>
  )
}

export default OurPricing