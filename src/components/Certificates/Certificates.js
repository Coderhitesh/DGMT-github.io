import React, { useEffect } from "react";
import certificate from "../../New folder/cert1.png";
import certificate1 from "../../New folder/cert2.png";

import certificate2 from "../../New folder/cert3.png";

import certificate3 from "../../New folder/cert4.png";
import './certificate.css'

const Certificates = () => {
  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  },[])
  return (
    <div className="Dgmt-certificate">
      <h2>Dgmt Certificates</h2>
      <div className="dgmt_conatiner_certificates">
        <div className="certificate-image">
          <img loading="lazy" src={certificate} alt="cert" />
        </div>
        <div className="certificate-image">
          <img loading="lazy" src={certificate1} alt="cert" />
        </div>
        <div className="certificate-image">
          <img loading="lazy" src={certificate2} alt="cert" />
        </div>
        <div className="certificate-image">
          <img loading="lazy" src={certificate3} alt="cert" />
        </div>
        
      </div>
    </div>
  );
};

export default Certificates;
