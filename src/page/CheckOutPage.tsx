import styled from "styled-components";
import { useForm } from "react-hook-form";
import { ProductContext } from "../components/ProductContext";
import { useContext, useState } from "react";
import ThankYou from "../components/ThankYou";
import InputCountry from "../components/InputCountry";

function CheckOutPage() {
  const {
    array,
    totalPrice,
    setArrayOfUsers,
    setTitle,
    setArray,
    setCartNumber,
  } = useContext(ProductContext);
  const [visible, setVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputType>();

  type InputType = {
    firstname: string;
    email: string;
    phonenumber: number;
    address: string;
    zipcode: number;
    city: string;
    country: string;
    bankname: string;
  };
  console.log("errors :", errors);

  function SubmitHandler(values: any) {
    setArrayOfUsers((prev: any) => [
      ...prev,
      { ...values, boughtItems: array },
    ]);
    setVisible(true);
    setTitle("");
    setArray([]);
    setCartNumber(0);
  }

  return (
    <FlexDiv onSubmit={handleSubmit(SubmitHandler)}>
      {visible && <ThankYou />}
      <Card>
        <CheckOuttext>CHECKOUT</CheckOuttext>
        <BillingText>Billing details</BillingText>
        <InputDiv>
          <LabelDiv>
            <Label>Name</Label>
            <Input
              placeholder="First Name"
              {...register("firstname", {
                required: "First Name cannot be empty",
              })}
              Error={errors.firstname}
            />

            {errors.firstname && (
              <ErrorName>{errors.firstname?.message}</ErrorName>
            )}
          </LabelDiv>
          <LabelDiv>
            <Label>Email Address</Label>
            <Input
              placeholder="Email Address"
              {...register("email", {
                required: "Email cannot be empty",
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  message: "Looks like this is not an email",
                },
              })}
              Error={errors.email}
            />

            {errors.email && <ErrorEmail>{errors.email?.message}</ErrorEmail>}
          </LabelDiv>
          <LabelDiv>
            <Label>Phone Number</Label>
            <Input
              placeholder="+1 202-555-0136"
              {...register("phonenumber", {
                required: "PhoneNumber cannot be empty",
              })}
              Error={errors.phonenumber}
            />

            {errors.phonenumber && (
              <ErrorPhoneNumber>{errors.phonenumber?.message}</ErrorPhoneNumber>
            )}
          </LabelDiv>
          <BillingText>SHIPPING INFO</BillingText>
          <LabelDiv>
            <Label>Your Address</Label>
            <Input
              placeholder="1137 Williams Avenue"
              {...register("address", {
                required: "Your Address cannot be empty",
              })}
              Error={errors.address}
            />

            {errors.address && (
              <ErrorAddress>{errors.address?.message}</ErrorAddress>
            )}
          </LabelDiv>
          <LabelDiv>
            <Label>ZIP Code</Label>
            <Input
              placeholder="10001"
              {...register("zipcode", {
                required: "Zip Code cannot be empty",
              })}
              Error={errors.zipcode}
            />

            {errors.zipcode && (
              <ErrorZipCode>{errors.zipcode.message}</ErrorZipCode>
            )}
          </LabelDiv>
          <LabelDiv>
            <Label>City</Label>
            <Input
              placeholder="New York"
              {...register("city", {
                required: "City cannot be empty",
              })}
              Error={errors.city}
            />

            {errors.city && <ErrorCity>{errors.city.message}</ErrorCity>}
          </LabelDiv>
          <LabelDiv>
            <Label>Country</Label>
            <InputCountry />
            {/* <Input
              placeholder="United States"
              {...register("country", {
                required: "Country cannot be empty",
              })}
              Error={errors.country}
              
              
            />

            {errors.country && (
              <ErrorCountry>{errors.country.message}</ErrorCountry>
            )} */}
          </LabelDiv>
          <BillingText>PAYMENT DETAILS</BillingText>
          <LabelDiv>
            <Label>Bank Name</Label>
            <Input
              placeholder="Tbc Bank"
              {...register("bankname", {
                required: "Bank Name cannot be empty",
              })}
              Error={errors.bankname}
            />

            {errors.bankname && (
              <ErrorBank>{errors.bankname.message}</ErrorBank>
            )}
          </LabelDiv>
        </InputDiv>
      </Card>
      {!visible && (
        <WhiteCard>
          <Cart>SUMMARY</Cart>

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
                    <Price>${(el.number * el.price).toLocaleString()}</Price>
                  </Wrap>
                  <CountBtn>
                    <Num>X{el.number}</Num>{" "}
                  </CountBtn>
                </CountWrap>
              </WraperMain>
            </>
          ))}

          <TotalWrap>
            <Total>TOTAL</Total>
            <TotalPrice>${totalPrice.toLocaleString()}</TotalPrice>
          </TotalWrap>

          <CheckOutBtn>CONTINUE & PAY</CheckOutBtn>
        </WhiteCard>
      )}
    </FlexDiv>
  );
}

