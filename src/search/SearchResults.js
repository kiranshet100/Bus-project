import React from 'react';
import { useLocation } from 'react-router-dom';
import './SearchResults.css';
import busImage from './bus.jpg'; // Adjust this path if necessary
import Navbar from './Navbar';

const SearchResults = () => {
  const location = useLocation();

  // Ensure location.search is defined
  const searchParams = location && location.search ? new URLSearchParams(location.search) : new URLSearchParams();
  const from = searchParams.get('from') || 'unknown';
  const to = searchParams.get('to') || 'unknown';
  const date = searchParams.get('date') || 'unknown';

  console.log('Search Params:', { from, to, date }); // Debugging line

  // Dummy data for demonstration
  const buses = [
    {
      id: 1,
      name: "Hans Travels (I) Private Limited",
      departure: "19:00",
      duration: "12h 40m",
      arrival: "07:40",
      image: busImage,
    },
    {
      id: 1,
      name: "Hans Travels (I) Private Limited",
      departure: "19:00",
      duration: "12h 40m",
      arrival: "07:40",
      image: busImage,
    },
    {
      id: 1,
      name: "Hans Travels (I) Private Limited",
      departure: "19:00",
      duration: "12h 40m",
      arrival: "07:40",
      image: busImage,
    },
    {
      id: 1,
      name: "Hans Travels (I) Private Limited",
      departure: "19:00",
      duration: "12h 40m",
      arrival: "07:40",
      image: busImage,
    },
  ];

  return (
    <div className="results-page">
      <Navbar />
      <div className="results-content">
        <h2>Buses from {from} to {to} on {date}</h2>
        {buses.map(bus => (
          <div className="bus-card" key={bus.id}>
            <div className="bus-image">
              <img src={bus.image} alt="Bus" />
            </div>
            <div className="bus-details">
              <h3>{bus.name}</h3>
              <p>Departure: {bus.departure}</p>
              <p>Arrival: {bus.arrival}</p>
              <p>Duration: {bus.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
