import React from 'react'
import { useState,useEffect } from 'react';
const data = [
  "Chetna","Deghana","Meghana","Sneghana"
]
const App = () => {
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem((prevItem) => (prevItem + 1) % data.length);
    }, 1000); 
    return () => clearInterval(interval); 
  }, []
  );

  return (
    <div className="carousel">
      <h2>Auto-scrolling Carousel</h2>
      <div className="carousel-content">
        {data.map((item, index) => (
          <div key={index} className={`carousel-item ${index === currentItem ? 'active' : ''}`} >
            {item} <br />
          </div>
        ))}
      </div>
      <br />
    </div>
  );
}
export default App