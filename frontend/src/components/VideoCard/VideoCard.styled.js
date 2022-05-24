import styled from "styled-components";

export const VideoCardUI = styled.article`
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;

  > figure {
    margin: 0;
    line-height: 0;

    > img {
      width: 100%;
    }
  }

  > section {
    position: absolute;
    left: 0;
    bottom: 0;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));
    width: 100%;
    color: #fff;
    padding: 1rem;
    box-sizing: border-box;
  }
`;
