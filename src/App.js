import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import Home from './components/Home/home';
import HolidayPackages from './components/holidayPackage/holidayPackage';
import HotelBooking from './components/hotelBooking/hotelBooking';
import PackageCollections from './components/packageCollection/packageCollection';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/holiday-packages" element={<HolidayPackages />} />
        <Route path="/hotel-booking" element={<HotelBooking />} />
        <Route path="/package-collections" element={<PackageCollections />} />
      </Routes>
    </Router>
  );
}

export default App;
