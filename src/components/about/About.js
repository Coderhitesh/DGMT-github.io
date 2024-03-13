import React from 'react'
import './about.css'
import co1 from './photo/computer_icon.png'
import co2 from './photo/work.png'
import co3 from './photo/team.png'
import aboutimg from './photo/about-company.jpg'
import aboutimg1 from './photo/about-company1.svg'
import { Link } from 'react-router-dom'

const About = () => {
  return (


    <>
      <section className='dgmt-about-section'>
        <div className="container">
          <div className='heading'>
            <span>About Us</span>
          </div>
          <div className='content'>
            <div className='left'>
              <div className='col-1'>
                <h2>DGMT.IN PVT. LTD. securing its <span> position as a top player </span>among leading web and app development companies.</h2>
                <p>DGMT Pvt. Ltd. specializes in B2B (Business-to-Business) services, offering a range of solutions tailored to facilitate transactions between businesses. One of its key offerings is confirm buyer services, ensuring reliability and security in business transactions by verifying the credibility of potential buyers. Through its expertise and dedication, DGMT Pvt. Ltd. streamlines B2B interactions, fostering trust and efficiency in the marketplace.</p>
                <p>Explore the reasons behind why individuals choose us as their preferred option for unparalleled digital solutions.</p>
              </div>
              <div className='col-2 same'>
                <div className='icon'>
                  <img src={co1} alt='cm'></img>
                </div>
                <div className='about'>
                  <h3>Efficient Project Coordination</h3>
                  <p>Our achievements are rooted in meticulous project management. We adeptly navigate intricacies through streamlined processes, guaranteeing efficiency, transparency, and timely delivery.</p>
                </div>
              </div>
              <div className='col-3 same'>
                <div className='icon'>
                  <img src={co3} alt='cm'></img>
                </div>
                <div className='about'>
                  <h3>A Committed Team of Professionals</h3>
                  <p>At the heart of our excellence is a committed team of professionals. Driven and skilled, they contribute unparalleled expertise and innovation to each project, ensuring high-quality solutions. transparency, and timely delivery.</p>
                </div>

              </div>
              <div className='col-4 same'>
                <div className='icon'>
                  <img src={co2} alt='cm'></img>
                </div>
                <div className='about'>
                  <h3>Timely Project Completion</h3>
                  <p>Meeting deadlines is more than a commitment; it's our assurance. With an unwavering emphasis on timelines, we guarantee that projects are completed within the designated time, providing clients with reliability and peace of mind.</p>
                </div>
              </div>
            </div>
            <div className='right'>
              <div className='top'>
                <img src={aboutimg} alt='' />
              </div>
              <div className='mid'>
                <h2>Let's Start a <span>New Project</span> Together</h2>
                <p>Our team of experts is eager to collaborate with you, crafting digital solutions that help you achieve your unique goals.</p>
                <Link to='/contact' className='btn'>Request A Quote</Link>
              </div>
              <div className='bottom'>
                <img src={aboutimg1} alt='bg' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>



  )
}

export default About