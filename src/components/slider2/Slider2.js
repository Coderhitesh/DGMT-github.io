import React, { useRef, useState } from 'react';
import './slider2.css';


const Slider2 = () => {
  const [items, setItems] = useState([
    {
    //   imageUrl: 'https://i.ibb.co/qCkd9jS/img1.jpg',
      imageUrl: 'https://i.ibb.co/RDcnctC/award-Photo-11zon.jpg',
      name: 'banner-1',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
    },
    {
      imageUrl: 'https://i.ibb.co/MBqMyVs/banner-2.png',
      name: 'india',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
    },
    {
      imageUrl: 'https://i.ibb.co/71hd47C/banner-3.jpg',
      name: 'Switzerland',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
    },
    {
      imageUrl: 'https://i.ibb.co/p1STMCQ/confirm3.jpg',
      name: 'Switzerland',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
    },
    {
      imageUrl: 'https://i.ibb.co/fnvjH9j/Digital-Marketing.jpg',
      name: 'Switzerland',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
    },
  ]);

  const slideRef = useRef();

  const handleNextClick = () => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems.slice(1), prevItems[0]];
      return updatedItems;
    });
  };

  const handlePrevClick = () => {
    setItems((prevItems) => {
      const updatedItems = [prevItems[prevItems.length - 1], ...prevItems.slice(0, -1)];
      return updatedItems;
    });
  };

  return (
    <div className='main-slider2'>
      <div className="slider2-container">
        <div className="slider2-slide" ref={slideRef}>
          {items.map((item, index) => (
            <div key={index} className="slider2-item" style={{ backgroundImage: `url(${item.imageUrl})` , objectFit:'fill' }}>
              <div className="slider2-content">
                <div className="slider2-name">{item.name}</div>
                <div className="slider2-des">{item.description}</div>
                <button>See More</button>
              </div>
            </div>
          ))}
        </div>

        <div className="slider2-button">
          <button className="slider2-prev" onClick={handlePrevClick}>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button className="slider2-next" onClick={handleNextClick}>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider2;
