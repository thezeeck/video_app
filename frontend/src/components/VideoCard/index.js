import { VideoCardUI } from "./VideoCard.styled";

export const VideoCard = ({ video }) => {
  return (
    <VideoCardUI>
      <figure>
        <img src="https://via.placeholder.com/450/0000FF/FFFFFF/?text=cover" />
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
