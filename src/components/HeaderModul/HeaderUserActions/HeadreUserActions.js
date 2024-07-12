import { useState } from 'react';
import UserEnters from '../UserEnters/UserEnters';
import UserDropdown from '../UserDropdown/UserDropdown';
import UserOptions from '../UserOptions/UserOptions';

function HeadreUserActions() {
   const [auth, setAuth] = useState({});

   return (
      <ul className='nav-list nav-list-right'>
         {auth.authorized ? <UserDropdown /> : <UserEnters />}
         <UserOptions />
      </ul>
   );
}

export default HeadreUserActions;
