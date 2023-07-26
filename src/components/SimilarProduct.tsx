import styled from "styled-components";
import{ useContext }from 'react'
import {ProductContext} from "../components/ProductContext";

const SimilarProduct = (props: {
  title: string;
  photoMobile: string;
  photoTablet: string;
  photoDesktop: string;
 
}) => {
  const{setIndex,Data,UseScreenWidth}=useContext(ProductContext)


  
  function FindItem(){
    const filteredData = Data.find((item:any) => item.name.match(props.title));
    
    const ProductIndex = Data.findIndex(
      (product: any) => product.id === filteredData.id
    );
      if(ProductIndex > -1){
        setIndex(ProductIndex);
        localStorage.setItem("index", ProductIndex);
      }    
  }
  
  return (
    <div>
      <MainDiv>
        <Div>
          <UseScreenWidth
            photoMobile={props.photoMobile}
            photoTablet={props.photoTablet}
            photoDesktop={props.photoDesktop}
            widthMobile={"327"}
            heightMobile={"120"}
            widthTablet={"223"}
            heightTablet={"318"}
            widthDesktop={"350"}
            heightDesktop={"318"}
          />
        </Div>
        <Title>{props.title}</Title>
       <Btn href='#' onClick={()=>{FindItem()}}>SEE PRODUCT</Btn>
      </MainDiv>
    </div>
  );
};

const MainDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
`;
const Div = styled.div``;

const Title = styled.h1`
  font-family: Manrope;
  font-size: 24px;
  font-weight: 700;
  line-height: 33px;
  letter-spacing: 1.7142857313156128px;
  text-align: center;
  margin-top: 32px;
`;
const Btn = styled.a`
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
  margin-top: 32px;
  display:flex;
  justify-content:center;
  align-items:center;
  :hover{
    background-color: ${(props) => props.theme.colors.LightOrange};
  }
`;


export default SimilarProduct;
