import styled from "styled-components";
import MobileHad from '../../public/assets/home/mobile/image-header.jpg'
import TableteHad from '../../public/assets/home/tablet/image-header.jpg'
import DesktopHad from '../images/xx99-mark-ii-headphones.f7f5fde6090b9f9cfd2ceb115f60aa37.jpg'
import {Link} from 'react-router-dom'
import{ useContext }from 'react'
import {ProductContext} from "./ProductContext";

const AfterHeader=()=>{
  const{setIndex}=useContext(ProductContext)
return(

        <MainDiv>
          <PhotoDesktop src={DesktopHad}/>
        <BlackHadPhone >
          <Header>NEW PRODUCT</Header>
          <HadWraper>
          <HeaderBoldOne>XX99 MARK II</HeaderBoldOne>
          <HeaderBoldOne>HEADPHONE</HeaderBoldOne>
          </HadWraper>
          <Paragraph>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</Paragraph>
          <Wraper>
          <StyleLink to='/productdetail'><Btn onClick={()=>{setIndex(3);localStorage.setItem("index", '3');}}>See Product</Btn></StyleLink>
          </Wraper>
        </BlackHadPhone>
        <Div>
        <Header>NEW PRODUCT</Header>
          <HadWraper>
          <HeaderBoldOne>XX99 MARK II</HeaderBoldOne>
          <HeaderBoldOne>HEADPHONE</HeaderBoldOne>
          </HadWraper>
          <Paragraph>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</Paragraph>
          <Wraper>
          <StyleLink to='/productdetail'><Btn onClick={()=>{setIndex(3);localStorage.setItem("index", '3');}}>See Product</Btn></StyleLink>
          </Wraper>
        </Div>
        </MainDiv>
    
)

}
export default  AfterHeader
const Div=styled.div`
display:none;
@media (min-width: 1440px) {
  display:flex;
    background-color:#1a1a1a;
    flex-direction: column;
    margin-top:0;
    height:632px;
}
  
`
const  PhotoDesktop=styled.img`
width: 690px;
    height:600px;
    display:none;
    @media (min-width: 1440px) {
  display:inline-block;
}
    `
const StyleLink=styled(Link)`
    text-decoration:none;
  `



const MainDiv=styled.div`
width: 100%;
display: flex;
justify-content: center;
background-color:#1a1a1a;
z-index:1;
@media (min-width: 1440px) {
    flex-direction:row-reverse;
    align-items:center;
}
`
const BlackHadPhone=styled.div`
  background-image: url(${MobileHad});
  width: 100%;
  height: 511px;
  background-position:center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 23px;
  padding-right: 24px;
  @media (min-width: 768px) {
  height: 640px;
  background-image: url(${TableteHad});
  padding-left:181.61px ;
  padding-right :181.61px;
  align-items: center;
}
@media (min-width: 1440px) {
    background-color:#1a1a1a;
    align-items:start;
    padding: 0 165px;
    width: 708.8px;
    height:632px;
    background-position: top;
    justify-content:left;
    display:none;
}
    
`
const Header=styled.h1`
 font-family: Manrope;
font-size: 14px;
font-weight: 400;
line-height: 19px;
letter-spacing: 10px;
text-align: center;
color:${props=>props.theme.colors.White} ;
opacity: 0.5;
margin-top:108px;
margin-bottom: 16px;

@media (min-width: 1440px) {
margin-top:128px;
text-align:left;
}

`
const HadWraper=styled.div`
    @media (min-width: 768px) {
    width: 396px;
    }
    @media (min-width: 1440px) {

}

`
const HeaderBoldOne=styled.h2`
font-family: Manrope;
font-size: 36px;
font-weight: 700;
line-height: 40px;
letter-spacing: 1.2857142686843872px;
text-align: center;
color: ${props=>props.theme.colors.White};
@media (min-width: 768px) {
 font-family: Manrope;
font-size: 56px;
font-weight: 700;
line-height: 58px;
letter-spacing: 2px;
text-align: center;
}
@media (min-width: 1440px) {
 text-align: start;
}

`
const Paragraph= styled.p`
font-family: Manrope;
font-size: 15px;
font-weight: 500;
line-height: 25px;
letter-spacing: 0px;
text-align: center;
opacity: 0.75;
color:${props=>props.theme.colors.White} ;
margin-top: 24px;
@media (min-width: 768px) {
  width: 349px;
  text-align: center;
}

@media (min-width: 1440px) {
  text-align: left;
}
`
const Wraper=styled.div`
    width: 100%;
    display: flex;
   justify-content: center;
   margin-top: 28px;
   @media (min-width: 1440px) {
 justify-content: start;

}
`
const Btn=styled.button`
all:unset;
height: 48px;
width: 160px;
background-color: ${props=>props.theme.colors.Orange};
color: ${props=>props.theme.colors.White};
font-family: Manrope;
font-size: 13px;
font-weight: 700;
line-height: 18px;
letter-spacing: 1px;
text-align: center;
:hover{
  background-color: ${props=>props.theme.colors.LightOrange};
}


`
