import styled from "styled-components";
import Product from "../components/Product";
import ShopItem from "../components/ShopItem";
import BeforeFooter from "../components/BeforeFooter";
import { useContext} from "react";
import { ProductContext } from "../components/ProductContext";



function ProductPage() {
  const { title, Data, icons } = useContext(ProductContext);
  

  console.log(title)
  
  return (
    <>
      <DivTitle>
        <Title>{title}</Title>
      </DivTitle>
      <ProductMapDiv>
        {Data.map((item: any) =>
          item.category.match(title.toLowerCase()) ? (
            <Product
              photoMobile={item.categoryImage.mobile}
              photoTablet={item.categoryImage.tablet}
              photoDesktop={item.categoryImage.desktop}
              new={item.new}
              name={item.name}
              description={item.description}
              Id={item.id}
            />
          ) : null
        )}
      </ProductMapDiv>
      <ShopItemMappedDiv>
        {icons.map((icon: any) => (
          <ShopItem title={icon.title} icon={icon.icon} />
        ))}
      </ShopItemMappedDiv>
      <BeforeFooter />
    </>
  );
}

export default ProductPage;

const DivTitle = styled.div`
  height: 102px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.Black};
  display: flex;
    justify-content: center;
    align-items: center;
  @media (min-width: 768px) {
    height: 246px;
    
  }

  @media (min-width: 1440px) {
    height: 239px;
  }
`;

const Title = styled.h1`
  font-family: Manrope;
  font-size: 28px;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: 2px;
  text-align: center;
  color: ${(props) => props.theme.colors.White};
  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 44px;
    letter-spacing: 1.4285714626312256px;
    text-align: center;
  }
`;
const ProductMapDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-bottom: 70px;
  margin-top: 70px;
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
