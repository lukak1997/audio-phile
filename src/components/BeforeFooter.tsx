import styled from "styled-components";
import boy from "../../public/assets/shared/mobile/image-best-gear.jpg";
import boyTablet from "../../public/assets/shared/tablet/image-best-gear.jpg";
import boyDesktop from "../../public/assets/shared/desktop/image-best-gear.jpg";

const BeforeFooter = () => {
  return (
    <DivWraper>
    <Div>
      <Image src={boy} />
      <ImageTablet src={boyTablet} />
      <ImageDesktop src={boyDesktop} />
      <Container>
        <Title>
          BRINGING YOU THE <span>BEST</span> AUDIO GEAR
        </Title>
        <Paragraph>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </Paragraph>
      </Container>
      <TitleTablet>
        BRINGING YOU THE <span>BEST</span> AUDIO GEAR
      </TitleTablet>
      <ParagraphTablet>
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </ParagraphTablet>
    </Div>
    </DivWraper>
  );
};

export default BeforeFooter;

const DivWraper=styled.div`
     width: 100%;
     display: flex;
     justify-content: center;
     @media (min-width: 1440px) {
    padding:122px 0;
  }

`
const Div = styled.div`
  width: 327px;
  height: 940px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color:${props=>props.theme.colors.White} ;

  @media (min-width: 768px) {
    width: 100%;
    height: 766px;
  }

  @media (min-width: 1440px) {
    width: 1110px;
    height: 588px;
    flex-direction: row-reverse;
    gap:125px;
  }
`;
const Image = styled.img`
  width: 327px;
  height: 300px;
  border-radius: 8px;

  @media (min-width: 768px) {
    display: none;
  }
`;
const ImageTablet = styled.img`
  display: none;
  @media (min-width: 768px) {
    display: inline-block;
    margin: 39px;
    border-radius: 8px;
    margin-left: 39px;
    margin-right: 40px;
    width: 689px;
    height: 300px;
  }
  @media (min-width: 1440px) {
    display: none;
  }
`;
const ImageDesktop = styled.img`
  display: none;
  @media (min-width: 1440px) {
    display: inline-block;
    border-radius: 8px;
    width: 540px;
    height: 588px;
    
  }
`;
const Title = styled.h1`
  span {
    color: orange;
  }
  font-family: "Manrope", sans-serif;
  font-size: 28px;
  margin-top: 32px;
  text-align: center;

  @media (min-width: 768px) {
    width: 573px;
    height: 88px;
    font-size: 40px;
  }

  @media (min-width: 1440px) {
    width: 445px;
    text-align: left;
  }
`;
const TitleTablet = styled(Title)`
  @media (min-width: 1440px) {
    display: none;
  }
`;
const Paragraph = styled.p`
  font-size: 15px;
  color: black;
  font-family: "Manrope", sans-serif;
  margin-top: 32px;
  text-align: center;
  opacity: 50%;

  @media (min-width: 768px) {
    width: 573px;
    height: 150px;

  }
  @media (min-width: 1440px) {
    width: 445px;
    height: 175px;
    text-align: left;
    
  }
`;
const ParagraphTablet = styled(Paragraph)`
  @media (min-width: 1440px) {
    display: none;
  }
`;
const Container = styled.div`
  display: none;
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
