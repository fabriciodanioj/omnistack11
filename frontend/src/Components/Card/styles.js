import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  border-radius: 8px;
  position: relative;
  padding: 32px;

  h1 {
    font-weight: bold;
    font-size: 14px;
    line-height: 14px;
    margin-bottom: 16px;
    color: #41414d;
  }

  p {
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    color: #737380;
    margin-bottom: 24px;
  }

  p:last-child {
    margin-bottom: 0;
  }

  button {
    position: absolute;
    top: 32px;
    right: 32px;
    background: #ffffff;
    width: 24px;
    height: 24px;
    color: #a8a8a0;
  }
`;
