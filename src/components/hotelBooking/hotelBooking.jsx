import React, { useState } from "react";
import "./HotelBooking.css"; 

import seaViewResortImage from "../../assets/beach-5037426_1920.jpg";
import mountainRetreatImage from "../../assets/beach-5037426_1920.jpg";
import urbanHotelImage from "../../assets/beach-5037426_1920.jpg";
import desertOasisImage from "../../assets/beach-5037426_1920.jpg";
import jungleParadiseImage from "../../assets/beach-5037426_1920.jpg";

const hotels = [
  {
    id: 1,
    name: "SeaView Resort",
    location: "Maldives",
    rating: 5,
    imageUrl: seaViewResortImage,
    description: "Enjoy breathtaking sea views and luxurious accommodations.",
  },
  {
    id: 2,
    name: "Mountain Retreat",
    location: "Swiss Alps",
    rating: 4,
    imageUrl: mountainRetreatImage,
    description: "A cozy stay at the heart of the mountains.",
  },
  {
    id: 3,
    name: "Urban Hotel",
    location: "New York City",
    rating: 4,
    imageUrl: urbanHotelImage,
    description: "Experience the hustle and bustle of city life.",
  },
  {
    id: 4,
    name: "Desert Oasis",
    location: "Sahara",
    rating: 5,
    imageUrl: desertOasisImage,
    description: "A serene escape in the midst of the vast desert.",
  },
  {
    id: 5,
    name: "Jungle Paradise",
    location: "Amazon Rainforest",
    rating: 4,
    imageUrl: jungleParadiseImage,
    description: "Immerse yourself in the lush greenery of the jungle.",
  },
];

function HotelBooking() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredHotels, setFilteredHotels] = useState(hotels);


  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  React.useEffect(() => {
    const results = hotels.filter(
      (hotel) =>
        hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hotel.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredHotels(results);
  }, [searchTerm]);

  return (
    <div className="hotel-booking">
      <h2>Hotel Booking</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for hotels"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button onClick={handleSearch}>Find Hotels</button>
      </div>
      {filteredHotels.map((hotel) => (
        <div key={hotel.id} className="hotel-card">
          <img src={hotel.imageUrl} alt={hotel.name} />
          <div className="text-container">
            <h3>{hotel.name}</h3>
            <p>{hotel.location}</p>
            <p>Rating: {hotel.rating} stars</p>
            <p>{hotel.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HotelBooking;
