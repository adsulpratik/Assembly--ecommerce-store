import React from 'react'

const Page5 = () => {
    return (
        <div className='min-h-screen w-screen relative ' >
            <img className='w-full h-full object-cover ' src="https://assemblytravel.com/cdn/shop/files/image_2.jpg?v=1706697563&width=1400" alt="" />
            <div className="box  absolute text-white bottom-30 p-10  ">
                <h1 className='text-[40px] font-bold px-20 ' >Thoughtfully Designed</h1>
                <div className="sepline1  "> </div>
                   <div className='flex justify-between px-20 items-center' >
                     <div className="b1 w-[250px]">
                        <h1 className='text-2xl' >Purposeful</h1>
                        <p className='text-zinc-400' >
                            Every idea is planned and executed with conscious thought about travellers.</p>
                    </div>
                    <div className="b2 w-[250px]">
                        <h1 className='text-2xl' >Articulate</h1>
                        <p className='text-zinc-400' >
                            Our luggage is designed based on travellers' feedback to ensure worry-free journeys.

                        </p>
                    </div>
                    <div className="b3 w-[250px]">
                        <h1 className='text-2xl' >Workshop</h1>
                        <p className='text-zinc-400' >
                            Our pieces are crafted with top industry practices, tested, approved and built to last a lifetime.

                        </p>
                    </div>
                   </div>

               
                <div className="box2">

                </div>
            </div>
        </div>
    )
}

export default Page5