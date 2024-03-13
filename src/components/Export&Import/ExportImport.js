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
import './exportimport.css'

function ExportImport() {
  return (
    <section className='web-development-section'>
                <div className='container'>
                    <div className='up'>
                        <div className='left-container'>
                            <div className='img'>
                                <img loading="lazy" alt='img' src={'https://i.ibb.co/64CXhCr/bg.jpg'} />
                                <div className='content'>
                                <h1>Export & Import</h1>
                                    <p>Export & Import services tailored for enhanced efficiency and growth.</p>
                                </div>
                            </div>
                            <div className='about-graphics'>
                                <div className='heading'>
                                    <img loading="lazy" src={redribbon} alt='img' />
                                    <h2>We Provide Export & Import Services</h2>
                                </div>
                                <p>Confirmbuyers.com specializes in facilitating seamless export and import operations for businesses worldwide. With a keen understanding of global trade dynamics, we offer comprehensive services to streamline the process, ensuring efficiency and compliance at every step. From documentation to logistics management, our expert team handles all aspects of international trade, empowering our clients to expand their reach and capitalize on opportunities in the global marketplace with confidence and ease.</p>
                            </div>
                            <div className='list-about-graphics'>
                                <p>Export and Import services provided by DGMT Pvt. Ltd:</p>
                                <ul>
                                    <li> <span>1) Market Research:-</span>  Confirmbuyers.com conducts thorough market research to identify potential overseas markets for clients' products.</li>
                                    <li><span>2) Documentation Assistance:-</span>  They assist clients in preparing all the necessary export documentation, including invoices, bills of lading, and certificates of origin.</li>
                                    <li><span>3) Customs Clearance:-</span> The company helps in navigating the complex customs clearance process, ensuring smooth export procedures.</li>
                                    <li><span>4) Supplier Sourcing:-</span> Confirmbuyers.com helps clients find reliable suppliers from around the world, offering competitive prices and quality products.</li>
                                    <li><span>5) Negotiation Assistance:-</span>  They assist in negotiating favorable terms with suppliers, including pricing, payment terms, and delivery schedules.</li>
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
  )
}

export default ExportImport
