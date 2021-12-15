import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {

  // states values 
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);


  return (
    // this section could be in  different component 
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>

      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, name, image, title, quote } = person;

          return (
            <article key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          )

        })}
        <button className="prev" onClick={() => { }}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => { }}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
