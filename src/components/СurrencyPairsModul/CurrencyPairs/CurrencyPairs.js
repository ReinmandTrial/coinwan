import React from 'react';
import CurrencyPairsTabs from '../CurrencyPairsTabs/CurrencyPairsTabs';

function CurrencyPairs() {
   return (
      <section className="table-section">
         <div className="container">
            <div className="table-wrapper">
               <div className="table-above-text">
                  <a href="#" className="hot-link">
                     (Individual Competition) Introductio
                  </a>
                  <a href="#" className="hot-link">
                     Kudx Launches Global Innovation Z
                  </a>
                  <a href="#">Announcement on the Suspension of D</a>
                  <a href="#" className="more-link">
                     More
                  </a>
               </div>
               <CurrencyPairsTabs />
            </div>
         </div>
      </section>
   );
}

export default CurrencyPairs;
