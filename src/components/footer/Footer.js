import React from 'react'
import './footer.css'
import './footer-media.css'
// import logo from '../../New folder/logo.png'
import { Link } from 'react-router-dom'
import logo from './DGMT_logo-removebg-preview.png'

function Footer() {
    return (
        <>
            <footer>
                <div className='container'>
                    <div className='row'>
                        {/* <div className='col-same col-1'>
                            
                            <div className='img'>
                                <img loading="lazy" src={logo} alt='img' />
                            </div>
                            <p>DGMT Solution is a prominent digital marketing company that specializes in providing a wide array of digital marketing services, catering to businesses of all sizes to help them attain their online marketing goals.</p>
                        </div> */}
                        <div className='col-same col-2'>
                            <h3>Navigation</h3>
                            <nav>
                                <ul>
                                    <li><Link to='/'>Home</Link></li>
                                    <li><Link to='/about-us'>About Us</Link></li>

                                    <li><Link to='/Certificates'>Certificates</Link></li>
                                    <li><Link to='/contact'>Contact Us</Link></li>
                                </ul>
                            </nav>
                            {/* <div className='img'>
                                <img src={logo} alt='logo' />
                            </div> */}
                        </div>
                        <div className='col-same col-1'>
                            <h2>Our Inventures</h2>
                            <ul>
                                <li><Link target='blank' to='https://confirmbuyers.com/'>Confirm Buyers</Link></li>
                                <li><Link target='blank' to='https://quicksolutionindia.com/'>Quick Solutions</Link></li>
                                {/* <li><Link to='/B2B'>B2B</Link></li> */}
                            </ul>
                        </div>
                        <div className='col-same col-3'>
                            <h3>Our Services</h3>
                            <ul>
                                <li><Link to=''>B2B</Link></li>
                                {/* <li><Link to='/Graphics-Designing'>Graphics Designing</Link></li> */}
                                {/* <li><Link to='/Web-Development'>Website Designing</Link></li> */}
                                <li><Link to=''>Export & Import</Link></li>
                                <li><Link to='/Web-Development'>Website Development</Link></li>
                                <li><Link to=''>Web-App Development</Link></li>
                                <li><Link to='/Digital-Marketing'>Digital Marketing</Link></li>
                                <li><Link to='/Search-Engine-Optimization'>Search Engine Optimization</Link></li>
                            </ul>
                        </div>
                        <div className='col-same col-4'>
                            <h3>Contact Us</h3>
                            <div className='mail same'>
                                <i class="ri-mail-fill"></i>
                                <div className='mail-detail detail-same'>
                                    <p>Email</p>
                                    <a href='mailto:info@dgmt.in'>info@dgmt.in</a>
                                </div>
                            </div>
                            <div className='tel same'>
                                <i class="ri-phone-fill"></i>
                                <div className='tel-detail detail-same'>
                                    <p>Phone</p>
                                    <a href='tel:+91-9717505051'>+91-9717505051</a>
                                </div>
                            </div>
                            <div className='address'>
                                <i class="ri-map-pin-fill"></i>
                                <div className='address-detail'>
                                    <h4>Address</h4>
                                    <a href='https://www.google.com/maps/place/Sukhlal+Market/@28.6983519,77.09588,17z/data=!4m10!1m2!2m1!1sPlot+No.8,+1st+Floor,+Khasra+No:4%2F2+Sukhlal+Market,+Pitampura,+Delhi+-+34!3m6!1s0x390d040136bd20c7:0x6483667c08e544d3!8m2!3d28.6983472!4d77.0984549!15sCklQbG90IE5vLjgsIDFzdCBGbG9vciwgS2hhc3JhIE5vOjQvMiBTdWtobGFsIE1hcmtldCwgUGl0YW1wdXJhLCBEZWxoaSAtIDM0kgEQY29ycG9yYXRlX29mZmljZeABAA!16s%2Fg%2F11ggr0tbcx?entry=ttu'>Plot No.8, 1st Floor, Khasra No:4/2 Sukhlal Market, Pitampura, Delhi - 34</a>
                                </div>
                            </div>
                            <ul class="social-menu">
                            <li class="social-btn facebook" tooltip="Facebook">
                                <a target='_blank' href="https://www.facebook.com/DGMT.INPVTLTD/"><ion-icon name="logo-facebook" size="large"></ion-icon></a>
                            </li>
                            <li class="social-btn instagram" tooltip="Instagram">
                                <a target='_blank' href="https://www.instagram.com/dgmt.in/"><ion-icon name="logo-instagram" size="large"></ion-icon></a>
                            </li>
                            <li class="social-btn pinterest" tooltip="Pinterest">
                                <a target='_blank' href="https://in.pinterest.com/dgmt_in/"><ion-icon name="logo-pinterest" size="large"></ion-icon></a>
                            </li>
                            <li class="social-btn linkedin" tooltip="LinkedIn">
                                <a target='_blank' href="https://www.linkedin.com/company/digital-growth-marketing-technology/mycompany/?viewAsMember=true"><ion-icon name="logo-linkedin" size="large"></ion-icon></a>
                            </li>
                        </ul>
                        </div>
                        
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
