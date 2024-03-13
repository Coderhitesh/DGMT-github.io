import React, { useEffect } from 'react'
// import WebsiteDevelopmentbg from '../../New folder/website-development-bg.jpg'
import graphic from '../../New folder/graphics-bg.jpg'
import websiteDesigner from '../../New folder/website-designing-bg.jpg'
import seo from '../../New folder/search-engine-marketing-bg.jpg'
import digitalMarketing from '../../New folder/digital-marketing-bg.jpg'
import appDevelopment from '../../New folder/app-development-bg.jpg'
import socialMediaMarketing from '../../New folder/social-media-marketing-bg.jpg'
import { Link } from 'react-router-dom'
import CallbackForm from '../callbackForm/CallbackForm'
import redribbon from '../../New folder/red-ribbon-1.png'
import './b2b.css'

function B2B() {
    useEffect(()=>{
        window.scrollTo({
          top:0,
          behavior:"smooth"
        })
      },[])
  return (
    
    <>
      <section className='web-development-section'>
                <div className='container'>
                    <div className='up'>
                        <div className='left-container'>
                            <div className='img'>
                                <img loading="lazy" alt='img' src={'https://i.ibb.co/rmHmWcv/b2b.jpg'} />
                                <div className='content'>
                                    <h1>B2B</h1>
                                    <p>B2B services tailored for enhanced efficiency and growth.</p>
                                </div>
                            </div>
                            <div className='about-graphics'>
                                <div className='heading'>
                                    <img loading="lazy" src={redribbon} alt='img' />
                                    <h2>We Provide B2B Services</h2>
                                </div>
                                <p>Confirmbuyers.com specializes in delivering comprehensive B2B services designed to optimize operational efficiency, foster growth, and drive profitability for our clients. With a focus on innovation and strategic solutions, we tailor our offerings to meet the unique needs of each business, ensuring maximum impact and value. Partner with us to elevate your business and achieve sustainable success in the marketplace.</p>
                            </div>
                            <div className='list-about-graphics'>
                                <p>Confirmbuyers.com offers comprehensive B2B services, combining technical expertise with creative flair to deliver outstanding B2B services. Our services include:</p>
                                <ul>
                                    <li> <span>1) Specialized B2B Services:-</span>confirmbuyers.com provides targeted services catering specifically to businesses.</li>
                                    <li><span>2) Efficiency Enhancement:-</span>  Services are designed to improve operational efficiency within client organizations.</li>
                                    <li><span>3) Growth Focus:-</span> Aim is to stimulate growth opportunities for client businesses.</li>
                                    <li><span>4) Innovative Solutions:-</span> Emphasis on creative and forward-thinking approaches to problem-solving.</li>
                                    <li><span>5) Tailored Offerings:-</span> Services are customized to address the unique needs of each business.</li>
                                </ul>
                            </div>




                        </div>
                        <div className='right-container'>
                            <div className='popular-section'>
                                <h2>Popular Services We Offer:</h2>
                                <div className='all-services'>
                                    <Link to='/Web-Development' className='service-same service-1'>
                                        <img loading="lazy" alt='img' src={websiteDesigner} />
                                        <p>Website Designing</p>
                                    </Link>
                                    <Link to='/Graphics-Designing ' className='service-same service-2'>
                                        <img loading="lazy" alt='img' src={graphic} />
                                        <p>Graphics</p>
                                    </Link>
                                    <Link to='/Digital-Marketing' className='service-same service-3'>
                                        <img loading="lazy" alt='img' src={digitalMarketing} />
                                        <p>Digital Marketing</p>
                                    </Link>
                                    <Link to='/Search-Engine-Optimization' className='service-same service-4'>
                                        <img loading="lazy" alt='img' src={seo} />
                                        <p>Search Engine Optimization</p>
                                    </Link>
                                    <Link to='/App-Development' className='service-same service-5'>
                                        <img loading="lazy" alt='img' src={appDevelopment} />
                                        <p>App Development</p>
                                    </Link>
                                    <Link to='/Social-Media-Marketing' className='service-same service-6'>
                                        <img loading="lazy" alt='img' src={socialMediaMarketing} />
                                        <p>Social Media Marketing</p>
                                    </Link>
                                </div>
                            </div>
                            <div className='callback-form'>
                                <CallbackForm />
                            </div>
                            <div className='tag-section'>
                                <h2>Tags:</h2>
                                <div className='all-tag'>
                                    <a href='/?'>Adobe Photoshop</a>
                                    <a href='/?'>Adobe Illustrator</a>
                                    <a href='/?'>Adobe InDesign</a>
                                    <a href='/?'>Figma</a>
                                    <a href='/?'>Canva</a>
                                    <a href='/?'>Procreate</a>
                                    <a href='/?'>Affinity Photo</a>
                                    <a href='/?'>Crello</a>
                                    <a href='/?'>Adobe Spark</a>
                                    <a href='/?'>Wacom Tablets</a>
                                    <a href='/?'>InVision</a>
                                    <a href='/?'>Gravit Designer</a>
                                    <a href='/?'>Affinity Designer</a>
                                    <a href='/?'>Procreate</a>
                                </div>
                            </div>
                        </div>
                    </div>
           
                </div>
            </section>
    </>
  )
}

export default B2B
