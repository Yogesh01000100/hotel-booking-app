import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TrendingDestinations.css'; 


import goaImage from '../../assets/beach-5037426_1920.jpg'; 
import andamanImage from '../../assets/beach-5037426_1920.jpg';
import himachalImage from '../../assets/beach-5037426_1920.jpg'; 
import rajasthanImage from '../../assets/beach-5037426_1920.jpg';
import { useNavigate } from 'react-router-dom';

const destinations = [
  {
    name: 'Goa',
    price: '8,999',
    image: goaImage, 
  },
  {
    name: 'Andaman',
    price: '9,999',
    image: andamanImage, 
  },
  {
    name: 'Himachal',
    price: '11,999',
    image: himachalImage,
  },
  {
    name: 'Rajasthan',
    price: '13,999',
    image: rajasthanImage,
  },

  {
    name: 'Odisha',
    price: '10,999',
    image: rajasthanImage, 
  },
];

function TrendingDestinations() {
  const navigate = useNavigate();
  const settings = {
  
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="trending-destinations">
      <h2>Trending Indian Destinations</h2>
      <p>India is a country with diversified travel destinations. We have mastered various holiday options to make our customer experiences more memorable.</p>
      <Slider {...settings}>
        {destinations.map((destination) => (
          <div key={destination.name} className="destination-slide">
            <div className="destination-image" style={{ backgroundImage: `url(${destination.image})` }}>
              <div className="destination-info">
                <h3>{destination.name}</h3>
                <p>Range starts from INR {destination.price} Per Person</p>
                <button className="bt" onClick={() => navigate('/holiday-packages')}>Find Now</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TrendingDestinations;