 import React from 'react'
 import plane from '../../assets/plane.png';
 import video from '../../assets/skySlowmo.mp4'

 const Home = () => {
   return (
     <div className='home flex container'>
      <div className='mainText'>
        <h1>Create Ever-lasting Memories With Us</h1>
      </div>
  
      <div className='houseImages flex'>
        <div className='videoDiv'>
          <video src={video} autoPlay muted loop className='video'></video>
        </div>
        <img src={plane} alt='' className='plane' />
      </div>    

     </div>
   )
 }
 
 export default Home
 