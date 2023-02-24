import React, { useEffect } from 'react';

import account from '../../../img/icons/account.svg';
import accountInfo from '../../../img/icons/account-info.svg';
import accountSecurity from '../../../img/icons/security.svg';
import accountVerification from '../../../img/icons/verification.svg';
import accountReferrals from '../../../img/icons/referrals.svg';
import accountLogout from '../../../img/icons/logout.svg';

function UserDropdown() {
   useEffect(() => {
      document.querySelector('.account-settings-name-id').addEventListener('click', function () {
         // Get the text field
         var copyText = document.querySelector('.account-settings-name-id-number').textContent;
         // Copy the text inside the text field
         navigator.clipboard.writeText(copyText);
      });
   }, []);

   return (
      <li className="nav-list-item account-settings-select">
         <a href="#">
            <img src={account} alt="" />
         </a>

         <div className="account-settings">
            <div className="account-settings-id">
               <div className="account-settings-avatar">
                  <span>as</span>
               </div>
               <div className="account-settings-name">
                  <span className="account-settings-name-email">asd*****@gmail.com</span>
                  <span className="account-settings-name-id">
                     UID: <span className="account-settings-name-id-number">0000000001</span>
                  </span>
               </div>
            </div>
            <ul className="account-settings-list">
               <li className="account-settings-dropdown">
                  <a href="#">
                     <img src={accountInfo} alt="" /> Account information
                  </a>
               </li>
               <li>
                  <a href="#">
                     <img src={accountSecurity} alt="" /> Security Settings
                  </a>
               </li>
               <li>
                  <a href="#">
                     <img src={accountVerification} alt="" /> Verification
                  </a>
               </li>
               <li>
                  <a href="#">
                     <img src={accountReferrals} alt="" /> Referrals
                  </a>
               </li>
            </ul>
            <ul className="account-settings-list">
               <li>
                  <a href="#">
                     <img src={accountLogout} alt="" /> Log Out
                  </a>
               </li>
            </ul>
         </div>
      </li>
   );
}

export default UserDropdown;
