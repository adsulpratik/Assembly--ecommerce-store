import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from './Context';

const Cart = () => {
    const { cart } = useContext(ProductContext);
    const [finalPrice, setFinalPrice] = useState(0);
    const [delivary, setDelivary] = useState(0);
    let Totalamt = finalPrice + delivary
    
    useEffect(() => {
        cart.length &&  setDelivary(279)
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            const cleanPrice = parseInt(cart[i].price.replace(/[₹,]/g, ""));
            total += cleanPrice;
        }
        setFinalPrice(total);
    }, [cart]);

    return (
        <div className="bg-[#f1f3f6] pb-14">
            <div className="text-xl text-black p-20 flex justify-evenly pb-[25px] pt-5 gap-6">
                <div className="w-[830px] bg-white rounded-xl p-3">
                    <div className="h-[60px] flex justify-between text-[14px] items-center rounded border border-gray-400 mb-3">
                        <h3 className="p-3">From Saved Addresses</h3>
                        <button className="border rounded mx-3 px-3 py-2 text-blue-900 font-semibold cursor-pointer pinbtn">
                            Enter Delivery Code
                        </button>
                    </div>

                    <div className=" h-[300px] overflow-auto p-3 border border-gray-400 rounded">
                        {cart.map((item, index) => (
                            <div key={index} className="flex items-center gap-5 mb-5">
                                <img src={item.image} alt={item.title} className="w-20 h-20 object-cover" />
                                <div>
                                    <h4 className="font-bold">{item.title}</h4>
                                    <p>{item.description}</p>
                                    <p className="text-[#fb641b] font-semibold">{item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="h-fit relative p-3 bg-white w-[103%] rounded-xl ml-[-11px]">
                        <button className="border-2 bg-[#fb641b] text-white font-bold cursor-pointer pinbtn px-8 py-3 relative ml-[75%]">
                            Place Order
                        </button>
                    </div>
                </div>

                <div>
                    <div className="w-[400px] h-[300px] text-xl bg-white p-5 border border-gray-400 rounded-xl">
                        <div className="font-semibold text-lg mb-4 ">Price Details</div>
                        <div className="flex  justify-between text-base font-semibold my-5 ">
                            <span  >Total Items: {cart.length}</span>
                            <span>{finalPrice.toLocaleString("en-IN", { style: "currency", currency: "INR" })}</span>
                        </div>
                        <div className="flex  justify-between text-base font-semibold">
                            <span  > Delivary Charges:  </span>
                            <span>{delivary.toLocaleString("en-IN", { style: "currency", currency: "INR" })}</span>
                        </div>
                        <hr className='mt-10' />
                        <div className="flex  justify-between text-base font-semibold">
                            <span  > Total Amount:  </span>
                            <span>{Totalamt.toLocaleString("en-IN", { style: "currency", currency: "INR" })}</span>
                        </div>
                    </div>

                    <div className="h-[60px] w-[400px] py-6 px-3 text-[18px]">
                        <p>Safe and Secure Payments. Easy returns. 100% Authentic products.</p>
                    </div>
                </div>
            </div>

            <div className="h-[81px] text-[14px] rounded-xl border mb-5 border-gray-400 flex justify-around items-center text-black bg-white mx-10 py-10">
                <p className="endpara cursor-pointer">
                    Policies: Returns Policy · Terms of use · Security · Privacy © 2007-2025 Flipkart.
                </p>
                <p className="endpara cursor-pointer">Need help? Visit the Help Center or Contact Us</p>
            </div>
        </div>
    );
};

export default Cart;
