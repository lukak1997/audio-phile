import styled from "styled-components";
import SimilarProduct from "../components/SimilarProduct";
import ShopItem from "../components/ShopItem";
import BeforeFooter from "../components/BeforeFooter";
import { useContext } from "react";
import { ProductContext } from "../components/ProductContext";

const ProductDetail = () => {
  const { Data, index, icons, setArray, array,count,setCount,setCartNumber,setVisible } = useContext(ProductContext);
  

  function AddToCard() {
    const Item = array.find((el: any) => el.name === Data[index].name);
      if (Item) {
        setArray(
          array.map((el: any) =>
            el.name === Data[index].name ? { ...el, number: el.number+count } : el
          )
        );
      } else {
        setArray([...array, { name: Data[index].name, number:count ,cartPhoto:Data[index].categoryImage.mobile ,price:Data[index].price }]);
      }
      setCartNumber((prev:any)=>prev + count)
      setVisible(true)
      setCount(1)
  }
  return (
    <AllWrapper>
      <MainDiv>
        <Photo photo={Data[index].image}></Photo>
        <DivWrapper>
          {Data[index].new && <New>NEW PRODUCT</New>}
          <Title>{Data[index].name}</Title>
          <Paragraph>{Data[index].description}</Paragraph>
          <Price>${Data[index].price.toLocaleString()}</Price>
          <BtnDiv>
            <CountButton>
              <Count
                onClick={() => setCount((prev:any) => (prev > 1 ? prev - 1 : prev))}
              >
                -
              </Count>
              <Count>{count}</Count>
              <Count onClick={() => setCount((prev:any) => prev + 1)}>+</Count>
            </CountButton>
            <Btn onClick={() => AddToCard()}>ADD TO CARD</Btn>
          </BtnDiv>
        </DivWrapper>
      </MainDiv>
      <Div>
        <FeatureDiv>
          <FeatureTitle>FEATURES</FeatureTitle>
          <FeatureText>{Data[index].features}</FeatureText>
        </FeatureDiv>
        <BoxDiv>
          <BoxTitle>IN THE BOX</BoxTitle>
          <BoxWrapper>
            {Data[index].includes.map((item: any) => (
              <BoxText Quantity={item.quantity}>{item.item}</BoxText>
            ))}
          </BoxWrapper>
        </BoxDiv>
      </Div>
      <PhotoDiv>
        <GridWraper>
          <PhotoOne Gallery={Data[index].gallery}></PhotoOne>
          <PhotoTwo Gallery={Data[index].gallery}></PhotoTwo>
        </GridWraper>
        <PhotoThree Gallery={Data[index].gallery}></PhotoThree>
      </PhotoDiv>
      <HeaderText>you may also like</HeaderText>

      <SimilarProductDiv>
        {Data[index].others.map((el: any) => (
          <SimilarProduct
            title={el.name}
            photoMobile={el.image.mobile}
            photoTablet={el.image.tablet}
            photoDesktop={el.image.desktop}
          />
        ))}
      </SimilarProductDiv>

      <ShopItemMappedDiv>
        {icons.map((icon: any) => (
          <ShopItem title={icon.title} icon={icon.icon} />
        ))}
      </ShopItemMappedDiv>
      <BeforeFooter />
    </AllWrapper>
  );
};

export default ProductDetail;
const AllWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 1440px) {
    align-items: center;
    justify-content: center;
    padding-left: 40px;
    padding-right: 40px;
  }
`;
const BoxWrapper = styled.div`
  @media (min-width: 768px) {
    margin-left: 11px;
  }
  @media (min-width: 1440px) {
    margin-left: 0;
  }
`;
const BoxText = styled.p<{ Quantity: number }>`
  ::before {
    content: "${(props) => props.Quantity}x";
    padding-right: 24px;
    color: ${(props) => props.theme.colors.Orange};
    font-family: "Manrope";
  }
  font-family: "Manrope";
  font-size: 24px;
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 8px;
  color: ${(props) => props.theme.colors.Black};
`;
const BoxTitle = styled.h1`
  height: 36px;
  width: 327px;
  font-family: "Manrope";
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0.8571428656578064px;
  text-align: left;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    font-size: 32px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 1.1428571939468384px;
  }
`;
const BoxDiv = styled.div`
  margin-top: 88px;
  @media (min-width: 768px) {
    display: flex;
  }
  @media (min-width: 1440px) {
    flex-direction: column;
  }
`;
const FeatureText = styled.p`
  height: 475px;
  width: 327px;
  opacity: 0.5;
  font-family: "Manrope";
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: left;
  margin-top: 24px;
  color: ${(props) => props.theme.colors.Black};
  @media (min-width: 768px) {
    height: 250px;
    width: 689px;
  }
`;
const FeatureTitle = styled.h1`
  font-family: "Manrope";
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0.8571428656578064px;
  text-align: left;
  margin-top: 88px;
  @media (min-width: 768px) {
    font-size: 32px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 1.1428571939468384px;
  }
`;
const FeatureDiv = styled.div``;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1440px) {
    flex-direction: row;
    gap: 80px;
  }
`;

