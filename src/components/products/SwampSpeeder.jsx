import React from 'react'
import Ss from '../../assets/swampspeeder_front.png'
import Ss_back from '../../assets/swampspeeder_back.png'
import Ss_or from '../../assets/original/swampspeeder.png'

const S_s = () => {
  return (
    <div>
        <div className="md:grid m-4 md:grid-cols-2">
        <img src={Ss} alt="at rt walker" className="w-80 md:w-[720px] my-4 mx-auto border border-gray-300 rounded-xl" />
        <div className="my-auto">
        <h1 className="font-bold text-2xl md:text-4xl m-4">Republic Swamp Speeder</h1>
        <p className="text-xs text-gray-600">Before you place your order, check the <a className="font-semibold" href="/info">Info</a> Page</p>
        <div  className="m-4 flex justify-center space-x-10">
        <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=7K7CSGSYGRZB6" className="border border-gray-400 py-1 px-2 rounded-lg hover:scale-105 duration-200"><p className="font-bold text-xl md:text-3xl my-auto">CHF 35 <i className="fa-solid fa-cart-plus"></i></p></a>
        </div>
        <h2 className="text-xl md:text-3xl text-gray-500 font-bold">Short description:</h2>
        <p className="text-sm md:text-lg mb-4">One of our first MOC's designed by Neville. <br /> The Republic Swamp Speeder or Infantry Support Platform (short ISP) grants protection for your troops on Felucia or other planets. It is high-detailed.</p>
        <h2 className="text-xl md:text-3xl text-gray-500 font-bold">Details:</h2>
        <ul className="text-sm md:text-lg list-disc mx-auto list-inside">
            <li>104 Parts</li>
        </ul>
        </div>
    </div>
    <div id="gallery">
        <h2 className="text-xl md:text-3xl text-gray-500 font-bold">Gallery:</h2>
        <div className="flex flex-wrap justify-center gap-2 m-4"> 
            <img className="w-[480px] my-4 border border-gray-300 rounded-xl" src={Ss} alt="" />
            <img className="w-[480px] my-4 border border-gray-300 rounded-xl" src={Ss_back} alt="" />
            <img className="w-[480px] my-4 border border-gray-300 rounded-xl" src={Ss_or} alt="" />
        </div>
    </div>
    </div>
  )
}

export default S_s