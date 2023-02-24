import React, { createContext, useEffect, useState } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import logo from './img/logo-white.svg';
import slide1 from './img/slider/slide-1.jpg';
import slide2 from './img/slider/slide-2.jpg';
import ios from './img/icons/ios.svg';
import android from './img/icons/android.svg';
import qr from './img/qr.png';
import screens from './img/screens.png';
import capital from './img/logos/capital-support.svg';
import snk from './img/logos/snk.svg';
import anlan from './img/logos/anlan.svg';
import fb from './img/socials/facebook.svg';
import twitter from './img/socials/twitter.svg';
import github from './img/socials/github.svg';
import reddit from './img/socials/reddit.svg';
import medium from './img/socials/medium.svg';
import steemit from './img/socials/steemit.svg';
import './scss/base.scss';
import './scss/form.scss';
import './scss/table.scss';
import './scss/home.scss';
import './scss/app.scss';
import './scss/partner.scss';
import './scss/subscribe.scss';
import Header from './components/HeaderModul/Header/Header';
import CurrencyPairs from './components/СurrencyPairsModul/CurrencyPairs/CurrencyPairs';

export const OptionsContext = createContext(null);

const Home = () => {
   useEffect(() => {
      // addclass to body
      document.body.classList.add('dark-bg');
      new Swiper('.intro-swiper', {
         // Optional parameters
         slidesPerView: 1.13,
         spaceBetween: 15,
         autoplay: {
            delay: 5000,
         },
         breakpoints: {
            576: {
               slidesPerView: 1.5,
               spaceBetween: 25,
            },
         },

         // Navigation arrows
         navigation: {
            nextEl: '.intro-swiper-button-next',
            prevEl: '.intro-swiper-button-prev',
         },
      });
   }, []);

   const [options, setOptions] = useState({ currency: '', currencySign: '' });
   return (
      <OptionsContext.Provider value={{ options, setOptions }}>
         <div className="wrapper">
            <Header />
            <section className="intro-section">
               <div className="container">
                  <div className="intro-row">
                     <div className="intro-col">
                        <h1 className="h1-heading">Begin your Crypto&nbsp;Trading Journey&nbsp;Now!</h1>
                        <p className="text text-big text-lightgrey">Better trading Better life</p>
                        <div className="btn-group">
                           <a href="/" className="btn btn-blue-fill">
                              Get Started
                           </a>
                           <a href="/" className="btn btn-white">
                              Spot
                           </a>
                        </div>
                     </div>
                     <div className="intro-col">
                        <div className="swiper intro-swiper">
                           <div className="swiper-wrapper intro-swiper-wrapper">
                              <div className="swiper-slide intro-swiper-slide">
                                 <img src={slide1} alt="" />
                              </div>
                              <div className="swiper-slide intro-swiper-slide">
                                 <img src={slide2} alt="" />
                              </div>
                              <div className="swiper-slide intro-swiper-slide">
                                 <img src={slide1} alt="" />
                              </div>
                              <div className="swiper-slide intro-swiper-slide">
                                 <img src={slide2} alt="" />
                              </div>
                           </div>
                           <div className="swiper-button-prev intro-swiper-button-prev"></div>
                           <div className="swiper-button-next intro-swiper-button-next"></div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <CurrencyPairs />
            <section className="app-section">
               <div className="container">
                  <div className="app-row">
                     <div className="app-col">
                        <h2 className="h2-heading">Trade on the go</h2>
                        <p className="text text-big">Extraordinary trading experience on mobile</p>
                        <p className="text text-lightgrey">Download now to get easy access to the secure digital financial service.</p>
                        <div className="app-get">
                           <div className="app-link-container">
                              <a href="#" className="app-link">
                                 <img src={ios} className="" alt="" />
                                 <span className="app-link-text">
                                    <span>Scan to download</span>
                                    <b>iOS App</b>
                                 </span>
                              </a>
                              <a href="#" className="app-link">
                                 <img src={android} className="" alt="" />
                                 <span className="app-link-text">
                                    <span>Scan to download</span>
                                    <b>Android App</b>
                                 </span>
                              </a>
                           </div>
                           <div className="app-qr">
                              <img src={qr} className="app-qr-img" alt="" />
                           </div>
                        </div>
                     </div>
                     <div className="app-col">
                        <img src={screens} className="app-screens" alt="logo" />
                     </div>
                  </div>
               </div>
            </section>
            <section className="partner-section">
               <div className="container">
                  <div className="partner-row">
                     <img src={capital} className="partner-row-img" alt="" />
                     <img src={snk} className="partner-row-img" alt="" />
                     <img src={anlan} className="partner-row-img" alt="" />
                  </div>
               </div>
            </section>
            <section className="subscribe-section">
               <div className="container">
                  <h2 className="h2-heading">Join traders around the world and reshape your finances</h2>
                  <form action="" className="subscribe-form">
                     <input type="email" className="form-input" placeholder="Enter email address" />
                     <input type="submit" className="btn btn-white-fill" value="Get started" />
                  </form>
               </div>
            </section>
            <footer className="footer">
               <div className="container">
                  <div className="footer-row">
                     <div className="footer-col-logo">
                        <img src={logo} className="footer-logo" alt="logo" />
                     </div>
                     <div className="footer-col">
                        <h6 className="h6-heading">About Us</h6>
                        <div className="footer-link">
                           <a href="/">About Coinwan</a>
                           <a href="/">Careers</a>
                           <a href="/">Business Contacts</a>
                        </div>
                     </div>
                     <div className="footer-col">
                        <h6 className="h6-heading">Legal</h6>
                        <div className="footer-link">
                           <a href="/">Privacy Policy</a>
                           <a href="/">Terms of Use</a>
                           <a href="/">Legal Statement</a>
                           <a href="/">Security</a>
                           <a href="/">AML&amp;CFT Policy</a>
                           <a href="/">Cookies Policy</a>
                           <a href="/">Risk Warning</a>
                        </div>
                     </div>
                     <div className="footer-col">
                        <h6 className="h6-heading">Service</h6>
                        <div className="footer-link">
                           <a href="/">Help Center</a>
                           <a href="/">Fees</a>
                           <a href="/">Referrals</a>
                           <a href="/">API Service</a>
                        </div>
                     </div>
                     <div className="footer-col">
                        <h6 className="h6-heading">Support</h6>
                        <div className="footer-link">
                           <a href="/">Submit a Request</a>
                           <a href="/">Knowledge Base</a>
                        </div>
                     </div>
                     <div className="footer-col">
                        <h6 className="h6-heading">Community</h6>
                        <div className="footer-link social-icons">
                           <a href="/">
                              <img src={fb} alt="" />
                           </a>
                           <a href="/">
                              <img src={twitter} alt="" />
                           </a>
                           <a href="/">
                              <img src={github} alt="" />
                           </a>
                           <a href="/">
                              <img src={reddit} alt="" />
                           </a>
                           <a href="/">
                              <img src={medium} alt="" />
                           </a>
                           <a href="/">
                              <img src={steemit} alt="" />
                           </a>
                        </div>
                        <h6 className="h6-heading">Community</h6>
                        <div className="footer-link">
                           <span>
                              Support Service：
                              <a href="mailto:support@kudx.com">support@kudx.com</a>
                           </span>
                           <span>
                              Token Listings：
                              <a href="mailto:listing@kudx.com">listing@kudx.com</a>
                           </span>
                           <span>
                              Business Offers：
                              <a href="mailto:business@kudx.com">business@kudx.com</a>
                           </span>
                        </div>
                        <h6 className="h6-heading">Volume (24H)</h6>
                        <div className="footer-link">
                           <span>107,354,400.29 USDT 107,383,385.98 USD</span>
                           <span>
                              Token Listings：
                              <a href="mailto:listing@kudx.com">listing@kudx.com</a>
                           </span>
                           <span>2022-09-15 04:54:51 (GMT+0) 30.7ms</span>
                        </div>
                     </div>
                  </div>
                  <p className="copyright-text">© 2022 KU DIGITAL SOLUTIONS LIMITED. ALL RIGHTS RESERVED.</p>
               </div>
            </footer>
         </div>
      </OptionsContext.Provider>
   );
};

export default Home;
