import './App.css';
import { Route, Routes } from 'react-router-dom';
import Indexpage from './pages/Indexpage';
import Loginpage from './pages/Loginpage';
import Layout from './Layout';
import Registerpage from './pages/Registerpage';
import axios from 'axios';
import { UserContextProvider } from './UserContext';
import Profilepage from './pages/Profilepage';
import Placespage from './pages/Placespage';
import PlacesFormPage from './pages/PlacesFormPage';
import Placepage from './pages/Placepage';
import BookingsPage from './pages/BookingsPage';
import BookingPage from './pages/BookingPage';


axios.defaults.baseURL = 'http://localhost:4000'
axios.defaults.withCredentials = true;

function App() {
  
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Indexpage />} />
          <Route path='/login' element={<Loginpage />} />
          <Route path='/register' element={<Registerpage />} />
          <Route path="/account" element={<Profilepage />} />
          <Route path="/account/places" element={<Placespage/>} />
          <Route path="/account/places/new" element={<PlacesFormPage/>} />
          <Route path="/account/places/:id" element={<PlacesFormPage/>} />
          <Route path="/place/:id" element={<Placepage/>} />
          <Route path="/account/bookings" element={<BookingsPage/>} />
          <Route path="/account/bookings/:id" element={<BookingPage/>} />


        </Route>

      </Routes>
      </UserContextProvider>

  )
}

export default App;
