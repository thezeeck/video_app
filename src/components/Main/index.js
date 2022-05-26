import { useEffect, useState } from "react";
import { MainUI } from "./Main.styled";
import { Loading } from "../Loading";
import { VideoCard } from "../VideoCard";
import { useMovieContext } from "../../hooks/AppContext";

export const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { movies, setMovieList } = useMovieContext();

  useEffect(() => {
    fetch("http://localhost:3001/videos/")
      .then((data) => data.json())
      .then((response) => {
        setIsLoading(false);
        setMovieList(response);
      });
  }, []);

  if (isLoading) return <Loading />;

  return (
    <MainUI>
      <ul>
        {movies.map((video, index) => (
          <li key={video.id}>
            <VideoCard video={video} index={index} />
          </li>
        ))}
      </ul>
    </MainUI>
  );
};