export default CheckOutPage;

const Label = styled.h2`
  font-family: Manrope;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: -0.2142857164144516px;
  text-align: left;
`;

const LabelDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;
const BillingText = styled.h1`
  font-family: Manrope;
  font-size: 13px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0.9285714030265808px;
  text-align: left;
  color: ${(props) => props.theme.colors.Orange};
  margin-top: 32px;
`;

const CheckOuttext = styled.h1`
  font-family: Manrope;
  font-size: 28px;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: 1px;
  text-align: left;
`;
const FlexDiv = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.LightGray};
  flex-direction: column;
  padding-bottom: 30px;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
    padding-bottom: 70px;
  }
`;

const ErrorName = styled.h1`
  @media (min-width: 1440px) {
    color: rgba(205, 44, 44, 1);
    font-size: 11px;
    font-weight: 700;
    line-height: 16.5px;
    font-family: "Poppins";
    font-style: "Medium Italic";
    position: absolute;
    top: 18.7%;
    right: 5%;
  }
  @media (max-width: 1440px) {
    display: none;
  }
`;

const ErrorEmail = styled(ErrorName)`
  top: 27.8%;
`;
const ErrorPhoneNumber = styled(ErrorName)`
  top: 37.1%;
`;

const ErrorAddress = styled(ErrorName)`
  top: 53.5%;
`;
const ErrorZipCode = styled(ErrorName)`
  top: 62.7%;
`;
const ErrorCity = styled(ErrorName)`
  top: 72%;
`;

const ErrorBank = styled(ErrorName)`
  top: 97.4%;
`;

const Card = styled.div`
  background-color: rgba(255, 255, 255, 1);
  width: 327px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  padding-left: 24px;
  box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.1469);
  margin-top: 65px;
  padding-bottom: 31px;
  position: relative;
  @media (min-width: 1440px) {
    width: 700px;
  }
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
  @media (min-width: 1440px) {
    gap: 25px;
  }
`;

const Input = styled.input<{ Error: any }>`
  background-color: white;
  width: 279px;
  height: 56px;
  border-radius: 5px;
  border: ${(props) =>
    props.Error ? "1px solid rgba(205, 44, 44, 1)" : "1px solid #DEDEDE"};
  outline: none;
  padding-left: 19.41px;
  color: gray;
  font-size: 14px;
  font-weight: 600;
  font-family: "Poppins";
  position: relative;
  @media (min-width: 1440px) {
    width: 95%;
    padding-left: 32px;
  }
  ::placeholder {
    color: gray;
    font-size: 14px;
    font-weight: 600;
    opacity: 0.75;
    font-family: "Poppins";
  }
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
const WhiteCard = styled.div`
  margin-bottom: 97px;
  margin-top: 32px;
  height: auto;
  width: 327px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.White};
  padding: 32px 31px 31px 33px;
  outline: none;
  z-index: 20;
  @media (min-width: 768px) {
    margin-top: -572px;
  }
  @media (min-width: 1440px) {
    margin-top: -652px;
  }
`;

const Cart = styled.h3`
  font-family: Manrope;
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 1.2857142686843872px;
  text-align: left;
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
  color: ${(props) => props.theme.colors.Orange};
  font-family: Manrope;
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: center;
`;
