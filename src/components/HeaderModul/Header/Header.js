import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import HeadreUserActions from '../HeaderUserActions/HeadreUserActions';

function Header() {
   const { t } = useTranslation();

   useEffect(() => {
      // Set Elements
      let menu = document.getElementById('slideout-menu');
      let toggleButton = document.getElementById('slideout-toggle');
      let closeButton = document.getElementById('slideout-close');

      // Toggle Menu
      toggleButton.addEventListener('click', function (e) {
         e.preventDefault();
         menu.classList.toggle('is-open');
         document.body.classList.add('header-open');
      });

      // Close Menu
      closeButton.addEventListener('click', function (e) {
         e.preventDefault();
         menu.classList.remove('is-open');
         document.body.classList.remove('header-open');
      });
      // header burger
      if (window.screen.width <= 992) {
         // moving the language/currency below other links
         let navListFirst = document.getElementsByClassName('nav-list')[0];
         let websiteSettings = document.getElementsByClassName('website-settings-select')[0];

         // moving the elements to new containers
         navListFirst.appendChild(websiteSettings);
      }
   }, []);

   return (
      <header className="header">
         <div className="container">
            <nav className="nav">
               <a href="/" className="logo"></a>
               <a id="slideout-close" className="slideout-close" href="#">
                  &times;
               </a>
               <div className="nav-list-links slideout-menu" id="slideout-menu">
                  <ul className="nav-list">
                     <li className="nav-list-item">
                        <a href="#">{t('headerMenu.item1')}</a>
                     </li>
                     <li className="nav-list-item">
                        <a href="#">{t('headerMenu.item2')}</a>
                     </li>
                     <li className="nav-list-item">
                        <a href="#">{t('headerMenu.item3')}</a>
                     </li>
                     <li className="nav-list-item">
                        <a href="#">{t('headerMenu.item4')}</a>
                     </li>
                     <li className="nav-list-item">
                        <a href="#">{t('headerMenu.item5')}</a>
                     </li>
                  </ul>
                  <HeadreUserActions />
               </div>
            </nav>
            <a id="slideout-toggle" className="slideout-toggle" href="#">
               <span></span>
               <span></span>
               <span></span>
            </a>
         </div>
      </header>
   );
}

export default Header;
