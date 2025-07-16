import React from 'react'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'

const Hero = () => {
    useGSAP(() => {
        const heroSplit = new SplitText('.title', { type: 'chars, words'});
        const paragraphSplit = new SplitText('.subtitle', { type: 'lines' });

        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));  //this means that we are adding a class to each character in the title so that we can apply the gradient effect to each character.

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.05,
        });

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
            delay: 1, // delay the paragraph animation to start after the title animation
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top', //we will start when top of the hero section reaches the top of the screen
                end: 'bottom top', //and end when the bottom of the hero section reaches the top of the screen
                scrub: true, //this means that the animation will be linked to the scroll position
            }
        })
          .to('right-leaf', { y: 200 }, 0)
          .to('left-leaf', { y: -200 }, 0)
          //thus as we scroll down, the left leaf moves up as we scroll and the right leaf moves down as we scroll.
    }, [])
  return (
    <section id='hero' className='noisy'>
      <h1 className='title'>MOJITO</h1>

      <img src="/images/hero-left-leaf.png" alt="left-leaf" className='left-leaf' />
      <img src="/images/hero-right-leaf.png" alt="right-leaf" className='right-leaf' />

      <div className='body'>
        <div className='content'>
          <div className='space-y-5 hidden md:block'>
            <p>Cool. Crisp. Classic.</p>
            <p className='subtitle'>
                Sip the Spirit <br /> of Summer
            </p>
          </div>

          <div className='view-cocktails'>
            <p className='subtitle'>
              Every cocktail on our menu is a blend of premium ingredients, creative, flair, and timeless recipies - designed to delite your senses.
            </p>
            <a href="#cocktails">View Cocktails</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
