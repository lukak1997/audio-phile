import styled from "styled-components";
import rectangle from "../images/Rectangle.png";
import audiophile from "../images/audiophile.png";
import shape from "../images/Shape .png";
import ShopItem from "./ShopItem";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "./ProductContext";
function Header() {
  const { localStorage } = window;
  const [menuVisible, setMenuVisible] = useState(false);

  const {
    setTitle,
    array,
    setIndex,
    title,
    icons,
    cartNumber,
    setCartNumber,
    setArray,
    visible,
    setVisible,
    totalPrice,
    setTotalPrice,
    setCheckOutPage,
    checkOutPage,
  } = useContext(ProductContext);

  const [render, setRender] = useState(false);

  useEffect(() => {
    calculateTotalPrice();
  }, [array, render]);

  function AddProductNumberInCart(direction: any, name: any) {
    const ClickedItem = array.findIndex((item: any) => item.name === name);
    if (direction === "minus") {
      if (array[ClickedItem].number > 0) {
        array[ClickedItem].number = array[ClickedItem].number - 1;
        setCartNumber((prev: any) => prev > 0 && prev - 1);
        setRender(!render);
      }
    } else {
      array[ClickedItem].number = array[ClickedItem].number + 1;
      setCartNumber((prev: any) => prev + 1);
      setRender(!render);
    }
    if (array[ClickedItem].number === 0) {
      const filteredArray = array.filter((el: any) => el.number !== 0);
      setArray(filteredArray);
    }
  }

  console.log(array);
  function calculateTotalPrice() {
    let totalPrice = 0;

    array.forEach((el: any) => {
      const product = parseInt(el.number) * parseInt(el.price);
      totalPrice += product;
    });

    return setTotalPrice(totalPrice);
  }

  function GetInnerText(e: any) {
    setTitle(e.target.innerText);
    setIndex(-1);
    setVisible(false);
    localStorage.setItem("title", e.target.innerText);
  }

  function ShapeClick() {
    setVisible(!visible);
  }
  return (
    <>
      <Wrapper title={title} visible={visible}>
        {visible ? (
          <>
            <OpacityDiv onClick={() => setVisible(false)} />
            <WhiteCard>
              {array.length > 0 && (
                <CartDiv>
                  <Cart>CART({cartNumber})</Cart>
                  <Remove
                    onClick={() => {
                      setArray([]);
                      setCartNumber(0);
                    }}
                  >
                    Remove all
                  </Remove>
                </CartDiv>
              )}
              {array.length === 0 && (
                <h1
                  style={{
                    marginTop: 4,
                    textAlign: "center",
                    fontSize: 22,
                    fontFamily: "Manrope",
                  }}
                >
                  Your cart is empty!
                </h1>
              )}
              {array.map((el: any) => (
                <>
                  <WraperMain>
                    <Images src={el.cartPhoto} alt="nofwsfw"></Images>
                    <CountWrap>
                      <Wrap>
                        <CartTitle>
                          {el.name.split("").length > 12
                            ? el.name.split("").splice(0, 4)
                            : el.name.split("").splice(0, 3)}
                        </CartTitle>
                        <Price>
                          ${(el.number * el.price).toLocaleString()}
                        </Price>
                      </Wrap>
                      <CountBtn>
                        <Min
                          onClick={() =>
                            AddProductNumberInCart("minus", el.name)
                          }
                        >
                          -
                        </Min>
                        <Num>{el.number}</Num>{" "}
                        <Plus
                          onClick={() =>
                            AddProductNumberInCart("plus", el.name)
                          }
                        >
                          +
                        </Plus>
                      </CountBtn>
                    </CountWrap>
                  </WraperMain>
                </>
              ))}

              {array.length > 0 && (
                <TotalWrap>
                  <Total>TOTAL</Total>
                  <TotalPrice>${totalPrice.toLocaleString()}</TotalPrice>
                </TotalWrap>
              )}
              {array.length > 0 && (
                <StyleLink to="/checkoutpage">
                  <CheckOutBtn
                    onClick={() => {
                      setVisible(false);
                      setCheckOutPage(true);
                    }}
                  >
                    CHECKOUT
                  </CheckOutBtn>
                </StyleLink>
              )}
            </WhiteCard>
          </>
        ) : null}

        <Div title={title} visible={visible}>
          <RectangleDivMobile onClick={() => setMenuVisible(!menuVisible)}>
            <RectangleImageMobile src={rectangle} />
            <RectangleImageMobile src={rectangle} />
            <RectangleImageMobile src={rectangle} />
          </RectangleDivMobile>
          <StyleLink to="/">
            <AudioPhileDivMobile title={title}>
              <AudioPhileMobile
                onClick={() => {
                  setIndex(-1);
                  setTitle("");
                }}
                src={audiophile}
              />
            </AudioPhileDivMobile>
          </StyleLink>
          <WrapperTablet>
            <RectangleDiv onClick={() => setMenuVisible(!menuVisible)}>
              <RectangleImage src={rectangle} />
              <RectangleImage src={rectangle} />
              <RectangleImage src={rectangle} />
            </RectangleDiv>
            <AudioPhileDiv title={title}>
              <StyleLink to="/">
                <AudioPhile
                  onClick={() => {
                    setIndex(-1);
                    setTitle("");
                    localStorage.setItem("title", "");
                    setVisible(false);
                  }}
                  src={audiophile}
                />
              </StyleLink>
            </AudioPhileDiv>
          </WrapperTablet>
          <MenuDiv>
            <StyleLink to="/">
              <Home
                onClick={() => {
                  setIndex(-1);
                  setTitle("");
                  localStorage.setItem("title", "");
                  setVisible(false);
                }}
              >
                HOME
              </Home>
            </StyleLink>
            <StyleLink to="/productpage">
              {" "}
              <HeadPhones
                onClick={(e: any) => {
                  GetInnerText(e);
                }}
              >
                HEADPHONES
              </HeadPhones>{" "}
            </StyleLink>
            <StyleLink to="/productpage">
              <Speakers
                onClick={(e: any) => {
                  GetInnerText(e);
                }}
              >
                SPEAKERS
              </Speakers>
            </StyleLink>
            <StyleLink to="/productpage">
              <EarPhones
                onClick={(e: any) => {
                  GetInnerText(e);
                }}
              >
                EARPHONES
              </EarPhones>
            </StyleLink>
          </MenuDiv>
          <ShapeDiv title={title}>
            <Shape
              src={shape}
              onClick={() => {
                !checkOutPage && ShapeClick();
              }}
            />
          </ShapeDiv>
        </Div>
        <Line />
      </Wrapper>
      {menuVisible && (
        <MappedDiv menuVisible={menuVisible}>
          {icons.map((icon: any) => (
            <ShopItem title={icon.title} icon={icon.icon} />
          ))}
        </MappedDiv>
      )}
    </>
  );
}

const OpacityDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  width: 100%;
  height: 455%;
  top: 88px;
  z-index: 10;
`;
const CheckOutBtn = styled.button`
  all: unset;
  cursor: pointer;

  height: 48px;
  width: 313px;
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
const WhiteCard = styled.div`
  height: auto;
  width: 377px;
  right: 385px;
  top: 129px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.White};
  position: absolute;
  padding: 32px 31px 31px 33px;
  outline: none;
  z-index: 20;
`;

const Cart = styled.h3`
  font-family: Manrope;
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 1.2857142686843872px;
  text-align: left;
`;

const Remove = styled.h2`
  font-family: Manrope;
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: left;
  color: ${(props) => props.theme.colors.Black};
  opacity: 0.5;
  cursor: pointer;
`;

const Images = styled.img`
  height: 64px;
  width: 64px;
  border-radius: 8px;
`;

const WraperMain = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 60px;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const CartTitle = styled.h2`
  font-family: Manrope;
  font-size: 15px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: left;
  color: ${(props) => props.theme.colors.Black};
`;

const Price = styled.h2`
  font-family: Manrope;
  font-size: 14px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: left;
  color: ${(props) => props.theme.colors.Black};
  opacity: 0.5;
`;

const CountWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const CountBtn = styled.button`
  height: 32px;
  width: 96px;
  background-color: ${(props) => props.theme.colors.LightGray};
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Num = styled.h1`
  font-family: Manrope;
  font-size: 13px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 1px;
  color: ${(props) => props.theme.colors.Black};
