import React, { useState } from "react";
import InputForm from "../../Components/InputForm/InputForm";
import "./GreatHall.css";
import { Carousel } from "../../Components/Carousel/Carousel";
import CarouselData from "../../Components/Carousel/CarouselData";

function GreatHall() {
  const [data, setData] = useState([]);
  // let data = CarouselData();
  // console.log(data)
  const fetchData = async () => {
    let data = await CarouselData();
    // data.forEach((item) => {
    //   console.log(item);
    // });
    setData(data);
  };
  fetchData();

  return (
    <div>
      <span id="great-hall">
        <div>
          <InputForm />
        </div>
        <div>
          <span id="carousel">
            <p id="carousel-note">
              Who might you meet in the halls of Hogwarts??
            </p>
            <div id="carousel-box">
              <Carousel data={data} />
            </div>
          </span>
        </div>
      </span>
    </div>
  );
}

export default GreatHall;
