import React from 'react';
import img from './certificate.jpeg';
import img1 from './mainimg.jpeg';
import video from './Dgmt Real Mews.mp4';
import './gallery.css';
import GalleryAnimations from '../bigAimation/GalleryAnimation';

const Gallery = () => {
  return (
    <>
           <marquee behavior="scroll" direction="left" scrollamount="20" className="marquess">ATTAL SAMAN SAMHAROH 2023</marquee>

    <div className='gallery-container'>
    <div className='container'>
      <div className='left'>
        <div className='up'>
          <div className='heading'>
            <span>Our Proudful Moment</span>
          </div>
        </div>
        <div className='down'>
        <img loading="lazy" src={img} alt='Certificate' />
        <img loading="lazy" src={img1} alt='Main Image' />
        </div>
      </div>
      <div className='right'>
      <video controls>
          <source src={video} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
      
    </div>
    </>

  );
};

export default Gallery;
