import React from 'react'
import WebsiteDevelopmentbg from '../../New folder/website-development-bg.jpg'
import graphic from '../../New folder/graphics-bg.jpg'
import websiteDesigner from '../../New folder/website-designing-bg.jpg'
import seo from '../../New folder/search-engine-marketing-bg.jpg'
import digitalMarketing from '../../New folder/digital-marketing-bg.jpg'
import appDevelopment from '../../New folder/app-development-bg.jpg'
import socialMediaMarketing from '../../New folder/social-media-marketing-bg.jpg'
import { Link } from 'react-router-dom'
import CallbackForm from '../callbackForm/CallbackForm'
import redribbon from '../../New folder/red-ribbon-1.png'
import { useEffect } from 'react'

function Digital() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <>
            <section className='web-development-section'>
                <div className='container'>
                    <div className='up'>
                        <div className='left-container'>
                            <div className='img'>
                                <img loading="lazy" alt='img' src={digitalMarketing} />
                                <div className='content'>
                                    <h1>Digital Marketing</h1>
                                    <p>Elevate Your Online Presence with Our Digital Marketing Expertise</p>
                                </div>
                            </div>
                            <div className='about-graphics'>
                                <div className='heading'>
                                    <img loading="lazy" src={redribbon} alt='img' />
                                    <h2>We Provide Digital Marketing Services</h2>
                                </div>
                                <p>DGMT provides a comprehensive suite of web development services designed to meet the diverse needs of our clients. Our custom Digital Marketing ensures a tailored online presence that aligns with unique business requirements. We specialize in creating responsive designs, ensuring optimal user experiences across various devices. With a focus on e-commerce development, we build robust and scalable platforms equipped with secure payment gateways, enhancing online retail capabilities. Our proficiency extends to implementing user-friendly Content Management Systems (CMS), empowering clients to effortlessly manage and update their App content.</p>
                            </div>
                            <div className='list-about-graphics'>
                                <p>At DGMT, we offer comprehensive digital marketing services, seamlessly integrating technical prowess with creative ingenuity to deliver exceptional online solutions. Our range of services encompasses:</p>
                                <ul>
                                    <li><span>1) Tailored Campaign Development:</span> Customizing campaigns to meet specific business objectives, ensuring a distinctive and impactful online presence.</li>
                                    <li><span>2) Responsive Marketing Designs:</span> Crafting marketing strategies that adapt seamlessly to various platforms and devices, providing an optimal user experience across desktops, tablets, and mobiles.</li>
                                    <li><span>3) E-commerce Marketing Solutions:</span> Developing effective and scalable e-commerce marketing strategies, incorporating secure payment gateways to elevate online retail capabilities.</li>
                                    <li><span>4) Mobile App Marketing:</span> Proficiently promoting engaging and user-friendly mobile applications, leveraging platforms such as the App Store and Google Play. Specialized in creating visually appealing promotional content to enhance app visibility and drive downloads.</li>
                                    <li><span>5) API Integration for Marketing Tools:</span> Integrating third-party APIs to enhance marketing functionality and streamline connectivity with external services, ensuring seamless integration with various marketing tools and platforms.</li>
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

export default Digital
