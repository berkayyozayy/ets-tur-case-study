import React, { useState, useEffect, useRef } from "react";
import hotelData from "../data/data";
import Card from "./Card";
import styled from "styled-components";
import AddHotel from "./AddHotel";
import ConfirmDialog from "./ConfirmDialog";

function HotelList() {
  const [hotels, setHotels] = useState([]);
  const [dialog, setDialog] = useState({
    message: "",
    isLoading: false,
    nameProduct: "",
  });
  const idHotelRef = useRef();
  const handleDialog = (message, isLoading, nameProduct) => {
    setDialog({
      message,
      isLoading,
      nameProduct,
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

  const getHotels = hotelData.map((hotel) => {
    const obj = {};

    obj["id"] = hotel.id;
    obj["name"] = hotel.name;
    obj["score"] = hotel.hotelScore;
    return obj;
  });

  const addLocalStorage = () => {
    localStorage.setItem("items", JSON.stringify(hotels));
  };

  addLocalStorage();

  useEffect(() => {
    setHotels(getHotels);
  }, []);

  return (
    <List>
      <AddHotel />
      {hotels.map((hotel) => {
        return (
          <>
            <Card
              key={hotel.id}
              name={hotel.name}
              hotelScore={hotel.hotelScore}
            />
            <DeleteButton onClick={() => deleteHotel(hotel.id)}>
              Delete
            </DeleteButton>
          </>
        );
      })}
      {dialog.isLoading && (
        <ConfirmDialog
          nameProduct={dialog.nameProduct}
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
