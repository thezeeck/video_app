import styled from "styled-components";

export const HeaderUI = styled.header`
  position: sticky;
  left: 0;
  top: 0;
  z-index: 1;
  background-color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  box-shadow: 0 0 1rem #fff;

  > figure {
    margin: 0;

    > img {
      height: 50px;
    }
  }
`;
