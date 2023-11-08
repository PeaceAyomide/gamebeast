import React, {useState, useEffect } from 'react'
import './playstation.css'
import PS5 from '../assets/PS5Advance.png'
import { BsCart4 } from 'react-icons/bs';
import { BiLoader } from 'react-icons/bi';
import BicycleLoader from '../BikeLoader/BikeLoader'


const PlayStation5 = () => {
  const [isPurchased, setIsPurchased] = useState(false);

  const handlePurchaseClick = () => {
    setIsPurchased(true);

    // Simulate a delay and then reset to "PREORDER" state
    setTimeout(() => {
      setIsPurchased(false);
    }, 3000);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate some asynchronous loading (e.g., data fetching) here
    setTimeout(() => {
      setLoading(false); // Set loading to false when loading is complete
    }, 3000); // You can adjust the time as needed
  }, []);

 


  return (
    <>
    {loading ? (
      <BicycleLoader /> // Show the loader if loading is true
    ) : (
    <section class="about" id="about">
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <div class="about-content">
        
<h2 class="heading">PS<span className='five'>5</span></h2>
        <p>The PlayStation 5 (PS5) is a powerful gaming console from Sony, known for its custom hardware, 4K graphics, ray tracing, fast loading times, and a new DualSense controller with haptic feedback. It offers backward compatibility with most PS4 games, supports 3D audio for a more immersive experience, and features a faster user interface. The PS5 also has exclusive games, supports Ultra HD Blu-ray, and is a hub for streaming and multimedia. Its capabilities and features may have evolved since my last update, so it's advisable to check official sources for the latest information.</p>
       
      <button
        onClick={handlePurchaseClick}
        className='btnz'
      >
        {isPurchased ? (
          <>
            Loading <BiLoader />
          </>
        ) : (
          <a className='antz' href='https://www.jumia.com.ng/sony-playstation-5-console-68983373.html'>
            Get Yours<BsCart4 />
          </a>
        )}
      </button>
      </div>
      <div class="about-img">
   <img src={PS5} alt=""/> 
      </div>
      
</section>
)}
</>
  )
}

export default PlayStation5