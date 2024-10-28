import React from 'react'
import Countdown from '../utils/countDown'

const Hero = () => {
  return (
    <div 
      className="max-w-screen min-h-screen justify-center items-center flex relative"
      style={{
        backgroundImage: 'url(https://img.freepik.com/free-photo/black-flower-card-ai-generated_268835-7008.jpg)',
        backgroundSize: "cover"
      }}
      >
      <div className='w-1/2 h-full text-white flex justify-center gap-5 text-center items-center flex-col'>
        <div className='text-3xl'>
            <h1>You Are Invited To</h1>
            <h1>The Wedding Of</h1>
        </div>
        <div className='max-w-40 w-40 h-40 max-h-40 rounded-full overflow-hidden'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLaSeL6gJ9M4u1r7hBCbmg1aY-K-PWPoGRTw&s" alt="mempelai" />
        </div>
        <h1 className='text-primary lobster-two-regular lg:text-5xl text-3xl'>Kento' & Taeh</h1>
        <p className='font-bold text-white'>Selesa, 20 Oktober 2024</p>
        <Countdown deadline={"December, 09, 2024"} specificHour={8} />
      </div>
    </div>
  )
}

export default Hero