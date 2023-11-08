import React, { useEffect } from 'react';
import './navbar.css';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { IoLogoGameControllerB } from 'react-icons/io';
import { BsPlaystation } from 'react-icons/bs';
import { GrServices } from 'react-icons/gr';
import { FcManager } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Navbar = () => {

  useEffect(() => {
    const navLinkEls = document.querySelectorAll('.nav__link');

    navLinkEls.forEach(navLinkEl => {
      navLinkEl.addEventListener('click', () => {
        document.querySelector('.active-link')?.classList.remove('active-link');
        navLinkEl.classList.add('active-link');
      });
    });
  }, []);




  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          Game$🎮
        </a>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to='/home' className="nav__link active-link">
                <i className="bx bx-home-alt nav__icon">
                  <BsFillHouseDoorFill className='iconz'/>
                </i>
                <span className="nav__name">Home</span>
              </Link>
            </li>

            <li className="nav__item">
              <Link to='/games' className="nav__link">
                <i className="nav__icon">
                  <IoLogoGameControllerB className='iconz' />
                </i>
                <span className="nav__name">Games</span>
              </Link>
            </li>

            <li className="nav__item">
              <Link to='/playstation5' className="nav__link">
                <i className="nav__icon">
                  <BsPlaystation className='iconz' />
                </i>
                <span className="nav__name">PS5</span>
              </Link>
            </li>

            <li className="nav__item">
              <Link to='/services' className="nav__link">
                <i className="nav__icon">
                  <GrServices className='iconz' />
                </i>
                <span className="nav__name">Services</span>
              </Link>
            </li>

            <li className="nav__item">
              <Link to='/myself' className="nav__link">
                <i className="nav__icon">
                  <FcManager className='iconz' />
                </i>
                <span className="nav__name">Me</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
