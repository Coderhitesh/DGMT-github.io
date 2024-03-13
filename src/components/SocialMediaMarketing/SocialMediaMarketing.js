import React, { useEffect } from 'react'
import './socialMediaMarketing.css'
import graphic from '../../New folder/graphics-bg.jpg'
import websiteDesigner from '../../New folder/website-designing-bg.jpg'
import websiteDevelopment from '../../New folder/website-development-bg.jpg'
import seo from '../../New folder/search-engine-marketing-bg.jpg'
import digitalMarketing from '../../New folder/digital-marketing-bg.jpg'
import appDevelopment from '../../New folder/app-development-bg.jpg'
import socialMediaMarketing from '../../New folder/social-media-marketing-bg.jpg'
import { Link } from 'react-router-dom'
import CallbackForm from '../callbackForm/CallbackForm'
import redribbon from '../../New folder/red-ribbon-1.png'

function SocialMediaMarketing() {
    useEffect(()=>{
        window.scrollTo({
          top:0,
          behavior:"smooth"
        })
      },[])
  return (
    <>
      <section className='social-media-marketing-section'>
                <div className='container'>
                    <div className='up'>
                        <div className='left-container'>
                            <div className='img'>
                                <img loading="lazy" src={socialMediaMarketing} />
                                <div className='content'>
                                    <h1>Social Media Marketing</h1>
                                    <p>Elevate Your Brand with Our Marketing Expertise</p>
                                </div>
                            </div>
                            <div className='about-graphics'>
                                <div className='heading'>
                                    <img loading="lazy" src={redribbon} alt='' />
                                    <h2>We Provide Social Media Marketing Services</h2>
                                </div>
                                <p>DGMT's Social Media Marketing services are a dynamic blend of creativity and strategy, designed to propel your brand to new heights in the digital landscape. Our expert team crafts targeted campaigns that resonate with your audience across platforms such as Facebook, Instagram, Twitter, and LinkedIn. We focus on optimizing engagement, fostering meaningful interactions, and building a strong online community around your brand. Content curation is a cornerstone of our approach, ensuring that every post reflects your brand's identity and encourages audience interaction. With a keen eye on analytics, we continually refine our strategies, maximizing reach and delivering measurable results.</p>
                            </div>
                            <div className='list-about-graphics'>
                                <p>Certainly! DGMT's graphic design services are designed to cater to a spectrum of visual communication needs. Here's more information on the key aspects of our offerings:</p>
                                <ul>
                                    <li> <span>1) Targeted Campaigns:-</span> Craft tailored campaigns based on audience demographics and interests.</li>
                                    <li><span>2) Engagement Optimization:-</span> Foster meaningful interactions to enhance user engagement and brand loyalty.</li>
                                    <li><span>3) Content Curation:-</span> Create compelling and shareable content aligned with brand identity.</li>
                                    <li><span>4) Platform Expertise:-</span> Utilize in-depth knowledge of Facebook, Instagram, Twitter, and LinkedIn.</li>
                                    <li><span>5) Analytics Insight:-</span> Leverage analytics to refine strategies, maximize reach, and achieve tangible results.</li>
                                    <li><span>6) Brand Persona Enhancement:-</span> Develop and maintain a consistent brand voice for heightened recognition.</li>
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
                                    <Link to='' className='service-same service-6'>
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

export default SocialMediaMarketing
