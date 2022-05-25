import styled from "styled-components";

export const VideoCardUI = styled.article`
  > section {
    position: relative;
    width: 100%;
    color: #fff;
    box-sizing: border-box;
    cursor: pointer;
    overflow: hidden;
    border-radius: 1rem;
    transition: all 0.3s ease;

    :active,
    :focus,
    :hover,
    :focus-visible {
      outline: currentcolor none medium;
      box-shadow: 0 0 0 0.125rem #fff, 0 0 0 0.25rem #0076b6;
    }

    > figure {
      margin: 0;
      line-height: 0;

      > img {
        width: 100%;
      }
    }
  }

  h3 {
    font-size: 1rem;
    margin: 0.5rem 0;
  }

  button {
    background-color: transparent;
    color: #0076b6;
    border: 0 none;
    padding: 0.25rem 0.5rem;
    border-radius: 1rem;
    transition: all 0.3s ease;

    :active,
    :focus,
    :hover,
    :focus-visible {
      outline: currentcolor none medium;
      box-shadow: 0 0 0 0.125rem #fff, 0 0 0 0.25rem #0076b6;
      background-color: rgba(0, 118, 182, 0.2);
      cursor: pointer;
    }
  }
`;

export const Description = styled.p`
  color: #9496a2;
  font-size: 0.75rem;
  margin: 0.5rem 0;
`;

export const TableMetaData = styled.p`
  display: table;
  position: absolute;
  left: 0;
  bottom: 0;
`;

export const Views = styled.span`
  background-color: #d1211b;
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
`;
