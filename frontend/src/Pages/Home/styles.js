import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0 150px 0 150px;

  .title {
    margin-top: 70px;
  }

  section {
    margin: 20px 0 20px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }
`;
