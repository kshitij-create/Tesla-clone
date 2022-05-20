import React, { useState } from "react";
import styled from "styled-components";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <Container>
      <a href="/">
        <img src="/images/logo.svg" alt="" />
      </a>

      <Menu>
        <a href="/">Model S</a>
        <a href="/">Model Y</a>
        <a href="/">Model 3</a>
        <a href="/">Model X</a>
      </Menu>

      <RightMenu>
        <a href="/">Shop</a>
        <a href="/">Account</a>
        <a href="/">Menu</a>
        <CustomMenu onClick={() => setBurgerStatus(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="33"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12
              a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </CustomMenu>
      </RightMenu>

      <BurgerNav show={burgerStatus}>
        <CustomClose onClick={() => setBurgerStatus(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
          </svg>
        </CustomClose>

        <li>
          <a href="/"> Existing Inventory</a>
        </li>
        <li>
          <a href="/"> Used Inventory</a>
        </li>
        <li>
          <a href="/"> Trade-In</a>
        </li>
        <li>
          <a href="/"> Test Drive</a>
        </li>
        <li>
          <a href="/"> Roadster</a>
        </li>
        <li>
          <a href="/"> Semi</a>
        </li>
        <li>
          <a href="/"> Charging</a>
        </li>
        <li>
          <a href="/"> Powerwall</a>
        </li>
        <li>
          <a href="/"> Commercial Energy</a>
        </li>
        <li>
          <a href="/"> Utilities</a>
        </li>
        <li>
          <a href="/"> Find Us</a>
        </li>
        <li>
          <a href="/"> Support</a>
        </li>
        <li>
          <a href="/"> Investor Relations</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled.div`
  svg {
    cursor: pointer;
    margin-left: 10px;
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 325px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  a {
    font-weight: 600;
  }
`;
const CustomClose = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
`;
