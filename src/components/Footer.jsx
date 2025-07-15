const Footer = () => {
  return (
    <footer className="bg-teal-900 text-white px-8 py-12  ">
      <div className="max-w-7xl  mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        
       
        <div className=" flex flex-col gap-20 text-xl  " >
          <div>
            <h2 className="font-semibold mb-2"><img className="h-[29px]" src="https://assemblytravel.com/cdn/shop/files/logo_0c55b4f7-6551-40fc-8d9c-e65b748fdd04.png?v=1708682771&width=320" alt="" /></h2>
          <p className="mb-4">
            Want to stay up to date with news and updates about our products?
          </p>
          <div className="flex items-center border border-white rounded px-2 py-1">
            <input
              type="email"
              placeholder="E-mail"
              className="bg-transparent text-white flex-1 outline-none placeholder-white"
            />
            <button className="text-white text-lg">→</button>
          </div>
          </div>
           <div>
          <h2 className="font-semibold mb-2">Contact Us</h2>
          <p>
            <span className="font-semibold">Office:</span> Third Floor, CL House,
            Yusuf Sarai Community Center, Green Park, Delhi-110049
          </p>
          <p className="mt-2">
            <span className="font-semibold">CIN:</span> U19100HR2021PTC096406
          </p>
          <p className="mt-4">
            For any assistance related to the product, please contact:
          </p>
          <p className="font-semibold">Customer Care Executive</p>
          <p>Email: contactus@assemblytravel.com</p>
          <p>Phone: +91 85888 40181</p>
          <p>Timing: 10:00 AM - 7:00 PM (Weekdays)</p>
          <p className="mt-4 font-semibold">For Corporate & Bulk orders,</p>
          <p>
            WhatsApp or Call us :{' '}
            <a href="tel:+918588840368" className="underline">
              +91 8588840368
            </a>
          </p>
        </div>
        </div>

        <div className="text-xl" >
          <h2 className="font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-0">
            <li>About Us</li>
            <li>Happy Users</li>
            <li>Blogs</li>
            <li>Careers</li>
            <li>Track Order</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div className="text-xl">
          <h2 className="font-semibold mb-2">Policies</h2>
          <ul className="space-y-0">
            <li>Shipping</li>
            <li>Cancellation/Return/Refund Policy</li>
            <li>Payments</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Warranty</li>
          </ul>
        </div>

       
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-white pt-4 text-sm flex flex-col md:flex-row justify-between items-center">
        <p>© 2025 - Assembly - Developed by D2Cbox</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" aria-label="Facebook">🌐</a>
          <a href="#" aria-label="Instagram">📸</a>
          <a href="#" aria-label="YouTube">📺</a>
          <a href="#" aria-label="LinkedIn">💼</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
