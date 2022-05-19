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
            <button
              onClick={() => deleteHotel(hotel.id)}
              style={{
                maxWidth: "380px",
                margin: "0 auto",
                background: "red",
                border: "none",
                padding: "8px",
                cursor: "pointer",
                color: "white",
                borderRadius: "8px",
              }}
            >
              Delete
            </button>
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

export default HotelList;
