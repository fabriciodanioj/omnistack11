import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    display: flex;
    align-items: center;
    margin: 160px;
    background: #f0f0f5;
    box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 40px 80px 40px 80px;

    h1 {
      margin-top: 50px;
    }

    p {
      margin-top: 30px;
      font-size: 18px;
      line-height: 32px;
      color: #737380;
    }

    .main {
      div {
        display: flex;
        align-items: center;
        margin-top: 100px;

        span {
          color: #e02041;
          margin-right: 5px;
        }

        .link {
          text-decoration: none;
          margin-left: 10px;
          color: #41414d;
          font-weight: 500;
          transition: opacity 0.1s;
        }

        .link:hover {
          opacity: 0.6;
        }
      }
    }

    form {
      margin-left: 50px;
      max-width: 450px;

      input {
        margin-bottom: 5px;
      }

      div {
        display: grid;
        grid-template-columns: 1fr 0.2fr;
        gap: 5px;
      }
    }
  }
`;
