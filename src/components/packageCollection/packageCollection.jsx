import React, { useRef } from "react";
import "./PackageCollection.css";
import familyFunImage from "../../assets/beach-5037426_1920.jpg";
import soloTravelerImage from "../../assets/beach-5037426_1920.jpg";

function PackageCollections() {
  const collections = [
    {
      id: 1,
      name: "Family Fun",
      description: "Packages for the whole family...",
      image: familyFunImage,
    },
    {
      id: 2,
      name: "Solo Traveler",
      description: "Explore the world on your own terms...",
      image: soloTravelerImage,
    },
    {
      id: 3,
      name: "Family Fun",
      description: "Packages for the whole family...",
      image: familyFunImage,
    },
    {
      id: 4,
      name: "Solo Traveler",
      description: "Explore the world on your own terms...",
      image: soloTravelerImage,
    },
    {
      id: 5,
      name: "Family Fun",
      description: "Packages for the whole family...",
      image: familyFunImage,
    },
    {
      id: 6,
      name: "Solo Traveler",
      description: "Explore the world on your own terms...",
      image: soloTravelerImage,
    },
  ];

  const carouselRef = useRef(null);

  const scrollToCollection = (direction) => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollAmount = direction === 'next' ? clientWidth : -clientWidth;
      carouselRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const goToPrevious = () => scrollToCollection('prev');
  const goToNext = () => scrollToCollection('next');

  return (
    <div className="package-collections-carousel">
      <button onClick={goToPrevious}>&lt;</button>
      <div className="carousel" ref={carouselRef}>
        {collections.map((collection) => (
          <div key={collection.id} className="collection">
            <img src={collection.image} alt={collection.name} />
            <h3>{collection.name}</h3>
            <p>{collection.description}</p>
          </div>
        ))}
      </div>
      <button onClick={goToNext}>&gt;</button>
    </div>
  );
}

export default PackageCollections;