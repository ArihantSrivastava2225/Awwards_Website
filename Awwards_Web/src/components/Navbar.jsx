import React from 'react'
import { navLinks } from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Navbar = () => {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: "nav",
                start: "bottom top", // means when the bottom of the navbar reaches the top of the viewport then thats when we start the animation or start applying this class. ALso first indicates when the animation starts and second indicates when the animation ends.
            }
        });

        navTween.fromTo('nav', {backgroundColor: 'transparent'}, {
            backgroundColor: "00000050",
            backgroundFilter: "blur(10px)",
            duration: 1,
            ease: 'power1.inOut'
        });
    })
  return (
    <nav>
      <div>
        <a href="#home" className='flex items-center gap-2'>
            <img src="/images/logo.png" alt="" />
            <p>Velvet Pour</p>
        </a>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
