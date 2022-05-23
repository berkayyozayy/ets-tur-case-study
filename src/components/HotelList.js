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

  const [newHotel, setNewHotel] = useState(0);

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

  const addLocalStorage = (getHotels) => {
    let storage = JSON.parse(localStorage.getItem("items"));
    // console.log("storage : ", storage);

    if (storage && storage.length > 1) {
      localStorage.setItem("items", JSON.stringify(storage));
    } else {
      localStorage.setItem("items", JSON.stringify(getHotels));
    }
  };

  const initialHotels = (getHotels) => {
    let storage = JSON.parse(localStorage.getItem("items"));
    if (storage) {
      return storage;
    } else {
      return hotelData;
    }
  };

  useEffect(() => {
    setHotels(initialHotels());
    addLocalStorage(getHotels);
  }, [getHotels]);

  return (
    <List>
      <AddHotel updateHotelCount={() => setNewHotel(newHotel + 1)} />
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
