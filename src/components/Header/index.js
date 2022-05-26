import logo from "./../../img/tiktek.svg";
import { HeaderUI } from "./Header.styled";

export const Header = () => {
  const createRecord = async () => {
    const config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "Video title test",
        description: "Video description test",
        name: "Juan Sanchez",
        email: "juanpe.sanchez@outlook.com",
      }),
    };
    const sendRequest = await fetch("http://localhost:3001/videos/", config);
    const data = await sendRequest.json();
  };

  return (
    <HeaderUI>
      <figure>
        <img src={logo} alt="ZUI UI" />
      </figure>
      <button onClick={createRecord}>New record</button>
    </HeaderUI>
  );
};
