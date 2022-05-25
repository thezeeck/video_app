import { useEffect, useState } from "react";
import { MainUI } from "./Main.styled";
import { Loading } from "../Loading";
import { VideoCard } from "../VideoCard";

export const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/videos/")
      .then((data) => data.json())
      .then((response) => {
        setIsLoading(false);
        setVideoList(response.videos);
      });
  }, []);

  if (isLoading) return <Loading />;

  return (
    <MainUI>
      <ul>
        {videoList.map((video, index) => (
          <li key={video.id}>
            <VideoCard video={video} index={index} />
          </li>
        ))}
      </ul>
    </MainUI>
  );
};
