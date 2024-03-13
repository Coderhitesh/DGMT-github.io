import React, { useEffect } from 'react'
import './graphics.css'
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

function Graphics() {
    useEffect(()=>{
        window.scrollTo({
          top:0,
          behavior:"smooth"
        })
      },[])
    return (
        <>
            <section className='graphics-section'>
                <div className='container'>
                    <div className='up'>
                        <div className='left-container'>
                            <div className='img'>
                                <img loading="lazy" src={graphic} alt='img' />
                                <div className='content'>
                                    <h1>Graphic Designing</h1>
                                    <p>Elevate Your Brand with Our Exceptional Graphics Design Services</p>
                                </div>
                            </div>
                            <div className='about-graphics'>
                                <div className='heading'>
                                    <img loading="lazy" src={redribbon} alt='img' />
                                    <h2>We Provide Graphic Designing Services</h2>
                                </div>
                                <p>DGMT offers comprehensive graphic design services, blending creativity and technical expertise to deliver compelling visual solutions. Our services encompass logo design, branding, marketing collateral, and digital assets, ensuring a cohesive and impactful brand identity. From concept to execution, we prioritize client goals, creating designs that resonate with target audiences and elevate brand presence across diverse platforms. With a focus on innovation and aesthetics, DGMT's graphic design services aim to enhance communication, foster brand recognition, and contribute to a visually compelling and memorable brand experience.</p>
                            </div>
                            <div className='list-about-graphics'>
                                <p>Certainly! DGMT's graphic design services are designed to cater to a spectrum of visual communication needs. Here's more information on the key aspects of our offerings:</p>
                                <ul>
                                    <li> <span>1) Logo Design:-</span> We specialize in crafting distinctive logos that encapsulate the essence of your brand. Our designers meticulously conceptualize and create logos that serve as a visual representation of your identity, ensuring uniqueness and memorability.</li>
                                    <li><span>2) Branding:-</span> DGMT goes beyond logo creation, delving into comprehensive branding services. We develop cohesive visual identities, including color schemes, typography, and brand guidelines, to establish a consistent and recognizable brand image across all touchpoints.</li>
                                    <li><span>3) Marketing Collateral:-</span> Elevate your marketing efforts with our diverse range of collateral design. From business cards and brochures to posters and promotional materials, we ensure that your brand message is communicated effectively, leaving a lasting impression on your audience.</li>
                                    <li><span>4) Digital Assets:-</span> In the digital landscape, we create engaging graphics tailored for online platforms. This includes social media visuals, website graphics, and email marketing designs, optimizing your digital presence and enhancing user engagement.</li>
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

export default Graphics