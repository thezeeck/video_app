import styled from "styled-components";

export const MainUI = styled.main`
  padding: 1rem;
  max-width: 1000px;
  margin: 0 auto;

  > ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: column;
    gap: 1rem;

    @media (min-width: 600px) {
      flex-flow: row;
      flex-wrap: wrap;
    }

    > li {
      position: relative;

      @media (min-width: 600px) {
        width: calc(33.3333% - (2rem / 3));
      }

      @media (min-width: 900px) {
        width: calc(20% - (4rem / 5));
      }
    }
  }
`;
