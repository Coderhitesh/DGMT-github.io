import React from 'react'
import './seo.css'
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

function Seo() {
  return (
    <>
      <section className='seo-section'>
                <div className='container'>
                    <div className='up'>
                        <div className='left-container'>
                            <div className='img'>
                                <img loading="lazy" src={seo} alt="seo" />
                                <div className='content'>
                                    <h1>Search Engine Optimization</h1>
                                    <p>Transforming Your Online Presence Through SEO</p>
                                </div>
                            </div>
                            <div className='about-graphics'>
                                <div className='heading'>
                                    <img loading="lazy" src={redribbon} alt='img' />
                                    <h2>We Provide Search Engine Optimization</h2>
                                </div>
                                <p>At DGMT, our SEO services are designed to propel your online presence to new heights. We implement a strategic and holistic approach to optimize your website for search engines, focusing on factors such as keyword research, on-page and off-page optimization, technical SEO, and content enhancement. Our team of SEO experts works diligently to improve your website's visibility, increase organic traffic, and boost your rankings on search engine results pages (SERPs). Through continuous monitoring and analysis, we refine our strategies to adapt to evolving search algorithms and ensure sustained success.</p>
                            </div>
                            <div className='list-about-graphics'>
                                <p>DGMT's SEO services are crafted to elevate your digital presence and drive meaningful results. Here's a concise overview:</p>
                                <ul>
                                    <li> <span>1) Strategic Approach:-</span> Tailored strategies aligning with your business goals. In-depth analysis to identify key opportunities and challenges.</li>
                                    <li><span>2) Keyword Optimization:-</span> Comprehensive keyword research to target relevant and high-impact terms. Integration of keywords strategically across website content.</li>
                                    <li><span>3) On-Page and Off-Page Optimization:-</span> Fine-tuning on-page elements for search engine visibility. Building authoritative backlinks to enhance online credibility.</li>
                                    <li><span>4) Technical SEO:-</span> Addressing technical aspects for improved website performance. Ensuring mobile responsiveness, fast load times, and effective site architecture.</li>
                                    <li><span>5) Content Enhancement:-</span> Creating and optimizing content for relevance and engagement. Regular updates and additions to keep content fresh and valuable.</li>
                                    <li><span>6) Analytics and Reporting:-</span> Continuous monitoring of SEO performance using advanced analytics tools. Regular reporting on key metrics and insights.</li>
                                    <li><span>7) Increased Visibility:-</span> Focus on improving search rankings for enhanced online visibility. Targeting relevant audiences actively searching for your products or services.</li>
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

export default Seo
