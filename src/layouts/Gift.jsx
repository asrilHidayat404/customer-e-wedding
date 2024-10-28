import React from 'react'
import Header from '../components/Header'
import { Gift } from '@phosphor-icons/react'
const GiftSec = () => {
    return (
        <div className="w-full bg-primary pb-20">
            <header className='text-center lg:p-20 pt-20 pb-8  text-white'>
                <h1 className='w-1/2 mx-auto text-4xl great-vibes-regular'>Wedding Gift</h1>
            </header>
            <p className='lg:w-1/2 p-5 lg:p-0 mx-auto text-center font-semibold text-white text-[1.1rem]'>Doa Restu Anda merupakan karunia yang sangat berarti bagi kami.
                Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.</p>
            <div className='w-2/3 flex lg:flex-row flex-col gap-3 mx-auto mt-20'>
                <div className="flex-1 flex flex-col justify-center items-center rounded-xl p-4 bg-black bg-opacity-70 text-white font-semibold gap-2 border-4">
                    <img src="https://kumengundangmu1.my.id/wp-content/uploads/2024/07/pay-dana.png" alt="" />
                    <p>transfer ke DANA a.n Kentok</p>
                    <p>085259176485</p>
                </div>
                <div className="flex-1 flex flex-col justify-center items-center text-center rounded-xl p-4 bg-black bg-opacity-70 text-white font-semibold gap-2 border-4">
                    <Gift size={96} />
                    <p>Anda Juga Bisa Mengirim Kado Fisik Ke Alamat Berikut:</p>
                    <p>Palongan Kapedi, Dusun Aeng Bato RT 005/ RW 006 Kapedi Bluto Sumenep</p>
                </div>
            </div>
        </div>
    )
}

export default GiftSec