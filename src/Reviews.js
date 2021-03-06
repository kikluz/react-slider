import React, { useState, useEffect } from 'react';
import data from './data';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';

const Reviews = () => {
    // states values 
    const [people, setPeople] = useState(data);
    const [index, setIndex] = useState(0);
    // alternative 
    // useEffect(() => {
    //   // gets the last item in the array 
    //   const lastIndex = people.length - 1;
    //   // if index less then 0 setIndex to the last one 
    //   if (index < 0) {
    //     setIndex(lastIndex)
    //   }
    //   if (index > lastIndex) {
    //     setIndex(0);
    //   }
    // }, [index, people])

    // this way is not using the the useEffect, here in the fucntion will check for the index
    const nextSlide = () => {
        setIndex((oldIndex) => {
            // here we increasing the lide 
            let index = oldIndex + 1
            if (index > people.length - 1) {
                index = 0;
            }
            return (
                index
            )
        })
    }

    const prevSlide = () => {
        setIndex((oldIndex) => {
            // here we increasing the lide 
            let index = oldIndex - 1
            if (index < 0) {
                index = people.length - 1;
            }
            return (
                index
            )
        })
    }

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex((oldIndex) => {
                let index = oldIndex + 1
                if (index > people.length - 1) {
                    index = 0
                }
                return index
            })
        }, 5000)
        return () => clearInterval(slider)
    }, [index])


    // for using the useEffect 
    // useEffect(() => {
    //   let slider = setInterval(() => {
    //     setIndex(index + 1)
    //   }, 5000)
    //   return () => clearInterval(slider)
    // }, [index])
    return (
        <section className="section">
            <div className="title">
                <h2>
                    <span>/</span>reviews
                </h2>
            </div>

            <div className="section-center">
                {people.map((person, personIndex) => {
                    const { id, name, image, title, quote } = person;

                    let position = 'nextSlide';
                    if (personIndex === index) {
                        position = 'activeSlide';
                    }
                    if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
                        position = 'lastSlide'
                    }

                    return (
                        <article key={id} className={position}>
                            <img src={image} alt={name} className="person-img" />
                            <h4>{name}</h4>
                            <p className="title">{title}</p>
                            <p className="text">{quote}</p>
                            <FaQuoteRight className="icon" />
                        </article>
                    )

                })}
                {/* for useEffect   */}
                {/* <button className="prev" onClick={() => setIndex(index - 1)}> */}
                <button className="prev" onClick={prevSlide}>
                    <FiChevronLeft />
                </button>
                {/* for useEffect   */}
                {/* <button className="next" onClick={() => setIndex(index + 1)}> */}
                <button className="next" onClick={nextSlide}>
                    <FiChevronRight />
                </button>
            </div>
        </section>
    )
}

export default Reviews
