import React from 'react'
import './socialmedia.css'
import {BsDiscord} from 'react-icons/bs'
import {BsTwitch} from 'react-icons/bs'
import {AiFillYoutube} from 'react-icons/ai'
import {RiTwitterXFill} from 'react-icons/ri'

const Socialmedia = () => {
  return (
    <div class="social-media">
    <a href="https://top.gg/servers/653304864444645385?s=04577561c611f"><BsDiscord/></a>
    <a href="https://www.twitch.tv/ninja"><BsTwitch/></a>
    <a href="https://x.com/FortniteGame/status/1717889001632174342?s=20"><RiTwitterXFill /></a>
    <a href="https://youtu.be/dpqqXNNkxyk"><AiFillYoutube/></a>
</div>
  )
}

export default Socialmedia