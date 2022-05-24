import React, { useState } from "react";
import styled from "styled-components";

function AddHotel({ updateHotelList, orderByIncrease }) {
  const [item, setItem] = useState([]);
  const [buttonText, setButtonText] = useState("Ekle");
  const handleSubmit = () => {
    if (item == "") {
      return;
    }
    setButtonText("Eklendi");
    setItem("");
    setTimeout(() => {
      setButtonText("Ekle");
    }, 2000);
    updateHotelList(item);
  };

  const handleInput = (e) => {
    let inputVal = e.target.value;
    setItem(inputVal);
  };

  return (
    <AddHotelContainer>
      <AddHotelHeader>
        <AddButton onClick={handleSubmit}>{buttonText}</AddButton>
        <Title>Hotel Ekle</Title>
      </AddHotelHeader>
      <Textarea
        value={item}
        onChange={handleInput}
        placeholder="Hotel adı giriniz..."
      ></Textarea>
      <OrderByIncrease onClick={orderByIncrease}>Sırala</OrderByIncrease>
    </AddHotelContainer>
  );
}

const AddHotelContainer = styled.div`
  max-width: 380px;
  width: calc(100% - 30px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  margin-top: 16px;
`;

const AddHotelHeader = styled.div`
  display: flex;
`;

const AddButton = styled.button`
  color: blue;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #056bfd;
`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  margin-left: 8px;
`;
const Textarea = styled.textarea`
  resize: none;
  outline: none;
  margin-top: 8px;
`;

const OrderByIncrease = styled.button`
  color: blue;
  width: 50%;
  margin-top: 16px;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #056bfd;
`;

export default AddHotel;