`;

const TotalWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
`;

const Total = styled.h1`
  font-family: Manrope;
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: left;
  color: ${(props) => props.theme.colors.Black};
  opacity: 0.5;
`;

const TotalPrice = styled.h1`
  color: ${(props) => props.theme.colors.Black};
  font-family: Manrope;
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: center;
`;

const Plus = styled.div`
  cursor: pointer;
`;

const Min = styled.div`
  cursor: pointer;
`;

const CartDiv = styled.div`
  height: auto;
  width: 377px;
  left: 0;
  top: 32px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.White};
  position: absolute;
  display: flex;
  gap: 149px;
  padding-left: 33px;
`;
export default Header;
const MappedDiv = styled.div<{ menuVisible: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  gap: 80px;
  margin-top: 120px;
  margin-bottom: 35px;
  transition: height 5s, visibility 5s;
  position: absolute;
  top: -2.8%;
  left: 0;
  background-color: white;
  z-index: 5;
  height: 850px;
  width: 375px;
`;

const Wrapper = styled.div<{ title: string; visible: boolean }>`
  background-color: ${(props) =>
    props.title || props.visible ? "black" : "#1a1a1a"};
  @media (min-width: 768px) {
    padding: 0 39.61px;
  }
  @media (min-width: 1440px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const Div = styled.div<{ title: string; visible: boolean }>`
  height: 89px;
  width: 100%;
  background-color: ${(props) =>
    props.title || props.visible ? "black" : "#1a1a1a"};
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  @media (min-width: 768px) {
    padding: 0;
  }
  @media (min-width: 1440px) {
    padding: 0;
    width: 1100px;
  }
`;

const RectangleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  flex-direction: column;
  @media (min-width: 1440px) {
    display: none;
  }
`;
const RectangleDivMobile = styled(RectangleDiv)`
  @media (min-width: 768px) {
    display: none;
  }
`;
const RectangleImage = styled.img`
  margin-right: 42px;
  width: 16px;
  height: 3px;
`;
const RectangleImageMobile = styled(RectangleImage)`
  @media (min-width: 768px) {
    display: none;
  }
`;
const AudioPhileDiv = styled.div<{ title: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AudioPhileDivMobile = styled(AudioPhileDiv)`
  @media (min-width: 768px) {
    display: none;
  }
`;

const AudioPhile = styled.img`
  cursor: pointer;
`;
const AudioPhileMobile = styled(AudioPhile)`
  @media (min-width: 768px) {
    display: none;
  }
  cursor: pointer;
`;

const ShapeDiv = styled(AudioPhileDiv)``;
const Shape = styled.img``;

const WrapperTablet = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`;
const Line = styled.div`
  height: 1px;
  background-color: ${(props) => props.theme.colors.White};
  width: 100%;
  opacity: 60%;
  @media (min-width: 1440px) {
    width: 1110px;
    opacity: 10%;
  }
`;

const MenuDiv = styled.div`
  display: none;
  @media (min-width: 1440px) {
    display: flex;
    align-items: center;
    gap: 34px;
    padding-left: 197px;
    padding-right: 319px;
  }
`;
const Home = styled.h1`
  font-family: "Manrope", sans-serif;
  font-weight: 700;
  font-size: 13px;
  line-height: 25px;
  letter-spacing: 2px;
  color: ${(props) => props.theme.colors.White};
  cursor: pointer;
  :hover {
    color: ${(props) => props.theme.colors.Orange};
  }
`;
const HeadPhones = styled(Home)``;
const Speakers = styled(Home)``;
const EarPhones = styled(Home)``;

const StyleLink = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
