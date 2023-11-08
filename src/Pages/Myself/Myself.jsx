import React, { useState, useEffect } from 'react'
import './myself.css'
import Peace from '../assets/Peace.jpeg'
import {BsWhatsapp} from 'react-icons/bs'
import {RiTwitterXLine} from 'react-icons/ri'
import BicycleLoader from '../BikeLoader/BikeLoader'


const Myself = () => {

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
    <section className='bodys'>
    <div class="card ">
        <div class="card-image">
            <img src={Peace} alt="Profile image"/>
        </div>
        <p class="name pin" >Peace Ayomide</p>
        <p>Software Developer</p>
        <p>I'm Peace Ayomide, a web developer,I take great pride in my proficiency in modern web development, constantly staying abreast of the latest trends and technologies. It's my passion to create innovative digital solutions, and I'm committed to delivering the best results. I'm excited about the ever-evolving nature of web development, as it provides me with continuous opportunities for growth and improvement. If you share the same enthusiasm for the digital world, I'd love to collaborate with you on exciting projects. Let's harness the power of technology and design to create something truly exceptional, and I've created this lovely website, please feel free to explore and enjoy. You can  reach out to me through Twitter or Whatsapp</p>
        <div class="socials">
            <button class="github btnn"><a className='linkt' href="https://twitter.com/Diamond_Dogs123?t=FncescRWJ5p5JNFsVqaAUg&s=08"><RiTwitterXLine/></a></button>
            <button class="pinterest btnn" ><a className='link' href="https://wa.me/+2348102608378"><BsWhatsapp/></a></button>
        </div>
      </div>
          </section>
           )}
           </>
  )
}

export default Myself