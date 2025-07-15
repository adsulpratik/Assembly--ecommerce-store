import React from 'react'
import { useState } from 'react'
const Page6 = () => {
    const [cardData, setcardData] = useState([
        {
            image: "https://assemblytravel.com/cdn/shop/files/Screenshot_2023-12-16_at_11.16.webp?v=1722335141&width=300",
            title: "Just the thing I needed for my vacation.",
            desc: " I'm completely in love with this luggage - looks & functionality both. Well for starters, it has a sturdy build quality and ample space. Also, appreciate the packing cubes as they come in handy for terrific organisation. Overall, can't wait to take this one for a spin on my next vacation!! Very impressed!!!",
            Author: "@Aparna"
        }, {
            image: "https://assemblytravel.com/cdn/shop/files/testimonial-4.webp?v=1706690037&width=300",
            title: "My perfect travel pal",
            desc: " The combination of high build quality and details has won me over. I have the cabin luggage which is perfect for my 3-4 day trips.  really feel secure with the Keyless TSA lock and the details on the luggage act as my reminder to switch off from the world and take a much-needed break. Looking forward to my vacation now!",
            Author: "@Prakriti & Ashish"
        }, {
            image: "https://assemblytravel.com/cdn/shop/files/testimonial-2.webp?v=1706690038&width=300",
            title: "A travel essential",
            desc: " It seems like I had been searching for something like this for a while. The design quality is impeccable, and the exterior is sturdy. Great buy for an affordable price; what I love the most is the 5-year warranty as I always want to invest in products that last a long time. I chose it because of its intricate details.",
            Author: "@Jagriti K"
        }
    ])
    return (
        <div className='Page6 pt-16 ' >
            <h1 className='text-[40px] w-fit m-auto font-semibold  ' >Listen to what they say!</h1>
            <div className="card min-h-screen flex justify-evenly items-center ">
                {cardData.map((item, idx) => {
                    return <div key={idx}  className="  card1 mt-[-40px] cursor-pointer bg-white w-[350px] h-[550px] hover:mb-3 shadow-2xl rounded-2xl">
                        <img className='h-[50%] w-full  rounded-t-2xl ' src={item.image} alt="" />
                        <div className='p-3 ' ><h1 className='font-bold' >{item.title}</h1>
                            <p className='' >
                                {item.desc}

                            </p>
                            <h3 className='font-semibold' >{item.Author}</h3></div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Page6