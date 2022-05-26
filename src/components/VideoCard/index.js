import {
  VideoCardUI,
  TableMetaData,
  Views,
  Description,
} from "./VideoCard.styled";
import { COLORS_PALLETE } from "../../constant/colors";
import { IoMenuOutline, IoEyeOutline } from "react-icons/io5";

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
          <span>
            <Views>
              {video.views} <IoEyeOutline />
            </Views>
          </span>
          <span>{video.email}</span>
        </TableMetaData>
      </section>
      <h3>
        {video.title} <IoMenuOutline />
      </h3>
      <Description>{video.description}</Description>
      <button>Edit</button>
    </VideoCardUI>
  );
};
