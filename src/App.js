// ********* Netflixo Website is created by Zpunet ******************
// ********* If you get an error please contact us ******
// ******** Email:info@zpunet.com *********
// ********* Website:www.zpunet.com *********
// ********* Phone:+255 65 535 2744 *********
// ********* Youtub Channel: https://www.youtube.com/channel/UCOYwYO-LEsrjqBs6xXSfq1w *********

// ******** Support my work with *********
// ********* https://www.patreon.com/zpunet *********
// ********* https://www.buymeacoffee.com/zpunet *********

// ********* This is the main component of the website *********
import Aos from 'aos';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ScrollOnTop from './ScrollOnTop';
import AboutUs from './Screens/AboutUs';
import ContactUs from './Screens/ContactUs';
import AddMovie from './Screens/Dashboard/Admin/AddMovie';
import Categories from './Screens/Dashboard/Admin/Categories';
import Dashboard from './Screens/Dashboard/Admin/Dashboard';
import MoviesList from './Screens/Dashboard/Admin/MovieList';
import Users from './Screens/Dashboard/Admin/Users';
import FavoritesMovies from './Screens/Dashboard/FavoritesMovies';
import Password from './Screens/Dashboard/Password';
import Profile from './Screens/Dashboard/Profile';
import HomeScreen from './Screens/HomeScreen';
import Login from './Screens/Login';
import MoviesPage from './Screens/Movies';
import NotFound from './Screens/NotFound';
import Register from './Screens/Register';
import SingleMovie from './Screens/SingleMovie';
import WatchPage from './Screens/WatchPage';
import DrawerContext from './Context/DrawerContext';

function App() {
  Aos.init();
  return (
    <DrawerContext>
      <ScrollOnTop>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movie/:id" element={<SingleMovie />} />
          <Route path="/watch/:id" element={<WatchPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/password" element={<Password />} />
          <Route path="/favorites" element={<FavoritesMovies />} />
          <Route path="/movieslist" element={<MoviesList />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/users" element={<Users />} />
          <Route path="/addmovie" element={<AddMovie />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ScrollOnTop>
    </DrawerContext>
  );
}

export default App;
