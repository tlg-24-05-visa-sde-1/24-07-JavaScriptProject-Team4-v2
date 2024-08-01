import "./FriendCard.css";
import { useNavigate } from "react-router-dom";

export default function FriendCard({ name, house, image, handleAddNewFriend }) {
  let navigate = useNavigate();
  return (
    <div className="card">
      <img className="card-img-top" src={image} alt={name} />
      <div className="card-body">
        <h5 className="card-name">{name}</h5>
        <h6 className="card-title">{house}</h6>

        <button onClick={handleAddNewFriend} className="btn btn-primary">
          Look Around
        </button>
        <button onClick={() => navigate("/")} className="btn btn-warning">
          Sort Again
        </button>
      </div>
    </div>
  );
}
