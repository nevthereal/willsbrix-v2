import React from 'react'
import Banner from '../assets/wb_banner.png'

const Info = () => {
  return (
    <div>
        <div id="header" style={{backgroundImage: `url(${Banner})`}} className="text-center bg-no-repeat bg-center bg-cover mt-4 transition-all w-full h-[92vh]">
        <div className="h-full w-full bg-black/25"></div>
        <p className="absolute top-[40vh] text-4xl md:text-6xl font-black uppercase tracking-wide bg-cover w-full">Info</p>
    </div>
    <div className="m-4">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">How it works:</h1>
        <p className="md:text-xl">
            We accept common Credit Cards (Mastercard, Visa etc.) as well as Apple Pay.<br />
            Select the Products you want and add them to your cart. <br />
            After your purchase, we will send you the Instructions and Informations about your Order (number of packages for example) via Email (the Email linked to your Paypal Account). 
        </p>
    </div>
    <br />
    <div className="m-4">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">Price Guide:</h1>
        <p className="md:text-xl">
            As you can see, all of our prices are in CHF (Swiss Franks), becuase we also order parts in Swiss Franks <br />
            on Bricklink and we don't want to deal with currency changes. <br />
            In terms of shipping, all of our products come with CHF 7.50 per product <span className='underline'>type</span>, which means, <br />
            that if you buy for example 5 AT-RTs, you need to pay CHF 7.50 shipping, but if you add 1 BARC Speeder, you need to pay CHF 15 shipping.<br />
            The assassin droids as well as the Crab droid have a shipping of only CHF 5.
        </p>
    </div>
    <br />
    <div className="m-4">
        <h1 className="text-2xl md:text-4xl font-bold">Email</h1>
        <p className="md:text-xl">Contact us via Email: <a className="font-bold" href="mailto:support@willsbrix.com">support@willsbrix.com</a></p>
    </div>
    <br />
    <div className="m-4">
        <h1 className="text-2xl md:text-4xl font-bold">Twitter</h1>
        <p className="md:text-xl">Send us a DM on Twitter: <a className="font-bold" href="https://twitter.com/willsbrix">@willsbrix</a></p>
    </div>
    <br />
    <div className="m-4">
        <h1 className="text-2xl md:text-4xl font-bold">Instagram</h1>
        <p className="md:text-xl">Follow us on Instagran: <a className="font-bold" href="https://instagram.com/willsbrixlego_official">@willsbrixlego_official</a></p>
    </div>
    </div>
  )
}

export default Info