import React, { useEffect, useState } from 'react';
import UserEnters from '../UserEnters/UserEnters';
import UserDropdown from '../UserDropdown/UserDropdown';
import UserOptions from '../UserOptions/UserOptions';
import api from '../../../api';

function HeadreUserActions() {
   const [auth, setAuth] = useState({});
   useEffect(() => {
      api.get('api/v1/authorized').then(setAuth);
   }, []);

   return (
      <ul className="nav-list nav-list-right">
         {auth.authorized ? <UserDropdown /> : <UserEnters />}
         <UserOptions />
      </ul>
   );
}

export default HeadreUserActions;
