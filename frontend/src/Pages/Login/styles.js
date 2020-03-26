import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 593px;
    height: 568px;
  }

  div {
    h1 {
      margin-top: 70px;
      margin-bottom: 30px;
    }

    form {
      margin-right: 100px;
      max-width: 350px;
      input {
        margin-bottom: 16px;
      }
    }

    img {
      width: 250px;
      height: 106px;
    }

    div {
      margin-top: 20px;
      display: flex;
      align-items: center;

      span {
        color: #e02041;
      }

      .link {
        text-decoration: none;
        margin-left: 10px;
        color: #41414d;
        font-weight: 500;
        transition: opacity 0.2s;
      }

      .link:hover {
        opacity: 0.6;
      }
    }
  }
`;
