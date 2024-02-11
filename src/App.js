// Tänne tulee importit. Muista myös, että kaikki komponentit pitää myös importata seuraavasti: ./komponentit/"komponentin nimi"
import {Frontpage} from './components/Frontpage';
import { AppbarComponent } from './components/Appbar';
import { Register } from './components/Register';
import { Login } from './components/Login';
import { AppbarLower } from './components/AppbarLower';
import { ShoppingCart } from './components/ShoppingCart';

//Tänne muut importit esimerkiksi router yms.
import {Routes, Route} from 'react-router-dom';
import { ForgottenPassword } from './components/ForgottenPassword';

function App() {



  return(

    // Routes rivien sisälle tulee kaikki ne komponentit, joita halutaan renderöidä. Route on aina se komponentti mitä renderöidään ja nämä löytyvät komponentti kansiosta.
    //Appbar ei ole routes sisällä, koska haluan että se renderöityy jokaisella sivulla. 
    <>
    
      <AppbarComponent />
      <AppbarLower />

      <Routes>

        <Route path='/' element={<Frontpage />} />
        <Route path='Register' element={<Register />} />
        <Route path='Login' element={<Login />} />
        <Route path='ShoppingCart' element={<ShoppingCart />} />
        <Route path='ForgottenPassword' element={<ForgottenPassword />} />
        
      </Routes>

      
      
    </>
    
  );
  
}

export  {App};
