import React, { useState, useRef } from "react";
import hotelData from "../data/data";
import Card from "./Card";
import styled from "styled-components";
import AddHotel from "./AddHotel";
import ConfirmDialog from "./ConfirmDialog";

function HotelList() {
  const [hotels, setHotels] = useState(hotelData);
  const [dialog, setDialog] = useState({
    message: "",
    isLoading: false,
    nameHotel: "",
  });
  const idHotelRef = useRef();

  const handleDialog = (message, isLoading, nameHotel) => {
    setDialog({
      message,
      isLoading,
      nameHotel,
    });
  };

  const deleteHotel = (id) => {
    const index = hotels.findIndex((hotel) => hotel.id === id);

    handleDialog(
      `${hotels[index].name}' i silmek istediğinizden emin misiniz? `,
      true
    );
    idHotelRef.current = id;
  };

  const areUSureDelete = (choose) => {
    if (choose) {
      setHotels(hotels.filter((hotel) => hotel.id !== idHotelRef.current));
      handleDialog("", false);
    } else {
      handleDialog("", false);
    }
  };
  const handleAddNewHotel = (newHotel) => {
    let addedHotel = [
      {
        id: hotels.length + 1,
        name: newHotel,
        hotelScore: 0,
      },
    ];
    let updatedList = addedHotel.concat(hotels);
    localStorage.setItem("items", JSON.stringify(updatedList));
    setHotels(updatedList);
  };

  const handleThumbsUp = (idx) => {
    let updatedHotelList = [...hotels];
    let obj = updatedHotelList[idx];
    let currentScore = obj["hotelScore"];
    obj["hotelScore"] = currentScore + 1;
    updatedHotelList[idx] = obj;
    setHotels(updatedHotelList);
  };

  const handleThumbsDown = (idx) => {
    let updatedHotelList = [...hotels];
    let obj = updatedHotelList[idx];
    let currentScore = obj["hotelScore"];
    if (currentScore !== 0) {
      obj["hotelScore"] = currentScore - 1;
    }
    updatedHotelList[idx] = obj;
    setHotels(updatedHotelList);
  };

  const orderByIncrease = () => {
    let copiedHotels = [...hotels];
    copiedHotels.sort((a, b) => a["hotelScore"] - b["hotelScore"]);
    setHotels(copiedHotels);
  };

  const orderByDecrease = () => {
    let copiedHotels = [...hotels];
    copiedHotels.sort((a, b) => b["hotelScore"] - a["hotelScore"]);
    setHotels(copiedHotels);
  };

  return (
    <List>
      <AddHotel
        updateHotelList={handleAddNewHotel}
        orderByIncrease={orderByIncrease}
        orderByDecrease={orderByDecrease}
      />
      {hotels.length > 0 &&
        hotels.map((hotel, index) => {
          return (
            <>
              <Card
                key={hotel.id}
                name={hotel.name}
                index={index}
                hotelScore={hotel.hotelScore}
                handleThumbsUp={handleThumbsUp}
                handleThumbsDown={handleThumbsDown}
              />
              <DeleteButton onClick={() => deleteHotel(hotel.id)}>
                Delete
              </DeleteButton>
            </>
          );
        })}
      {dialog.isLoading && (
        <ConfirmDialog
          nameHotel={dialog.nameHotel}
          onDialog={areUSureDelete}
          message={dialog.message}
        />
      )}
    </List>
  );
}

const List = styled.div`
  margin: 0 auto;
  width: 700px;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const DeleteButton = styled.button`
  max-width: 380px;
  margin: 0 auto;
  background-color: red;
  border: none;
  padding: 8px;
  cursor: pointer;
  color: white;
  border-radius: 8px;
`;

export default HotelList;
