import styled from "styled-components";
import photo from "../images/Group 12.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../components/ProductContext";

function ThankYou() {
  const { setCheckOutPage } = useContext(ProductContext);
  return (
    <OpacityDiv>
      <Div>
        <Img src={photo}></Img>
        <ThankuText>THANK YOU FOR YOUR ORDER</ThankuText>
        <StyleLink to="/">
          <CheckOutBtn onClick={() => setCheckOutPage(false)}>
            Back To Home
          </CheckOutBtn>
        </StyleLink>
      </Div>
    </OpacityDiv>
  );
}

export default ThankYou;

const Img = styled.img`
  width: 40px;
  height: 40px;
`;

const ThankuText = styled.h1`
  font-family: Manrope;
  font-size: 32px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 1.1428571939468384px;
  text-align: left;
`;

const Div = styled.div`
  background-color: ${(props) => props.theme.colors.LightGray};
  width: 540px;
  height: 540px;
  position: absolute;
  left: 35%;
  top: 12%;
  z-index: 120;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
`;
const OpacityDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  width: 100%;
  height: 170%;
  top: 88px;
  left: 0;
  z-index: 100;
`;
const CheckOutBtn = styled.button`
  all: unset;
  cursor: pointer;

  height: 48px;
  width: 279px;

  background-color: ${(props) => props.theme.colors.Orange};
  color: ${(props) => props.theme.colors.White};
  font-family: Manrope;
  font-size: 13px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 1px;
  text-align: center;
  margin-top: 24px;
  text-align: center;
  :hover {
    background-color: ${(props) => props.theme.colors.LightOrange};
  }
`;
const StyleLink = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
