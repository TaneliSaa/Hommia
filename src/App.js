// Tänne tulee importit. Muista myös, että kaikki komponentit pitää myös importata seuraavasti: ./komponentit/"komponentin nimi"
import {Frontpage} from './components/Frontpage';
import { Appbar } from './components/Appbar';
import { Register } from './components/Register';
import { Login } from './components/Login';
import { Sidebar } from './components/Sidebar';

//Tänne muut importit esimerkiksi router yms.
import {Routes, Route} from 'react-router-dom';

function App() {



  return(

    // Routes rivien sisälle tulee kaikki ne komponentit, joita halutaan renderöidä. Route on aina se komponentti mitä renderöidään ja nämä löytyvät komponentti kansiosta.
    //Appbar ei ole routes sisällä, koska haluan että se renderöityy jokaisella sivulla. 
    <>
    
      <Appbar />

      <Routes>

        <Route path='/' element={<Frontpage />} />
        <Route path='Register' element={<Register />} />
        <Route path='Login' element={<Login />} />
        
      </Routes>

      <Sidebar />
      
    </>
    
  );
  
}

export  {App};
