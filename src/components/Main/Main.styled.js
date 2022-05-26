import styled from "styled-components";

export const MainUI = styled.main`
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;

  > ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: column;
    gap: 2rem;

    @media (min-width: 500px) {
      flex-flow: row;
      flex-wrap: wrap;
    }

    > li {
      position: relative;

      @media (min-width: 500px) {
        width: calc(50% - (2rem / 2));
      }

      @media (min-width: 1000px) {
        width: calc(33.3333% - (4rem / 3));
      }
    }
  }
`;
