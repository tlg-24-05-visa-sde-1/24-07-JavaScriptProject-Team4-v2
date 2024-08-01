import React, { useState } from "react";
import "./Carousel.css";
import "../FriendCard/FriendCard.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="carousel">
      <div className="frame">
        <BsArrowLeftCircleFill
          className="arrow arrow-left"
          onClick={prevSlide}
        />
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className={
                slide === index ? "card slide" : "card slide slide-hidden"
              }
            >
              <img className="card-img-top" src={item.image} alt={item.name} />
              <div className="card-body">
                <h5 className="card-name">{item.name}</h5>
                <h6 className="card-title">{item.house}</h6>
              </div>
            </div>
          );
        })}
        <BsArrowRightCircleFill
          className="arrow arrow-right"
          onClick={nextSlide}
        />
      </div>
      <div className="indicatorBar">
        <span className="indicators">
          {data.map((_, index) => {
            return (
              <button
                className={
                  slide === index ? "indicator" : "indicator indicator-inactive"
                }
                key={index}
                onClick={null}
              ></button>
            );
          })}
        </span>
      </div>
    </div>
  );
};
