import { VideoCardUI } from "./VideoCard.styled";
import { COLORS_PALLETE } from "../../constant/colors";

export const VideoCard = ({ video, index }) => {
  const pictureColor = COLORS_PALLETE[index % COLORS_PALLETE.length].replace("#", "");
  return (
    <VideoCardUI bgColor={index}>
      <figure>
        <img src={`https://via.placeholder.com/450/${pictureColor}/FFFFFF/?text=${video.title}`} />
      </figure>
      <section>
        <h3>{video.title}</h3>
        <p>{video.description}</p>
        <p>
          <span>{video.views}</span>
          <span>{video.name}</span>
          <span>{video.email}</span>
        </p>
      </section>
    </VideoCardUI>
  );
};
