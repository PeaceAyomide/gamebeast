import React, { useState, useEffect } from 'react'
import { TbPacman } from 'react-icons/tb'
import Ghostoftsuyumi from '../gameassets/ghost.jpg'
import VallhallaAssasinCreed from '../gameassets/val.jpg';
import GTA5 from '../gameassets/gta5.png'
import Halo from '../gameassets/helloinfinite.png'
import CyberPunk from '../gameassets/cyberpunk.webp'
import PUBG from '../gameassets/pubg.png'
import DyingLight from '../gameassets/dyinglight2.jpg'
import BattleField from '../gameassets/battlefield.jpg'
import ResidentsEvil from '../gameassets/village.png'
import FortNite from '../gameassets/fortnight.png'
import Uncharted from '../gameassets/Uncharted.jpg'
import GodOfWar from '../gameassets/God of War.jpg'
import Spiderman from '../gameassets/Spiderman.jpg'

import { MdDownloadForOffline } from 'react-icons/md'
import {AiFillStar} from 'react-icons/ai' 
import './Games.css'
import BicycleLoader from '../BikeLoader/BikeLoader'


const Games = () => {


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate some asynchronous loading (e.g., data fetching) here
    setTimeout(() => {
      setLoading(false); // Set loading to false when loading is complete
    }, 3000); // You can adjust the time as needed
  }, []);

 

  return (
    /*
New Section Starts
*/<>
      {loading ? (
        <BicycleLoader /> // Show the loader if loading is true
      ) : (

    <section className='new contain' id='new'>
      <div className="heading">
        <TbPacman className='bx'/>
        <h2>New Games</h2>
      </div> 
      {/*
Game Contents
*/}
      <div className="new-content">
        {/*
Box 1
*/}
        <div className="box">
          <img src={Ghostoftsuyumi} className="pictures" />
          <div className="box-text">
            <h2>Ghost of Tsushima</h2>
            <h3>Action</h3>
            <div className="rating-download">
              <div className="rating">
             <AiFillStar className='star'/>
                <span>4.9</span>
              </div>
               <a href="https://reworkedgames.eu/ghost-of-tsushima-download-pc-ver2-3/"><MdDownloadForOffline className='bxy icony'/></a>
            </div>
          </div>
        </div>


 {/*
Box 2
*/}
        <div className="box">
          <img src={VallhallaAssasinCreed} className="pictures" />
          <div className="box-text">
            <h2>Assassin's Creed: Valhalla</h2>
            <h3>Action</h3>
            <div className="rating-download">
              <div className="rating">
              <AiFillStar className='star'/>
            
                <span>4.0</span>
              </div>
              <a href="https://reworkedgames.eu/3-assassins-creed-valhalla-pc-download/"><MdDownloadForOffline className='bxy icony'/></a>
            </div>
          </div>
        </div>
         {/*
Box 3
*/}
        <div className="box">
          <img src={GTA5} className="pictures" />
          <div className="box-text">
            <h2>Grand Theft Auto V</h2>
            <h3>Action</h3>
            <div className="rating-download">
              <div className="rating">
              <AiFillStar className='star'/>
            
                <span>4.3</span>
              </div>
              <a href="https://reworkedgames.eu/gta-v-pc-downoad-full/"><MdDownloadForOffline className='bxy icony'/></a>
            </div>
          </div>
        </div>
         {/*
Box 4
*/}
        <div className="box">
          <img src={Halo} className="pictures" />
          <div className="box-text">
            <h2>Halo Infinite</h2>
            <h3>Action</h3>
            <div className="rating-download">
              <div className="rating">
              <AiFillStar className='star'/>
            
                <span>4.0</span>
              </div>
              <a href="https://reworkedgames.eu/?s=halo&post_type=post"><MdDownloadForOffline className='bxy icony'/></a>
            </div>
          </div>
        </div>
         {/*
Box 5
*/}
        <div className="box">
          <img src={CyberPunk} className="pictures" />
          <div className="box-text">
            <h2>Cyber Punk</h2>
            <h3>Action</h3>
            <div className="rating-download">
              <div className="rating">
              <AiFillStar className='star'/>
            
                <span>4.8</span>
              </div>
              <a href="https://reworkedgames.eu/cyberpunk-2077-pc-download-ver2-3/"><MdDownloadForOffline className='bxy icony'/></a>
            </div>
          </div>
        </div>
         {/*
Box 6
*/}
        <div className="box">
          <img src={PUBG} className="pictures" />
          <div className="box-text">
            <h2>PUBG: BATTLEGROUNDS</h2>
            <h3>Action</h3>
            <div className="rating-download">
              <div className="rating">
              <AiFillStar className='star'/>
            
                <span>4.1</span>
              </div>
              <a href="https://reworkedgames.eu/pubg-lite-new-version-download-full/"><MdDownloadForOffline className='bxy icony'/></a>
            </div>
          </div>
        </div>

         {/*
Box 7
*/}
        <div className="box">
          <img src={DyingLight} className="pictures" />
          <div className="box-text">
            <h2>Dying Light 2</h2>
            <h3>Action</h3>
            <div className="rating-download">
              <div className="rating">
              <AiFillStar className='star'/>
            
                <span>4.2</span>
              </div>
              <a href="https://reworkedgames.eu/dying-light-2-stay-human-pc-download-install-game/"><MdDownloadForOffline className='bxy icony'/></a>
            </div>
          </div>
        </div>

         {/*
Box 8
*/}
        <div className="box">
          <img src={ResidentsEvil} className="pictures" />
          <div className="box-text">
            <h2>Resident Evil</h2>
            <h3>Action</h3>
            <div className="rating-download">
              <div className="rating">
              <AiFillStar className='star'/>
            
                <span>4.6</span>
              </div>
              <a href="https://reworkedgames.eu/resident-evil-village-pc-download-ver1-4/"><MdDownloadForOffline className='bxy icony'/></a>
            </div>
          </div>
        </div>

        
         {/*
Box 9
*/}
        <div className="box">
          <img src={FortNite} className="pictures" />
          <div className="box-text">
            <h2>FortNite</h2>
            <h3>Action</h3>
            <div className="rating-download">
              <div className="rating">
              <AiFillStar className='star'/>
            
                <span>4.0</span>
              </div>
              <a href="https://reworkedgames.eu/2-fortnite-pc-download/"><MdDownloadForOffline className='bxy icony'/></a>
            </div>
          </div>
        </div>
      
        {/*
Box 10
*/}
        <div className="box">
          <img src={BattleField} className="pictures" />
          <div className="box-text">
            <h2>Battle Field 2042</h2>
            <h3>Action</h3>
            <div className="rating-download">
              <div className="rating">
              <AiFillStar className='star'/>
            
                <span>4.3</span>
              </div>
              <a href="https://reworkedgames.eu/3-battlefield-2042-pc-download/"><MdDownloadForOffline className='bxy icony'/></a>
            </div>
          </div>
        </div>

            {/*
Box 11
*/}
        <div className="box">
          <img src={Uncharted} className="pictures" />
          <div className="box-text">
            <h2>Uncharted</h2>
            <h3>Action</h3>
            <div className="rating-download">
              <div className="rating">
              <AiFillStar className='star'/>
            
                <span>4.6</span>
              </div>
              <a href="https://reworkedgames.eu/uncharted-legacy-of-thieves-collection-pc-download-ver1-2/"><MdDownloadForOffline className='bxy icony'/></a>
            </div>
          </div>
        </div>

            {/*
Box 12
*/}
        <div className="box">
          <img src={GodOfWar} className="pictures" />
          <div className="box-text">
            <h2>God of War</h2>
            <h3>Action</h3>
            <div className="rating-download">
              <div className="rating">
              <AiFillStar className='star'/>
            
                <span>4.3</span>
              </div>
              <a href="https://reworkedgames.eu/god-of-war-ragnarok-download-for-pc-ver1-04/"><MdDownloadForOffline className='bxy icony'/></a>
            </div>
          </div>
        </div>
            {/*
Box 13
*/}
        <div className="box">
          <img src={Spiderman} className="pictures" />
          <div className="box-text">
            <h2>Spider-Man</h2>
            <h3>Action</h3>
            <div className="rating-download">
              <div className="rating">
              <AiFillStar className='star'/>
            
                <span>4.9</span>
              </div>
              <a href="https://www.playstation.com/en-us/games/marvels-spider-man-remastered/pc/"><MdDownloadForOffline className='bxy icony'/></a>
            </div>
          </div>
        </div>
<br/><br/><br/><br/><br/><br/>
</div>
      
        </section>
      )}
 </>
  )
}

export default Games