import { createContext, useState, useEffect, useLayoutEffect } from "react";
import Data from "../data.json";
import icon1 from "../../public/assets/shared/desktop/image-category-thumbnail-headphones.png";
import icon2 from "../../public/assets/shared/desktop/image-category-thumbnail-speakers.png";
import icon3 from "../../public/assets/shared/desktop/image-category-thumbnail-earphones.png";
import styled from "styled-components";
type ProductContextType = {
  title: string;
  index: number;
  setIndex: any;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  Data: any;
  icons: any;
  UseScreenWidth: any;
  setArray: any;
  array: any;
  count: number;
  setCount: any;
  cartNumber: number;
  setCartNumber: any;
  visible: boolean;
  setVisible: any;
  totalPrice: any;
  setTotalPrice: any;
  setArrayOfUsers: any;
  checkOutPage: boolean;
  setCheckOutPage: any;
};

export const ProductContext = createContext<ProductContextType>(
  {} as ProductContextType
);

export const ProductContextProvider = ({ children }: any) => {
  const { localStorage } = window;
  const [title, setTitle] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const [array, setArray] = useState([]);
  const [count, setCount] = useState(1);
  const [cartNumber, setCartNumber] = useState(0);
  const [visible, setVisible] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [arrayOfUsers, setArrayOfUsers] = useState([]);
  const [checkOutPage, setCheckOutPage] = useState(false);
  const icons = [
    { title: "HEADPHONES", icon: icon1 },
    { title: "SPEAKERS", icon: icon2 },
    { title: "EARPHONES", icon: icon3 },
  ];
  console.log("users:", arrayOfUsers);

  function savedTitle() {
    const savedTitle = localStorage.getItem("title");
    if (savedTitle) {
      setTitle(savedTitle);
    }
  }
  function savedIndex() {
    const savedIndex = localStorage.getItem("index");
    if (savedIndex) {
      setIndex(+savedIndex);
    }
  }

  useLayoutEffect(() => {
    savedTitle();
    savedIndex();
  }, []);

  console.log(title);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [title, index, array]);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    setScreenWidth(window.innerWidth);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const UseScreenWidth = ({
    photoMobile,
    photoTablet,
    photoDesktop,
    widthMobile,
    heightMobile,
    widthTablet,
    heightTablet,
    widthDesktop,
    heightDesktop,
  }: any) => {
    const screenW = screenWidth;

    let renderedImage;
    if (screenW < 768) {
      renderedImage = photoMobile;
    } else if (screenW >= 768 && screenW < 1440) {
      renderedImage = photoTablet;
    } else {
      renderedImage = photoDesktop;
    }
    return (
      <Photo
        widthMobile={widthMobile}
        heightMobile={heightMobile}
        widthTablet={widthTablet}
        heightTablet={heightTablet}
        widthDesktop={widthDesktop}
        heightDesktop={heightDesktop}
        src={renderedImage}
      ></Photo>
    );
  };

  return (
    <ProductContext.Provider
      value={{
        title,
        setTitle,
        index,
        setIndex,
        Data,
        icons,
        UseScreenWidth,
        array,
        setArray,
        count,
        setCount,
        cartNumber,
        setCartNumber,
        visible,
        setVisible,
        totalPrice,
        setTotalPrice,
        setArrayOfUsers,
        checkOutPage,
        setCheckOutPage,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
const Photo = styled.img<{
  widthMobile: any;
  heightMobile: any;
  widthTablet: any;
  heightTablet: any;
  widthDesktop: any;
  heightDesktop: any;
}>`
  width: ${(props) => props.widthMobile}px;
  height: ${(props) => props.heightMobile}px;
  border-radius: 8px;
  @media (min-width: 768px) {
    height: ${(props) => props.heightTablet}px;
    width: ${(props) => props.widthTablet}px;
  }
  @media (min-width: 1440px) {
    height: ${(props) => props.heightDesktop}px;
    width: ${(props) => props.widthDesktop}px;
  }
`;
