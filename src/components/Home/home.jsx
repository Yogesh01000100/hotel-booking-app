import React from "react";
import "./Home.css"; 
import HolidayPackages from "../holidayPackage/holidayPackage";
import PackageCollections from "../packageCollection/packageCollection";
import TrendingDestinations from "../carousel/TrendingDestinations";
import { useNavigate } from "react-router-dom";
import "./Home.css"; 

function Home() {
  const navigate = useNavigate();

  return (
    <main className="home">
      <div className="headers-container">
        <header className="hero">
          <h1>Welcome to Gogaga Holidays</h1>
          <p>
            Find your perfect holiday, flight, or hotel from our wide selection
            of deals.
          </p>
          <button className="bt" onClick={() => navigate("/holiday-packages")}>
            Find Now
          </button>
        </header>
        <header className="hero-secondary">
          <p>Yes! We believe that every holiday needs to be customized as they are unique. Explore our customized holidays for a memorable holiday experience. Explore new destinations and create unforgettable memories.</p>
        </header>
      </div>

      <TrendingDestinations />

      <section className="home-section featured-packages">
        <h2>Featured Holiday Packages</h2>
        <HolidayPackages />
        <button className="view-all" onClick={() => navigate("/holiday-packages")}>
          View All Packages
        </button>
      </section>

      <section className="home-section book-hotel">
        <button className="book-hotel-btn" onClick={() => navigate("/hotel-booking")}>
          Book a Hotel
        </button>
      </section>

      <section className="home-section package-collections">
        <h2>Package Collections</h2>
        <PackageCollections />
        <button className="explore-collections" onClick={() => navigate("/package-collections")}>
          Explore Collections
        </button>
      </section>
    </main>
  );
}

export default Home;
