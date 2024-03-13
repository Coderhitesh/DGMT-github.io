import React from 'react';
import './services.css';
import './services-media.css';
import { Link } from 'react-router-dom';

function Mydata() {
    const myData = [
        {
          id: 1,
          title: "Website Development",
          subtitles: ["PHP", "React", "Java", "Django"],
        },
        {
          id: 2,
          title: "Website",
          subtitles: ["PHP", "React", "Java", "Django"],
        },
        {
            id: 3,
            title: "graphic",
            subtitles: ["PHP", "React", "Java", "Django"],
          },
        
      ];
      console.log(myData)
      
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
            {myData.map((item) => (
              <div
                key={item.id}
                className={`services-content-box- services-content-box-same`}
              >
                <div
                  data-aos="fade-up"
                  data-aos-duration={1000 * item.id}
                  className={`same-col col-${item.id}`}
                >
                  <h2>{item.title}</h2>
                  <ul>
                    {item.subtitles.map((subtitle, index) => (
                      <li key={index}><a href="/?">{subtitle}</a></li>
                    ))}
                  </ul>
                  <Link className="readme-btn button" to="/">
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Mydata;
