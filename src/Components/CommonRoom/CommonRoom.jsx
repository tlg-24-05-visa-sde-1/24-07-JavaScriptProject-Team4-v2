import { useEffect, useState } from "react";
import FriendCard from "../FriendCard/FriendCard";
import Header from "../Header/Header";
import "./CommonRoom.css";

function CommonRoom({ houseName }) {
  const [friends, setFriends] = useState([]);
  const [selectedFriends, setSelectedFriends] = useState([]);
  const [friendsList, setFriendsList] = useState([]);
  const [carousel, setCarousel] = useState([]);

  function handleAddNewFriend() {
    let randIdx = Math.floor(Math.random() * friends.length);
    while (
      selectedFriends.includes(randIdx) &&
      selectedFriends.length !== friends.length
    ) {
      randIdx = Math.floor(Math.random() * friends.length);
    }
    if (selectedFriends.length !== friends.length) {
      setSelectedFriends([...selectedFriends, randIdx]);
      // setSelectedFriends([randIdx]);
      // setFriendsList([...friendsList, friends[randIdx]]);
      setFriendsList([friends[randIdx]]);
      setCarousel([...carousel, friends[randIdx]]);
      console.log([...carousel, friends[randIdx]]);
    }
  }

  useEffect(() => {
    //fetch api results make api call
    fetch(
      `https://hp-api.onrender.com/api/characters/house${location.pathname}`
    )
      .then((response) => response.json())
      .then((data) => {
        const dataWithImages = data.filter((friend) => friend.image !== "");
        setFriends(dataWithImages);
      });
  }, []);

  useEffect(() => {
    let randIdx = Math.floor(Math.random() * friends.length);

    setSelectedFriends([randIdx]);
    friends.length && setFriendsList([friends[randIdx]]);
    friends.length && setCarousel([friends[randIdx]]);
  }, [friends]);

  return (
    <div className={houseName}>
      <Header name={location.pathname.substring(1).toUpperCase} />
      {friendsList.length ? (
        friendsList.map((friendItem, index) => {
          return (
            <FriendCard
              key={index}
              name={friendItem.name}
              house={friendItem.house}
              image={friendItem.image}
              handleAddNewFriend={handleAddNewFriend}
            />
          );
        })
      ) : (
        <h1 id="loading">Loading</h1>
      )}
      {/* {friendsList.length &&
        friendsList.map((friendItem, index) => {
          return (
            <FriendCard
              key={index}
              name={friendItem.name}
              house={friendItem.house}
              image={friendItem.image}
              handleAddNewFriend={handleAddNewFriend}
            />
          );
        })} */}
    </div>
  );
}

export default CommonRoom;
