import React from 'react';
import './App.css';
import image from './assets/vicfalls.png'
import image2 from './assets/paris.png';
import image3 from './assets/tokyoskytree.png';
import image4 from './assets/grandcanyon.png';
import image5 from './assets/santorini.png';
import image6 from './assets/macchupichu.png';

import TravelJournal from './components/TravelJournal';


 const dummyEntries = [
  {
    title: 'Victoria Falls',
    location: 'Zimbabwe',
    description: 'Saw the spray dancing in the sunlight 🌈',
    image: image,
  },
  {
    title: 'Paris Lights',
    location: 'France',
    description: 'Croissants, art, and Eiffel Tower views 🗼',
    image: image2,
  },
  {
    title: 'Tokyo Skytree',
    location: 'Japan',
    description: 'City lights and sushi nights 🍣',
    image:  image3,
  },
  {
    title: 'Grand Canyon',
    location: 'USA',
    description: 'Epic views and endless hiking trails 🏞️',
    image: image4,
  },
  {
    title: 'Santorini',
    location: 'Greece',
    description: 'White buildings, blue domes, and sunsets that slap 🌅',
    image: image5,
  },
  {
    title: 'Machu Picchu',
    location: 'Peru',
    description: 'Mystical ruins up in the clouds 🏔️',
    image: image6,
  },
];



const App = () => {
  return (
    <div>
      <h1 className="main-heading">My Travel Journal ✈️</h1> 

      <main className="card-container">
        {dummyEntries.map((entry, index) => (
          <TravelJournal key={index} {...entry} />
        ))}
      </main>
    </div>
  );
};
export default App;