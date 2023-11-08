import React, { useState, useEffect } from 'react'
import './services.css'
import {IoLogoGameControllerB} from 'react-icons/io'
import {GiGamepadCross} from 'react-icons/gi'
import { BiGame } from 'react-icons/bi'
import { FaHeadphones } from 'react-icons/fa'
import { GiPistolGun } from 'react-icons/gi'
import {BsLaptop} from 'react-icons/bs'
import BicycleLoader from '../BikeLoader/BikeLoader'

const Services = () => {


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
    <div class="services">
    <div class="box" style={{ '--clr': '#ade8f4' }}> 
        <div class="content">
            <div class="icon"><IoLogoGameControllerB/></div>
            <div class="text">
                <h3>Online Gaming</h3>
                <p>In the world of online gaming, players have the power to create a more positive and supportive community. By offering guidance to newcomers, being respectful in interactions, and supporting fellow gamers, we can foster a welcoming environment. Additionally, addressing bullying, participating in charity events, creating helpful content like tutorials, and building a sense of camaraderie all contribute to a better gaming experience. Teamwork and sportsmanship should be prioritized to ensure everyone enjoys their time in the virtual world.</p>
                <a href="#">Read More</a>
            </div>
        </div>
    </div>
    <div class="box" style={{ '--clr': '#eb5ae5' }}> 
        <div class="content">
            <div class="icon"><GiGamepadCross/></div>
            <div class="text">
                <h3>Development</h3>
                <p>The realm of game development, collaboration and support are crucial. Developers can assist one another by sharing knowledge, offering constructive feedback, and providing mentorship to newcomers. Building a strong community through forums and networking can lead to fruitful partnerships and shared resources. Moreover, promoting diversity and inclusivity in game development teams and projects is essential for fostering innovation and creativity within the industry</p>
                <a href="#">Read More</a>
            </div>
        </div>
    </div>
    <div class="box" style={{ '--clr': '#5b98eb' }}> 
        <div class="content">
            <div class="icon"><BiGame/></div>
            <div class="text">
                <h3>Competition</h3>
                <p>Gamers can enhance their experiences by offering help and encouragement to their fellow competitors. Sharing strategies, sharing tips and tricks, and practicing good sportsmanship not only elevate the level of competition but also create a positive atmosphere. Moreover, competitors can organize charity tournaments, raising funds for noble causes through their passion for gaming. Ultimately, supporting each other in the pursuit of victory makes game competitions more rewarding for everyone involved.</p>
                <a href="#">Read More</a>
            </div>
        </div>
      </div>
      <div class="box" style={{ '--clr': '#ccc5b9' }}> 
        <div class="content">
            <div class="icon"><FaHeadphones/></div>
            <div class="text">
                <h3>Audio</h3>
                <p>Sound designers, composers, and audio engineers can work together to create immersive and engaging auditory experiences for players. By sharing their knowledge, feedback, and resources, they can collectively elevate the quality of in-game soundscapes. Additionally, offering mentorship to newcomers in the field and promoting inclusivity can help nurture a diverse and talented audio community within the gaming industry. Ultimately, supporting one another in the pursuit of exceptional audio enhances the overall gaming experience.</p>
                <a href="#">Read More</a>
            </div>
        </div>
      </div>
      <div class="box" style={{ '--clr': '#40916c' }}> 
        <div class="content">
            <div class="icon"><GiPistolGun/></div>
            <div class="text">
                <h3>Aim Assist</h3>
                <p>Beginner-level gaming, having an "auto-aim" feature can provide valuable support. It helps new players by assisting in aiming and targeting, making games more enjoyable and less frustrating. Auto-aim simplifies the learning curve, allowing beginners to focus on other aspects of gameplay and gradually improve their skills. This feature encourages newcomers to stay engaged and learn at their own pace, ultimately enhancing their gaming experience.</p>
                <a href="#">Read More</a>
            </div>
        </div>
      </div>
      <div class="box" style={{ '--clr': '#ade8f4' }}> 
        <div class="content">
            <div class="icon"><BsLaptop/></div>
            <div class="text">
                <h3>PC</h3>
                <p>In the context of PC gaming, ensuring that games are playable on computers is crucial. Developers can make games more accessible to a wider audience by optimizing them for PC. This involves providing customizable settings, support for different hardware configurations, and an intuitive user interface. By doing so, players can enjoy a smoother and tailored gaming experience on their computers, regardless of their hardware specifications or preferences, making PC gaming more inclusive and enjoyable.</p>
                <a href="#">Read More</a>
            </div>
        </div>
    </div>
                    </div>
                    )}
                    </>
  )
}

export default Services