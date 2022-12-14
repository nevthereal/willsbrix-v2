import React from 'react'
import Ab from '../assets/ab_front.png'
import Ag from '../assets/ag_front.png'
import Atrt from '../assets/atrt.png'
import Barcspeeder from '../assets/barc_speeder.png'
import Crabdroid from '../assets/crab droid.png'
import Rancor from '../assets/rancor.png'
import Swampspeeder from '../assets/swampspeeder_front.png'
import Banner from '../assets/wb_banner.png'

const Producst = () => {
  return (
    <div>
    <div id="header" style={{backgroundImage: `url(${Banner})`}} className="text-center bg-no-repeat bg-center bg-cover mt-4 transition-all w-full h-[92vh]">
        <div className="h-full w-full bg-black/25"></div>
        <p className="absolute top-[40vh] text-4xl md:text-6xl font-black uppercase tracking-wide bg-cover w-full">Products</p>
    </div>
    <p className="bg-orange-200 border rounded-2xl border-orange-300 w-[90%] md:w-96 mx-auto my-4 p-4"><span className="font-semibold">Note:</span> It is possible, that your bricks will be sent in different packages, because we order them all from <a className="text-gray-800 font-semibold" href="https://bricklink.com">Bricklink</a> directly to you!</p>
    <div id="products" className="flex justify-center gap-4 flex-wrap my-4 2xl:max-w-[80%] mx-auto">
        <div className="border border-gray-300 bg-gray-200 rounded-2xl w-9/12 md:w-auto p-4 hover:scale-105 duration-200 mx-auto md:mx-0">
            <a href="/products/at-rt">
                <img className="p-2 w-96 mx-auto rounded-3xl" src={Atrt} alt="at-rt walker" />
                <p className="mb-4 font-bold text-2xl text-center">AT-RT Walker</p>
                <p className="text-gray-700 font-bold">15 CHF</p>
            </a>
        </div>
        <div className="border border-gray-300 bg-gray-200 rounded-2xl w-9/12 md:w-auto p-4 hover:scale-105 duration-200 mx-auto md:mx-0">
            <a href="/products/barc-speeder">
                <img className="p-2 w-96 mx-auto rounded-3xl" src={Barcspeeder} alt='' />
                <p className="mb-4 font-bold text-2xl text-center">BARC Speeder</p>
                <p className="text-gray-700 font-bold">20 CHF</p>
            </a>
        </div>
        <div className="border border-gray-300 bg-gray-200 rounded-2xl w-9/12 md:w-auto p-4 hover:scale-105 duration-200 mx-auto md:mx-0">
            <a href="/products/crab-droid">
                <img className="p-2 w-96 mx-auto rounded-3xl" src={Crabdroid} alt="at-rt" />
                <p className="mb-4 font-bold text-2xl text-center">Crab Droid</p>
                <p className="text-gray-700 font-bold">10 CHF</p>
            </a>
        </div>
        <div className="border border-gray-300 bg-gray-200 rounded-2xl w-9/12 md:w-auto p-4 hover:scale-105 duration-200 mx-auto md:mx-0">
            <a href="/products/assassin-black">
                <img className="p-2 w-96 mx-auto rounded-3xl" src={Ab} alt="assassin droid black" />
                <p className="mb-4 font-bold text-2xl text-center">Black Assassin Droid</p>
                <p className="text-gray-700 font-bold">5 CHF</p>
            </a>
        </div>
        <div className="border border-gray-300 bg-gray-200 rounded-2xl w-9/12 md:w-auto p-4 hover:scale-105 duration-200 mx-auto md:mx-0">
            <a href="/products/assassin-gray">
                <img className="p-2 w-96 mx-auto rounded-3xl" src={Ag} alt="assassin droid gray" />
                <p className="mb-4 font-bold text-2xl text-center">Gray Assassin Droid</p>
                <p className="text-gray-700 font-bold">5 CHF</p>
            </a>
        </div>
        <div className="border border-gray-300 bg-gray-200 rounded-2xl w-9/12 md:w-auto p-4 hover:scale-105 duration-200 mx-auto md:mx-0">
            <a href="/products/swamp-speeder">
                <img className="p-2 w-96 mx-auto rounded-3xl" src={Swampspeeder} alt="swamp speeder" />
                <p className="mb-4 font-bold text-2xl text-center">Republic Swamp Speeder</p>
                <p className="text-gray-700 font-bold">35 CHF</p>
            </a>
        </div>
        <div className="border border-gray-300 bg-gray-200 rounded-2xl w-9/12 md:w-auto p-4 hover:scale-105 duration-200 mx-auto md:mx-0">
            <a href="/products/rancor">
                <img className="p-2 w-96 mx-auto rounded-3xl" src={Rancor} alt="rancor" />
                <p className="mb-4 font-bold text-2xl text-center">Rancor (Minifig Scale)</p>
                <p className="text-gray-700 font-bold">40 CHF</p>
            </a>
        </div>
    </div>
    </div>
  )
}

export default Producst