import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProductContext } from './Context'; 

function Specific() {
  const { title, image, description, price } = useParams();
  const { cart, setCart } = useContext(ProductContext);

  function HandleCart() {
    const item = {
      title: decodeURIComponent(title),
      image: decodeURIComponent(image),
      description: decodeURIComponent(description),
      price: price
    };
    setCart([...cart, item]);
  }

  return (
    <div className="specific">
      <Link to="/">
        <button className="absolute top-[85px] right-[80px] text-xl border-2 px-4 py-1 rounded-xl font-bold cursor-pointer btn1">Home</button>
      </Link>
      <Link to="/about">
        <button className="absolute top-[145px] right-[80px] text-xl border-2 py-1 rounded-xl font-bold cursor-pointer btn1 btn2">Shop</button>
      </Link>
      <div className="Card scard">
        <img
          src={decodeURIComponent(image)}
          alt={decodeURIComponent(title)}
          className="h-90 w-100"
        />
        <h2>{decodeURIComponent(title)}</h2>
        <p>{decodeURIComponent(description)}</p>
        <p>Price: {price}</p>
        <button
          className="border-1 px-3 py-1 bg-[#fb641b] text-white font-semibold rounded pinbtn cursor-pointer"
          onClick={HandleCart}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default Specific;
