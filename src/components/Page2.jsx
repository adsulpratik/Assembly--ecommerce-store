import React, { useState } from 'react'
import { LiaArrowUpSolid } from "react-icons/lia";
import { Link } from 'react-router';
const Page2 = () => {
    const [data, setData] = useState([ {
        name: "Luggage",
        src: "https://assemblytravel.com/cdn/shop/files/Artboard_1.webp?v=1713267816&width=800"
    },{
        name: "Overnighter &  Duffle",
        src: "https://assemblytravel.com/cdn/shop/files/Artboard_4.webp?v=1713268019&width=800"
    }, {
        name: "Travel  Accessories",
        src: "https://assemblytravel.com/cdn/shop/files/Artboard_3_139163c0-4644-4a4b-82ad-93bbca03b2d3.webp?v=1713267951&width=800"
    }, {

        name: "Laptop Messenger & Backpacks",
        src: "https://assemblytravel.com/cdn/shop/files/Untitled-3.png?v=1750851170&width=800"
    }
    ])
    return (
        <div className='  flex justify-center items-center flex-col bg-white pt-20 pb-[100px] mb-[-100px] '>
            <div><h1 className='text-[50px] font-semibold pb-13 ' >Shop by Category</h1></div>
            <div className='imgdiv flex justify-center items-center flex-wrap gap-10' >
                {data.map((item ,idx) => {
                  return  <div key={idx} className='relative page2main '>
                      <Link to="/about">  <p className='absolute z-10 w-[190px] text-3xl cursor-pointer font-bold top-14 left-11 para text-green-950' >{item.name}</p>
                        
                        <img className='Page2img' src={item.src} alt="" /></Link>
                    </div>
                })}
            </div>
            <div>
                <Link to="/about" ><button className='w-2vw px-7 mt-10 flex justify-center text-white items-center gap-2 text-xl py-3 rounded-4xl btn '>SHOP ALL <span><LiaArrowUpSolid className='rotate-45 ' /></span></button></Link>
            </div>
        </div>
    )
}

export default Page2