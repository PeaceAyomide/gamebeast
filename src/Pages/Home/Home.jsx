import React, { useState, useEffect } from 'react';
import { SiNintendogamecube } from 'react-icons/si';
import { BiLoader } from 'react-icons/bi';
import './home.css'
import GamePad  from '../assets/GamePad.png'
import Socialmedia from '../../Components/Socialmedia/Socialmedia';
import { signOut } from 'firebase/auth'
import { database } from './FirbaseConfig'
import { useNavigate } from 'react-router-dom'
import BicycleLoader from '../BikeLoader/BikeLoader'


const Home = () => {

  const history = useNavigate()


  const handleClick = () => {
    signOut(database).then(
      val => {
        console.log(val, 'val')
  history('/')
    }
  )
}

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
    <section className='home'>
    <div className='home-content'>
      <h3>
        Welcome Players to
      </h3>
      <h1>Gamers <span className='zone'>Zone</span></h1>
      <p>
      Discover a gaming experience like no other at Ranker Realms! We've got your gaming cravings covered with the latest and greatest games in the virtual realm. Join our gaming community and embark on epic adventures, conquer challenging quests, and connect with fellow gamers from all corners of the globe.      </p>
      <Socialmedia/>
      <button
        onClick={handlePurchaseClick}
        className='btn'
      >
        {isPurchased ? (
          <>
            Loading <BiLoader />
          </>
        ) : (
          <a>
            Lets Play <SiNintendogamecube />
          </a>
        )}
        </button>
        <button className='bten' onClick={handleClick}  style={{ marginLeft: '10px' }}>LogOut</button>
    </div>
    <div className='home-img'>
      <img src={GamePad} alt="" />
    </div>
  </section>
 )}
 </>
  )
}

export default Home