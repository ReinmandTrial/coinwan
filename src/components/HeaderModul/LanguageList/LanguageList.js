import React, { useEffect, useState } from 'react';

import LanguageListItem from '../LanguageListItem/LanguageListItem';
import api from '../../../api';
import { useTranslation } from 'react-i18next';

function LanguageList({ curLang, setCurLang }) {
   const [langList] = useState([
      { lang: 'English', langISO: 'en-US' },
      { lang: 'Deutsch', langISO: 'de' },
      { lang: 'Français', langISO: 'fr' },
      { lang: '한국어', langISO: 'ko' },
      { lang: 'Español', langISO: 'es' },
      { lang: 'Türkçe', langISO: 'tr' },
   ]);
   const { i18n } = useTranslation();
   const swichLanguage = (language) => {
      i18n.changeLanguage(language);
   };

   useEffect(() => {
      const getLang = localStorage.getItem('i18nextLng');
      const curName = langList.find((item) => item.langISO === getLang);
      setCurLang({ languageNamed: curName?.lang, langISO: getLang });
   }, []);

   function langSwitch(e) {
      const curName = langList.find((item) => item.langISO === e.target.value);
      setCurLang({ languageNamed: curName.lang, langISO: e.target.value });
      api.post('/api/v1/language', { language: e.target.value });
   }
   return (
      <ul className="website-settings-list">
         {langList.map((item) => (
            <LanguageListItem
               key={item.langISO}
               item={item}
               swichLanguage={swichLanguage}
               langSwitch={langSwitch}
               currentLanguage={curLang.langISO}
            />
         ))}
      </ul>
   );
}

export default LanguageList;
