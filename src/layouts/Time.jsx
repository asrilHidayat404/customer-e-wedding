import React from 'react'
import Header from '../components/Header'
import { Calendar, CalendarHeart, Clock } from '@phosphor-icons/react'
import InfoWaktu from '../components/InfoWaktu'
import Place from './Place'

const Time = () => {
  return (
    <div className='w-full relative'>
        <Header text="Insya Allah Acara Akan Dilaksanakan Pada :" />
        <div className='mx-auto w-full flex justify-center text-white'><CalendarHeart size={74} /></div>
        <div className='w-2/3 mx-auto gap-5 flex lg:flex-row flex-col'>
            <InfoWaktu title="Akad Nikah" date="Senin, 21 Oktober 2024" time="Pukul : 09.00 WIB"  />
            <InfoWaktu title="Resepsi" date="Senin, 21 Oktober 2024" time="Pukul : 09.00 WIB"  />
        </div>
        <div className='w-2/3 mx-auto gap-5 flex'>
            <Place />
        </div>

    </div>
  )
}

export default Time