import styled from "styled-components";
import audiophile from "../images/audiophile.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import insta from "../images/instagram.png";
import {Link} from 'react-router-dom'
import{ useContext }from 'react'
import {ProductContext} from "../components/ProductContext";


export default function Footer() {
  const{setTitle}=useContext(ProductContext)

  function GetInnerText(e:any){
    setTitle(e.target.innerText)
  }
  return (
    <>
      <Container>
        <Line></Line>
        <Audiophile src={audiophile}></Audiophile>
        <PagesWrapper>
        <StyleLink to='/'> <Pages>HOME</Pages></StyleLink>
        <StyleLink to='/productpage'><Pages onClick={(e:any)=>{ GetInnerText(e.target.innerText)}}>HEADPHONES</Pages></StyleLink>
        <StyleLink to='/productpage'> <Pages onClick={(e:any)=>{ GetInnerText(e.target.innerText)}}>SPEAKERS</Pages></StyleLink>
        <StyleLink to='/productpage'><Pages onClick={(e:any)=>{ GetInnerText(e.target.innerText)}}>EARPHONES</Pages></StyleLink>
     
        </PagesWrapper>

        <Paragraph>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </Paragraph>
        <Wrapper1>
          <Parag>Copyright 2021. All Rights Reserved</Parag>
          <Wrapper>
            <Icon src={facebook}></Icon>
            <Icon src={twitter}></Icon>
            <Icon src={insta}></Icon>
          </Wrapper>
        </Wrapper1>
      </Container>

      <Container1>
        <Line></Line>
        <DeskWrapper>
          <DeskImg src={audiophile}></DeskImg>
          <DeskWrapper1>
          <StyleLink to='/'><DeskPages>Home</DeskPages></StyleLink>
          <StyleLink to='/productpage'><DeskPages onClick={(e:any)=>{ GetInnerText(e)}}>HEADPHONES</DeskPages></StyleLink>
          <StyleLink to='/productpage'><DeskPages onClick={(e:any)=>{ GetInnerText(e)}}>SPEAKERS</DeskPages></StyleLink>
          <StyleLink to='/productpage'><DeskPages onClick={(e:any)=>{ GetInnerText(e)}}>EARPHONES</DeskPages></StyleLink>
          </DeskWrapper1>
        </DeskWrapper>
        <DeskWrapper2>
          <Paragraph>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </Paragraph>
          <Wrapper>
            <Icon src={facebook}></Icon>
            <Icon src={twitter}></Icon>
            <Icon src={insta}></Icon>
          </Wrapper>
        </DeskWrapper2>
        <Text>Copyright 2021. All Rights Reserved</Text>
      </Container1>
    </>
  );
}
const StyleLink=styled(Link)`
    text-decoration:none;
  `

const Text = styled.div`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.5;
  margin-top: 56px;
  padding-bottom: 48px;
`;

const DeskWrapper2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 36px;
`;
const DeskWrapper1 = styled.div`
  display: flex;
  gap: 34px;
`;
const DeskWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 75px;
`;

const DeskPages = styled.div`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 25px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;
  :hover{
        color:${props=>props.theme.colors.LightOrange};
        cursor:pointer;
    }
`;

const DeskImg = styled.img`
cursor: pointer;
`;

const Container1 = styled.div`
  display: none;

  @media (min-width: 1440px) {
    display: block;
    width: 100%;
    background-color: ${(props) => props.theme.colors.Black};
    padding: 0 165px;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.Black};
  padding: 0 24px;
  @media (min-width: 768px) {
    align-items: flex-start;
    padding: 0 39px;
  }
  @media (min-width: 1440px) {
    display: none;
  }
`;
const Line = styled.div`
  width: 104px;
  height: 4px;
  background-color: ${(props) => props.theme.colors.Orange};
  margin-bottom: 48px;
`;
const Audiophile = styled.img`
  margin-bottom: 48px;
  cursor: pointer;
`;
const Pages = styled.h4`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 25px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.White};
  margin-bottom: 16px;
  cursor: pointer;
`;
const Paragraph = styled.p`
  max-width: 600px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: ${(props) => props.theme.colors.White};
  mix-blend-mode: normal;
  opacity: 0.5;
  margin-top: 32px;
  margin-bottom: 48px;
  @media (min-width: 768px) {
    text-align: left;
  }
`;
const Parag = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: ${(props) => props.theme.colors.White};
  mix-blend-mode: normal;
  opacity: 0.5;
  margin-bottom: 48px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 38px;
`;

const Icon = styled.img`
  cursor: pointer;
`;
const PagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    display: flex;
    gap: 34px;
    flex-direction: row;
  }
`;

const Wrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 33px;
  }
`;