import React from 'react'
import Ss from '../../assets/swampspeeder_front.png'
import Ss_back from '../../assets/swampspeeder_back.png'
import Ss_or from '../../assets/original/swampspeeder.png'

const S_s = () => {
  return (
    <div>
        <div class="md:grid m-4 md:grid-cols-2">
        <img src={Ss} alt="at rt walker" class="w-80 md:w-[720px] my-4 mx-auto border border-gray-300 rounded-xl" />
        <div class="my-auto">
        <h1 class="font-bold text-2xl md:text-4xl m-4">Republic Swamp Speeder</h1>
        <p class="text-xs text-gray-600">Before you place your order, check the <a class="font-semibold" href="info.html">Info</a> Page</p>
        <div  class="m-4 flex justify-center space-x-10">
        <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=7K7CSGSYGRZB6" class="border border-gray-400 py-1 px-2 rounded-lg hover:scale-105 duration-200"><p class="font-bold text-xl md:text-3xl my-auto">$35 <i class="fa-solid fa-cart-plus"></i></p></a>
        </div>
        <h2 class="text-xl md:text-3xl text-gray-500 font-bold">Short description:</h2>
        <p class="text-sm md:text-lg mb-4">One of our first MOC's designed by Neville. <br /> The Republic Swamp Speeder or Infantry Support Platform (short ISP) grants protection for your troops on Felucia or other planets. It is high-detailed.</p>
        <h2 class="text-xl md:text-3xl text-gray-500 font-bold">Details:</h2>
        <ul class="text-sm md:text-lg list-disc mx-auto list-inside">
            <li>104 Parts</li>
        </ul>
        </div>
    </div>
    <div id="gallery">
        <h2 class="text-xl md:text-3xl text-gray-500 font-bold">Gallery:</h2>
        <div class="flex flex-wrap justify-center gap-2 m-4"> 
            <img class="w-[480px] my-4 border border-gray-300 rounded-xl" src={Ss} alt="" />
            <img class="w-[480px] my-4 border border-gray-300 rounded-xl" src={Ss_back} alt="" />
            <img class="w-[480px] my-4 border border-gray-300 rounded-xl" src={Ss_or} alt="" />
        </div>
    </div>
    </div>
  )
}

export default S_s