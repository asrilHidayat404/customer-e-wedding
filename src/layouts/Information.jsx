import React from 'react'
import Mempelai from '../components/Mempelai'
import Time from './Time'
import Header from '../components/Header'

const Information = () => {
    return (
        <div
            className='w-full relative'
            style={{
                backgroundImage: 'url(https://t4.ftcdn.net/jpg/06/28/50/45/360_F_628504583_hpCVZftaZLb2bziWgCQKAf8siGyWlvTw.jpg)',
                backgroundSize: "cover"
            }}
        >
            <svg 
                className='absolute top-0 right-0 left-0' 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 1440 320">
                    <path 
                        fill="#eab308" 
                        fill-opacity="1" 
                        d="M0,32L60,42.7C120,53,240,75,360,85.3C480,96,600,96,720,85.3C840,75,960,53,1080,48C1200,43,1320,53,1380,58.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z">
                    </path>
            </svg>

            <Header text="Dengan Memohon Rahmat Dan Ridho Dari Allah SWT. Kami Bermaksud Menyelenggarakan Acara
                Pernikahan Kami" />
            <div className='w-full flex lg:flex-row flex-col'>
                <Mempelai img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJO4QSaHHqsExJYxXEZTpmuJ-i8LeEVPcnEQ&s" person="Kento'" count='Kedua' father='ridla' mother='rita' position="items-end" />
                <span className='lobster-two-regular-italic text-primary lg:mt-24 text-center text-3xl'>&</span>
                <Mempelai img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD_OGmT78BmSpf3Vk6xNmrn2ryuWq1tx5ceg&s" person="Bilek'" count='Kedua' father='ridla' mother='rita' position="items-start" />
            </div>
            <Time />
        </div>
    )
}

export default Information