import {
  VideoCardUI,
  TableMetaData,
  Views,
  Description,
} from "./VideoCard.styled";
import { COLORS_PALLETE } from "../../constant/colors";

export const VideoCard = ({ video, index }) => {
  const pictureColor = COLORS_PALLETE[index % COLORS_PALLETE.length].replace(
    "#",
    ""
  );
  return (
    <VideoCardUI bgColor={index}>
      <section tabIndex="0" role="button">
        <figure>
          <img
            src={`https://via.placeholder.com/450/${pictureColor}/FFFFFF/?text=${video.title}`}
          />
        </figure>
        <TableMetaData>
          <span>{video.name}</span>
          <span>{video.email}</span>
          <Views>{video.views} 👁</Views>
        </TableMetaData>
      </section>
      <h3>{video.title}</h3>
      <Description>{video.description}</Description>
      <button>Edit</button>
    </VideoCardUI>
  );
};
