import Header from "../../../Components/Header/Header";
import CommonRoom from "../../../Components/CommonRoom/CommonRoom";
import "./Ravenclaw.css";
import { Carousel } from "../../../Components/Carousel/Carousel";
import CrCarouselData from "../../../Components/CommonRoom/CommonRoomCarouselData";
import Note from "../../../Components/Note/Note";

function Ravenclaw() {
  let data = CrCarouselData({ house: "ravenclaw" });
  return (
    <div>
      <Header name="Ravenclaw" />
      <Note />
      <CommonRoom />
      <Carousel data={data} />
    </div>
  );
}

export default Ravenclaw;
