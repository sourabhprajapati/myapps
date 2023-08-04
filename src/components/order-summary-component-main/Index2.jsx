import React from 'react'
import "./index2.css";
import img1 from "./images2/pattern-background-desktop.svg"
import img2 from "./images2/illustration-hero.svg"
import img3 from "./images2/icon-music.svg"
const Index2 = () => {
  return (
    <>
      <img  className='background-img' src={img1}/>
       <div className='card'>
         <div className='card-left'>
           <img src={img2}/>

         </div>
         <div className='card-right'>
             <h2>Order Summary</h2>
             <p>You can now listen to millions of songs,
               audiobooks,and prodcasts on any device
               any where you like!
             </p>
             <div className='card-right plan'>
                   <img src={img3}/>
                   <p>Annual Plan<br/><span>$59.99/year</span></p>
                   <h6>Change</h6>
             </div>
             <button className=' btn'>Proceed to Payment</button>
             <button className=' btn'>Cancel Order</button>
         </div>
       </div>
    </>
  )
}

export default Index2