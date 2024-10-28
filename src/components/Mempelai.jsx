import React from 'react'

const Mempelai = ({ img, person, count, father, mother, position }) => {
    return (
        <div className={`flex-1 flex flex-col justify-center ${position} p-10`}>
            <div className='flex lg:flex-col justify-center items-center gap-5 '>
                <div className='max-w-40 w-40 h-40 max-h-40 rounded-full overflow-hidden'>
                    <img src={img} alt="mempelai" />
                </div>
                <div>
                <h1 className='text-primary lobster-two-regular text-5xl'>{person}</h1>
                <div className='w-3/3'>
                    <p className='text-center text-white font-semibold'>Anak {count} dari : </p>
                    <p className='text-center text-white font-semibold'>Bapak {father}</p>
                    <p className='text-center text-white font-semibold'>& Ibu {mother}</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Mempelai