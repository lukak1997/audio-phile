import styled from "styled-components";
import more from "../images/Path 2 (1).png";
import {Link} from 'react-router-dom'
import{ useContext }from 'react'
import {ProductContext} from "../components/ProductContext";
function ShopItem(props: any) {
  const{setTitle}=useContext(ProductContext)
  return (
    <Container>
      <Icon src={props.icon}></Icon>
      <Down>
        <Title>{props.title}</Title>
        <StyleLink to='/productpage'><Div onClick={()=>{setTitle(props.title);localStorage.setItem("title", props.title);}}>
          <Shop>SHOP</Shop>
          <More src={more} />
        </Div>
        </StyleLink>
      </Down>
    </Container>
  );
}

export default ShopItem;
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Shop = styled.h1`
  font-family: "Manrope", sans-serif;
  font-size: 13px;
  font-weight: 700;
  line-height:17.76px;
  letter-spacing: 1px;
  color: ${(props) => props.theme.colors.LightBlack};
  opacity: 50%;
  :hover{
    color: ${(props) => props.theme.colors.Orange};
    opacity: 100%;
  }
`;
const More = styled.img`
  margin-left: 13.44px;
`;

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.White};
  position: relative;
`;

const Down = styled.div`
  background-color: ${(props) => props.theme.colors.LightGray};
  display: flex;
  flex-direction: column;
  height: 165px;
  width: 327px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  :hover{
    background-color:#ebeaea
  }
  @media (min-width: 768px) {
    width: 223px;
  }
  @media (min-width: 1440px) {
    height: 204px;
    width: 350px;
  }
`;
const Icon = styled.img`
  position: absolute;
  width: 180px;
  height: 180px;
  bottom: 35%;
  left: 22%;
  @media (min-width: 768px) {
    width: 140px;
    height: 140px;
    left: 17.5%;
    top: -32%;
  }
  @media (min-width: 1440px) {
    height: 200px;
    width: 200px;
    left: 20%;
    top: -38%;
  }
`;
const Title = styled.h1`
  padding-top:50px;
  padding-bottom:17px;
  font-family: "Manrope", sans-serif;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 1.07px;
  line-height: 20.49px;
  color: ${(props) => props.theme.colors.Black};
  @media (min-width: 1440px) {
    font-family: "Manrope";
    font-size: 18px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 1.2857142686843872px;
    text-align: center;
  }
`;
const StyleLink=styled(Link)`
    text-decoration:none;
  `