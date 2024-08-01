async function CarouselData() {
  const response = await fetch(`https://hp-api.onrender.com/api/characters`);
  const data = await response.json();
  const dataWithImages = data.filter((friend) => friend.image !== "");
  // console.log(dataWithImages)
  return dataWithImages;
}

export default CarouselData;
