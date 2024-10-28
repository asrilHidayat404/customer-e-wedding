import React from 'react'

const Header = ({text, font}) => {
    return (
        <header className='text-center lg:p-10 lg:pt-20 pb-8 text-white'>
            <h1 className={`lg:w-1/2 w-2/3 mx-auto ${font ? font : 'roboto-slab'} text-[1.1rem] lg:text-2xl border-t-2 pt-20 lg:pt-10`}>{text}</h1>
        </header>
    )
}

export default Header