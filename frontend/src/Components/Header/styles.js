import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;

    img {
      margin-right: 50px;
      width: 144px;
    }

    h1 {
      font-size: 24px;
    }
  }

  .buttons {
    button {
      width: 270px;
      margin-right: 20px;
    }
    .logoff {
      width: 60px;
      background-color: #f0f0f5;
      border: 1.5px solid #dcdce6;
      box-sizing: border-box;
      border-radius: 8px;
      margin-right: 0;
      span {
        color: #e02041;
      }
    }
  }
`;
