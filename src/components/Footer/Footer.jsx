import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-900 py-10 mt-10">
      <div className="container mx-auto px-4">
   
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-items-center md:justify-items-start text-center md:text-left">

         
          <div>
            <h3 className="text-3xl font-extrabold mb-2">Aranybúza Pékség</h3>
            <p className="text-gray-600 text-sm">Frissen sütve, szeretettel.</p>
          </div>

         
          <div>
            <h4 className="font-semibold text-lg mb-4">Navigáció</h4>
            <ul className="space-y-1">
              <li><a href="/" className="hover:text-amber-600 transition duration-300">Kezdőlap</a></li>
              <li><a href="/termekek" className="hover:text-amber-600 transition duration-300">Termékeink</a></li>
              <li><a href="/rolunk" className="hover:text-amber-600 transition duration-300">Rólunk</a></li>
              <li><a href="/kapcsolat" className="hover:text-amber-600 transition duration-300">Kapcsolat</a></li>
            </ul>
          </div>

          
          <div>
            <h4 className="font-semibold text-lg mb-4">Nyitvatartás</h4>
            <ul className="space-y-1 text-gray-700">
              <li>Hétfő - Péntek: 6:00 - 18:00</li>
              <li>Szombat: 7:00 - 14:00</li>
              <li>Vasárnap: Zárva</li>
            </ul>
          </div>

     
          <div>
            <h4 className="font-semibold text-lg mb-4">Kapcsolat</h4>
            <ul className="space-y-1 text-gray-700">
              <li>Telefon: +36 30 123 4567</li>
              <li>E-mail: info@aranybuza.hu</li>
              <li>Cím: Pékség utca 12, Budapest</li>
            </ul>
          </div>

        </div>
        
     
        <div className="mt-8 pt-8 border-t border-gray-300 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Aranybúza Pékség. Minden jog fenntartva.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;