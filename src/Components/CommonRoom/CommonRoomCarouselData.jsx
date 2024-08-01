import { useState, useEffect } from "react";

function CrCarouselData({house}){
  const [data, setData] = useState([]);

  useEffect(() => {
    //fetch api results make api call
    fetch(
      `https://hp-api.onrender.com/api/characters/house/${house}`
    )
      .then((response) => response.json())
      .then((data) => {
        const dataWithImages = data.filter((friend) => friend.image !== "");
        setData(dataWithImages);
      });
  }, []);

  return data;

}

export default CrCarouselData;