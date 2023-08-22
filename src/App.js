// @ts-nocheck
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HeroSection from './Pages/HomePage/HeroSection';
import WhatIsFomino from './Pages/HomePage/WhatIsFomino';
import DidYouKnow from './Pages/HomePage/DidYouKnow';
import CookingTonight from './Pages/HomePage/CookingTonight';
import HungryForFood from './Pages/HomePage/HungryForFood';
import Footer from './Components/Footer';
import Resturants from "./Pages/ResturantPage/Resturants"
import { ChakraProvider } from '@chakra-ui/react';
import ResturantDetailsData from './Pages/ResturantDetails.jsx/ResturantDetailsData';
import StoreDetails from './Pages/StoreDetails.jsx/StoreDetails';
import CheckOut from './Pages/CheckOut/CheckOut';

function App() {
  return (
    <>
      <section className='font-switzer'>
        <ChakraProvider>
          <Router>
            <Routes>
              <Route exact path='/' element={<>
                <HeroSection />
                <WhatIsFomino />
                <DidYouKnow />
                <CookingTonight />
                <HungryForFood />
                <Footer />
              </>} />

              <Route path='/resturants' element={<Resturants />} />
              <Route path='/resturant_details' element={<ResturantDetailsData />} />
              <Route path="/store_details" element={<StoreDetails />} />
              <Route path="/checkout" element={<CheckOut />} />
            </Routes>
          </Router>
        </ChakraProvider>
      </section>
    </>
  );
}

export default App;
