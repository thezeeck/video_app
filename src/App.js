import { HomeLayout } from "./layouts/Home";
import { AppContext, useMovieList } from "./hooks/AppContext";
import { Styles } from "./Theme/Theme";

export const App = () => {
  const initialState = useMovieList([]);

  return (
    <AppContext.Provider value={ initialState }>
      <Styles />
      <HomeLayout />
    </AppContext.Provider>
  )
};
