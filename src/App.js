// Tänne tulee importit. Muista myös, että kaikki komponentit pitää myös importata seuraavasti: ./komponentit/"komponentin nimi"
import {Etusivu} from './komponentit/Etusivu';
import { AppiBaari } from './komponentit/Appbar';

//Tänne muut importit esimerkiksi router yms.
import {Routes, Route} from 'react-router-dom';

function App() {



  return(

    // Routes rivien sisälle tulee kaikki ne komponentit, joita halutaan renderöidä. Route on aina se komponentti mitä renderöidään ja nämä löytyvät komponentti kansiosta.
    //Appbar ei ole routes sisällä, koska haluan että se renderöityy jokaisella sivulla. 
    <>
    
      <AppiBaari />

      <Routes>
        <Route path='/' element={<Etusivu />} />
      </Routes>
    </>
    
  );
  
}

export  {App};
