import styled from "styled-components";

export const Body = styled.div`
  background-color: ${(props) => props.theme.background};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${(props) => props.theme.color};
`;

export const AppLink = styled.a`
  color: ${(props) => props.theme.linkColor};
`;

export const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(var(--nav-size) * 0.8);
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Merienda", cursive;
  font-weight: 500;
  font-size: 1em;
  padding: 10px 30px;
  margin-right: 20px;
  margin-bottom: 20px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  color: #fff;
`;
