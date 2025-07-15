import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
const Page3 = () => {
  const [luggageData] = useState([
    {
      title: "StarkPro Combo | Grey",
      description: "Set of 3, Cabin",
      price: "₹ 14,999",
      image: "https://images.unsplash.com/photo-1623137637515-b01b2fbbbada?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Stark Combo | Ivory",
      description: "Set of 3, Cabin",
      price: "₹ 13,999",
      image: "https://images.unsplash.com/photo-1585916420730-d7f95e942d43?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "StarkPro Combo | Green",
      description: "Set of 3, Cabin",
      price: "₹ 14,999",
      image: "https://images.unsplash.com/photo-1622560481979-f5b0174242a0?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Stark Combo | Grey",
      description: "Set of 3, Cabin",
      price: "₹ 13,999",
      image: "https://plus.unsplash.com/premium_photo-1679046285183-bd49ad03e9ea?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "StarkPro Combo | Ivory",
      description: "Set of 3, Cabin",
      price: "₹ 14,999",
      image: "https://plus.unsplash.com/premium_photo-1679046361210-e7a5cc468de1?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Rover Pro Combo | Moon-White",
      description: "Set of 3, Cabin",
      price: "₹ 17,999",
      image: "https://plus.unsplash.com/premium_photo-1678453389999-ae673a7d8e56?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "StarkPro Combo | Blue",
      description: "Set of 3, Cabin",
      price: "₹ 14,999",
      image: "https://plus.unsplash.com/premium_photo-1679267958660-917122e39dd7?q=80&w=663&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Rover Pro Combo | Wine",
      description: "Set of 3, Cabin",
      price: "₹ 17,999",
      image: "https://plus.unsplash.com/premium_photo-1679046285181-c45192a6a49d?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Stark Combo | Green",
      description: "Set of 3, Cabin",
      price: "₹ 13,999",
      image: "https://plus.unsplash.com/premium_photo-1679314407982-fa0974da0602?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Rover Combo | Moon-White",
      description: "Set of 3, Cabin",
      price: "₹ 16,999",
      image: "https://plus.unsplash.com/premium_photo-1679314408078-534c837acb74?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]);
// const [luggageData, setLuggageData] = useState([])
//   async function fetchData() {
//     try {
//       const res = await fetch("http://localhost:3001/products");
//       const json = await res.json();
//       setLuggageData(json);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);




  return (
    <div className='w-screen py-10 px-4 bg-white'>
      <h1 className='text-[40px] text-center font-semibold text-green-900 mb-10'>
        Pack More, Save More
      </h1>
      <div className='parentCard'>
        {luggageData.map((item, index) => {
          return <Link key={index}
            to={
              `/specific/` +
              encodeURIComponent(item.title) + `/` +
              encodeURIComponent(item.image) + `/` +
              encodeURIComponent(item.description) + `/` +
              encodeURIComponent(item.price)
            }
          >
            <div key={item.id} className='Card ' >
              <div className='imgdiv1' ><img className='cardimg' src={item.image} alt="" /></div>
              <div className="info">
                <h1>{item.title}</h1>
                <div className="childinfo relative ">
                  <p className='desc' >{item.description}</p>
                  <h3 className='font-bold text-black' >{item.price}</h3>
                </div>
              </div>
            </div>

          </Link>
        }
        )}
      </div>
    </div>
  );
}
export default Page3