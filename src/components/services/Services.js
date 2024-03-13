import React, { useState } from 'react'
import './services.css'
import './services-media.css'

import s1 from '../../New folder/web development icon.png'
import s2 from '../../New folder/web designing.png'
import s3 from '../../New folder/graphic designing.png'
import s4 from '../../New folder/app development.png'
import s5 from '../../New folder/web-app development.png'
import s6 from '../../New folder/digital marketing.png'
import s7 from '../../New folder/seo.png'
import s8 from '../../New folder/social media marketing.png'
import s9 from '../../New folder/content writing.png'
import s10 from '../../New folder/b2b.png'
import { Link } from 'react-router-dom'

function Services() {

    const data = [
        {
            id: 1,
            title: "Website Development",
            subtitles: ["Php", "React", "java", "Django"]

        },
        {
            id: 2,
            title: "Website ",
            subtitles: ["Php", "React", "java", "Django"]

        }
    ]
    return (
        <>
            <section id="services">
                <div className="container">
                    <div className="heading">
                        <span>Our services</span>
                        <div className="button-box">
                            <a className="left-btn"><i className="ri-arrow-left-line left-i"></i></a>
                            <a className="right-btn"><i className="ri-arrow-right-line right-i"></i></a>
                        </div>
                    </div>
                    <div className="services-box">
                        <div className={`services-content-box-1 services-content-box-same`}>
                            <div data-aos="fade-up" data-aos-duration="1400" className="same-col col-3">
                                <img loading="lazy" className="icons" src={s3} alt="" />
                                <h2>B2B</h2>
                                <ul className='subnamesize'>
                                    <li><a href="/?">PHOTOSHOP</a></li>
                                    <li><a href="/?"> ILLUSTRATOR</a></li>
                                    <li><a href="/?">CARWL DRAW</a></li>
                                </ul>
                                <Link className="readme-btn button" to="/B2B">Read More</Link>

                            </div>
                            <div data-aos="fade-up" data-aos-duration="1600" className="same-col col-4">
                                <img loading="lazy" className="icons" src={'https://i.ibb.co/tp98Dgk/import-goods-services-abstract-concept-illustration-335657-3938.jpg'} alt="" />
                                <h2>Export & Import</h2>
                                <ul className='subnamesize'>
                                    <li><a href="/?">Import</a></li>
                                    <li><a href="/?">Export</a></li>

                                </ul>
                                <Link className="readme-btn button" to="/export">Read More</Link>

                            </div>
                            <div data-aos="fade-up" data-aos-duration="1000" className="same-col col-1" >
                                <img loading="lazy" className="icons" src={s1} alt="" />
                                <h2>Website Development</h2>
                                <ul className='subnamesize'>
                                    <li><a href="/?">PHP</a></li>
                                    <li><a href="/?">REACT</a></li>
                                    <li><a href="/?">JAVA</a></li>
                                    <li><a href="/?">DJANGO</a></li>
                                </ul>
                                <Link className="readme-btn button" to="/Web-Development">Read More</Link>

                            </div>
                            <div data-aos="fade-up" data-aos-duration="1200" className="same-col col-2">
                                <img loading="lazy" className="icons" src={s2} alt="" />
                                <h2>Web Designing</h2>
                                <ul className='subnamesize'>
                                    <li><a href="/?">FIGMA</a></li>
                                    <li><a href="/?">PHOTOSHOP</a></li>
                                    <li><a href="/?">JAVA</a></li>
                                    <li><a href="/?">DJANGO</a></li>
                                </ul>
                                <Link className="readme-btn button" to="/Web-Development">Read More</Link>

                            </div>

                            
                            <div data-aos="fade-up" data-aos-duration="1900" className="same-col col-1">
                                <img loading="lazy" className="icons" src={s7} alt="" />
                                <h2>Search Engine Optimization</h2>
                                <ul className='subnamesize'>
                                    <li><a href="/?">SEO</a></li>
                                    <li><a href="/?">SMO</a></li>
                                    <li><a href="/?">FACEBOOK ADS</a></li>
                                    <li><a href="/?">GOOGLE ADS</a></li>
                                </ul>
                                <Link className="readme-btn button" to="/Search-Engine-Optimization">Read More</Link>


                            </div>
                            <div data-aos="fade-up" data-aos-duration="1800" className="same-col col-6">
                                <img loading="lazy" className="icons" src={s6} alt="" />
                                <h2>Digital Marketing</h2>
                                <ul className='subnamesize'>
                                    <li><a href="/?">PHP</a></li>
                                    <li><a href="/?">REACT</a></li>
                                    <li><a href="/?">JAVA</a></li>
                                    <li><a href="/?">DJANGO</a></li>
                                </ul>
                                <Link className="readme-btn button" to="/Digital-Marketing">Read More</Link>

                            </div>
                        </div>

                        <div className={`services-content-box-2 services-content-box-same`}>
                            <div data-aos="fade-up" data-aos-duration="1900" className="same-col col-1">
                                <img loading="lazy" className="icons" src={s7} alt="" />
                                <h2>Search Engine Optimization</h2>
                                <ul className='subnamesize'>
                                    <li><a href="/?">PHP</a></li>
                                    <li><a href="/?">REACT</a></li>
                                    <li><a href="/?">JAVA</a></li>
                                    <li><a href="/?">DJANGO</a></li>
                                </ul>
                                <Link className="readme-btn button" to="/Search-Engine-Optimization">Read More</Link>


                            </div>
                            <div data-aos="fade-up" data-aos-duration="1000" className="same-col col-2">
                                <img loading="lazy" className="icons" src={s8} alt="" />
                                <h2>Social Media Marketing</h2>
                                <ul className='subnamesize'>
                                    <li><a href="/?">PHP</a></li>
                                    <li><a href="/?">REACT</a></li>
                                    <li><a href="/?">JAVA</a></li>
                                    <li><a href="/?">DJANGO</a></li>
                                </ul>
                                <Link className="readme-btn button" to="/Social-Media-Marketing">Read More</Link>

                            </div>
                            <div data-aos="fade-up" data-aos-duration="1000" className="same-col col-3">
                                <img loading="lazy" className="icons" src={s9} alt="" />
                                <h2>Content Marketing</h2>
                                <ul className='subnamesize'>
                                    <li><a href="/?">PHP</a></li>
                                    <li><a href="/?">REACT</a></li>
                                    <li><a href="/?">JAVA</a></li>
                                    <li><a href="/?">DJANGO</a></li>
                                </ul>
                                <Link className="readme-btn button" to="/">Read More</Link>

                            </div>
                            <div data-aos="fade-up" data-aos-duration="1000" className="same-col col-4">
                                <img loading="lazy" className="icons" src={s10} alt="" />
                                <h2>B2B Services</h2>
                                <ul className='subnamesize'>
                                    <li><a href="/?">PHP</a></li>
                                    <li><a href="/?">REACT</a></li>
                                    <li><a href="/?">JAVA</a></li>
                                    <li><a href="/?">DJANGO</a></li>
                                </ul>
                                <Link className="readme-btn button" to="/">Read More</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services
