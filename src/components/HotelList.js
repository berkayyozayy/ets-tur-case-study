import React, { useState, useEffect } from "react";
import hotelData from "../data/data";

import Card from "./Card";
import styled from "styled-components";
import AddHotel from "./AddHotel";

function HotelList() {
  const [hotels, setHotels] = useState([]);

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
        console.log("---->>>>>>>>>", hotel.name);
        return (
          <Card
            key={hotel.id}
            name={hotel.name}
            hotelScore={hotel.hotelScore}
          />
        );
      })}
    </List>
  );
}

const List = styled.div`
  margin: 0 auto;
  width: 700px;
  height: 100vh;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
`;

export default HotelList;
