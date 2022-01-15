import React, { useState, useEffect } from "react";
import isPrimary from "../functions/primary";
import { v4 as uuid } from "uuid";

function Row({
  disable,
  totalBooked,
  setTotalBooked,
  seatSelected,
  num_of_seats,
  row_num,
  setSeatSelected,
  setTotalCost,
}) {
  const [seats, setSeats] = useState([]);
  const [addClass, setAddClass] = useState([]);
  useEffect(() => {
    let num_seats = [
      ...[...Array(num_of_seats).keys()].map((item) => item + 1),
    ];
    setSeats(num_seats);
    for (let item of seatSelected) {
      if (item.row === row_num) {
        setAddClass((prev) => {
          return [...prev, item.seat];
        });
      }
    }
  }, [num_of_seats, seatSelected, row_num, totalBooked]);

  const clickHandler = (num) => {
    setSeatSelected((prev) => {
      return [...prev, { seat: num, row: row_num }];
    });
    setTotalCost((prev) => {
      return prev + row_num * 10;
    });
    setTotalBooked((prev) => {
      return prev + 1;
    });
  };

  return (
    <React.Fragment>
      <div className="row">
        ROW -{row_num}
        {seats.map((item) => {
          return (
            <button
              id={`button${item}`}
              className={addClass.includes(item) ? "selected" : ""}
              onClick={() => clickHandler(item)}
              key={uuid()}
              disabled={!disable ? isPrimary(item) : disable}
            >
              {isPrimary(item) ? "Booked" : `Not Booked ${item}`}
            </button>
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default Row;
