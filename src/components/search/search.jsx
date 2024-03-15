import React, { useState, useRef, useEffect } from 'react';
import "./search.css";
import { FaCalendarAlt } from "react-icons/fa";


function Search() {
  const [tripType, setTripType] = useState("one-way");
  const getCurrentFormattedDate = () => {
    const date = new Date();
    return date.toISOString().split("T")[0];
  };
  const [departureDate, setDepartureDate] = useState(getCurrentFormattedDate());
  const departureInputRef = useRef(null); 


  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "short", year: "2-digit" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const getDayOfWeek = (dateString) => {
    const options = { weekday: "long" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    setDepartureDate(getCurrentFormattedDate());
  }, []);

  const handleDateIconClick = () => {
    departureInputRef.current.click();
  };

  return (
    <div className="search-container">
      <div className="trip-type">
        <label>
          <input
            type="radio"
            name="tripType"
            value="one-way"
            checked={tripType === "one-way"}
            onChange={() => setTripType("one-way")}
          />
          One Way
        </label>
        <label>
          <input
            type="radio"
            name="tripType"
            value="round-trip"
            checked={tripType === "round-trip"}
            onChange={() => setTripType("round-trip")}
          />
          Round Trip
        </label>
        <label>
          <input
            type="radio"
            name="tripType"
            value="multi-city"
            checked={tripType === "multi-city"}
            onChange={() => setTripType("multi-city")}
          />
          Multi City
        </label>
      </div>

      <div className="location-inputs">
        <div className="input-group">
          <label htmlFor="from-location">From</label>
          <input type="text" id="from-location" placeholder="Delhi" />
        </div>
        <div className="input-group">
          <label htmlFor="to-location">To</label>
          <input type="text" id="to-location" placeholder="Bengaluru" />
        </div>
      </div>

      <div className="date-inputs">
      <div className="input-group date-picker">
        <label htmlFor="departure-date">Departure</label>
        <input
          type="date"
          id="departure-date"
          ref={departureInputRef}
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
          style={{ display: 'none' }} 
        />
        <FaCalendarAlt onClick={handleDateIconClick} className="calendar-icon" />
        {departureDate && (
          <div className="date-display">
            <span className="date-day">{formatDate(departureDate)}</span>
            <span className="date-weekday">{getDayOfWeek(departureDate)}</span>
          </div>
        )}
      </div>
        <div className="input-group">
          <label htmlFor="return-date">Return</label>
          <input type="date" id="return-date" />
        </div>
      </div>

      <div className="passenger-input">
        <label htmlFor="passengers"></label>
        <select id="passengers">
          <option value="1">1 Traveller</option>
          <option value="2">2 Travellers</option>
        </select>
      </div>
    </div>
  );
}

export default Search;
