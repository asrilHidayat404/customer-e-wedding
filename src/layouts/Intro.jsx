import { EnvelopeOpen } from '@phosphor-icons/react'
import React, { useState } from 'react'

const Intro = ({isOpened, handleOpen}) => {

  return (
    <div 
      className={`w-screen h-screen justify-center items-center z-30 flex ${isOpened ? '-translate-y-0' : 'transform -translate-y-[80rem] transition-transform duration-1000 ease-linear'} fixed`}
      style={{
        backgroundImage: 'url(https://img.freepik.com/free-photo/black-flower-card-ai-generated_268835-7008.jpg)',
        backgroundSize: "cover"
      }}
      >
      <div className='lg:w-1/2 h-full text-white flex justify-center gap-5 text-center items-center flex-col'>
        <div className='max-w-40 w-40 h-40 max-h-40 rounded-full overflow-hidden'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLaSeL6gJ9M4u1r7hBCbmg1aY-K-PWPoGRTw&s" alt="mempelai" />
        </div>
        <h1 className='text-primary lobster-two-regular text-3xl lg:text-5xl'>Kento' & Taeh</h1>
        <p className='text-1xl'>Kepada Yth. Bapak/Ibu/Saudara/i</p>
        <h2 className='text-2xl text-primary'>bilek</h2>
        <p className='text-1xl'>Tanpa Mengurangi Rasa Hormat, Kami Mengundang Anda Untuk Hadir Di Acara Pernikahan Kami.</p>
        <div className='flex py-2 px-3 text-slate-900 bg-primary rounded-full font-semibold gap-2 hover:bg-black hover:text-white transition-colors duration-200 ease-linear'>
          <EnvelopeOpen size={32} />
          <button onClick={handleOpen} className=''>Buka Undangan</button>
        </div>
        <p>Mohon maaf apabila ada kesalahan penulisan nama/gelar</p>
      </div>
    </div>
  )
}

export default Intro