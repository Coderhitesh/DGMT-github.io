
import './App.css';

import { lazy,Suspense } from 'react';

import Header from './components/header/Header';
import { BrowserRouter , Route ,Routes } from 'react-router-dom';
// import Home from './components/home/Home';
import Footer from './components/footer/Footer';
// import Contact from './components/contact/Contact';
// import About from './components/about/About';
// import Sorry from './components/SorryPage/Sorry';
// import Graphics from './components/Graphics/Graphics';
// import WebsiteDevelopment from './components/websiteDevelopment/WebsiteDevelopment';
// import SocialMediaMarketing from './components/SocialMediaMarketing/SocialMediaMarketing';
// import Seo from './components/seo/Seo';
// import AppDev from './components/AppDevelopment/AppDev';
// import Digital from './components/DigitalMarketing/Digital';
// import Certificates from './components/Certificates/Certificates';
import { useEffect } from 'react';
import Loader from './components/loader/Loader';
import B2B from './components/B2B/B2B';
import ExportImport from './components/Export&Import/ExportImport';
// import WhatsappIcon from './components/whatsappIco?n/WhatsappIcon';

const Home = lazy(()=>import('./components/home/Home'))
const Contact = lazy(()=>import('./components/contact/Contact'))
const About = lazy(()=>import('./components/about/About'))
const Sorry = lazy(()=>import('./components/SorryPage/Sorry'))
const Graphics = lazy(()=>import('./components/Graphics/Graphics'))
const WebsiteDevelopment = lazy(()=>import('./components/websiteDevelopment/WebsiteDevelopment'))
const SocialMediaMarketing = lazy(()=>import('./components/SocialMediaMarketing/SocialMediaMarketing'))
const Seo = lazy(()=>import('./components/seo/Seo'))
const AppDev = lazy(()=>import('./components/AppDevelopment/AppDev'))
const Digital = lazy(()=>import('./components/DigitalMarketing/Digital'))
const Certificates = lazy(()=>import('./components/Certificates/Certificates'))


function App() {
  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  },[])
  return (
    <BrowserRouter>
    <Header/>
    <Suspense 
    fallback={
      // <p style={{fontSize: '3rem' , textAlign: 'center' , fontVariant:'small-caps'}}>Loading....</p>

      <Loader/>

    }
    >
      
      <Routes>
       
        <Route path='/' element={<Home/>}></Route>
        
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/about-us' element={<About/>}></Route>
        <Route path='/*' element={<Sorry/>}></Route>
        <Route path='/Graphics-Designing' element={<Graphics />}/>
        <Route path='/Web-Development' element={<WebsiteDevelopment/>}/>
        <Route path='/Social-Media-Marketing' element={<SocialMediaMarketing />}/>
        <Route path='/Search-Engine-Optimization' element={<Seo/>}/>
        <Route path='/App-Development' element={<AppDev/>}/>
        <Route path='/Digital-Marketing' element={<Digital/>}/>
        <Route path='/Certificates' element={<Certificates/>}/>
        <Route path='/B2B' element={<B2B />} />
        <Route path='/export' element={<ExportImport />} />
      </Routes>
      {/* <WhatsappIcon /> */}
      </Suspense>
      <Footer />
    </BrowserRouter>

  );
}

export default App;