const Count = styled.div`
  font-family: Manrope;
  font-size: 13px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 1px;
  text-align: center;
  color: ${(props) => props.theme.colors.Black};
  cursor: pointer;
`;

const CountButton = styled.div`
  height: 48px;
  width: 120px;
  background-color: ${(props) => props.theme.colors.LightGray};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const Price = styled.h1`
  font-family: Manrope;
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 1.2857142686843872px;
  text-align: left;
  margin-top: 32px;
`;

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 50px;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 69.5px;
    margin-top: 160px;
    justify-content: flex-start;
    /* margin-left: 39px; */
  }
  @media (min-width: 1440px) {
    gap: 125px;
    margin-top: 160px;
    margin-bottom: 160px;
    /* margin-left: 165px; */
  }
`;

const DivWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
`;

const Photo = styled.div<{ photo: any }>`
  width: 327px;
  height: 352px;
  border-radius: 8px;
  background-image: url(${(props) => props.photo.mobile});
  background-size: contain;
  background-repeat: no-repeat;

  @media (min-width: 768px) {
    height: 480px;
    width: 281px;
    border-radius: 8px;
    background-image: url(${(props) => props.photo.tablet});
  }

  @media (min-width: 1440px) {
    background-image: url(${(props) => props.photo.desktop});
    width: 540px;
    height: 560px;
  }
`;
const Title = styled.h1`
  width: 327px;
  height: 76px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: left;

  @media (min-width: 768px) {
    height: 88px;
    width: 339px;
  }

  @media (min-width: 1440px) {
    width: 445px;
    height: 88px;
    text-align: left;
  }
`;
const Paragraph = styled.p`
  width: 327px;
  height: 125px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  text-align: left;
  opacity: 0.5;

  @media (min-width: 768px) {
    width: 339px;
    height: 75px;
  }

  @media (min-width: 1440px) {
    width: 445px;
    height: 100px;
    text-align: left;
  }
`;
const New = styled.h1`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 10px;
  color: #d87d4a;
  text-align: left;
  @media (min-width: 1440px) {
    text-align: left;
  }
`;

const BtnDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 16px;
`;

const Btn = styled.button`
  all: unset;
  height: 48px;
  width: 160px;
  background-color: ${(props) => props.theme.colors.Orange};
  color: ${(props) => props.theme.colors.White};
  font-family: Manrope;
  font-size: 13px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 1px;
  text-align: center;
  :hover {
    background-color: ${(props) => props.theme.colors.LightOrange};
  }
`;

const PhotoDiv = styled.div`
  display: grid;
  place-items: center;
  gap: 18px;
  margin-top: 88px;
  @media (min-width: 768px) {
    display: flex;
  }
  @media (min-width: 1440px) {
  }
`;
const GridWraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: 1440px) {
    gap: 30px;
  }
`;
const PhotoOne = styled.div<{ Gallery: any }>`
  background-image: url(${(props) => props.Gallery.first.mobile});
  width: 327px;
  height: 174px;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 8px;

  @media (min-width: 768px) {
    background-image: url(${(props) => props.Gallery.first.tablet});
    width: 277px;
  }
  @media (min-width: 1440px) {
    background-image: url(${(props) => props.Gallery.first.desktop});
    width: 445px;
    height: 280px;
  }
`;
const PhotoTwo = styled.div<{ Gallery: any }>`
  background-image: url(${(props) => props.Gallery.second.mobile});
  width: 327px;
  height: 174px;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 8px;

  @media (min-width: 768px) {
    background-image: url(${(props) => props.Gallery.second.tablet});
    width: 277px;
  }
  @media (min-width: 1440px) {
    background-image: url(${(props) => props.Gallery.second.desktop});
    width: 445px;
    height: 280px;
  }
`;
const PhotoThree = styled.div<{ Gallery: any }>`
  background-image: url(${(props) => props.Gallery.third.mobile});
  width: 327px;
  height: 368px;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 8px;

  @media (min-width: 768px) {
    background-image: url(${(props) => props.Gallery.third.tablet});
    width: 395px;
    height: 368px;
  }
  @media (min-width: 1440px) {
    background-image: url(${(props) => props.Gallery.third.desktop});
    width: 635px;
    height: 592px;
  }
`;
const SimilarProductDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 40px;
  justify-content: center;
  align-items: center;
  margin-bottom: 120px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 11px;
    margin-top: 56px;
  }
  @media (min-width: 1440px) {
    gap: 30px;
    margin-top: 64px;
  }
`;

const ShopItemMappedDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 180px;
  padding-bottom: 25px;
  gap: 100px;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 10px;
  }
  @media (min-width: 1440px) {
    gap: 30px;
  }
`;
const HeaderText = styled.h1`
  margin-top: 108px;
  font-family: Manrope;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0.8571428656578064px;
  text-align: center;
  color: ${(props) => props.theme.colors.Black};
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 32px;
    letter-spacing: 1.1428571939468384px;
  }
  @media (min-width: 1440px) {
  }
`;
