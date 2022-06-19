import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
  color: black;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const GenderComponent = styled.div`
  display: flex;
`;

const Gender = styled.span`
  display: flex;
  align-items: center;
  margin-left: 25px;
  justify-content: space-between;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    color: #c8b3c2;
  }
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
  text-decoration: none;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: 25px;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  &:hover {
    color: #c8b3c2;
  }
`;

const Navbar = () => {
  //var olan tüm initial değerleri getirrir sepetteki
  const cart = useSelector((state) => state.cart);
  console.log(`CART: ${cart}`);
  const quantity = useSelector((state) => state.cart.quantity);
  console.log(`QUANTITY: ${quantity}`);
  return (
    <Container>
      <Wrapper>
        <Center>
          <Logo>
            <Link to="/" style={{ textDecoration: "none" }}>
              Flamingo.
            </Link>
          </Logo>
        </Center>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
