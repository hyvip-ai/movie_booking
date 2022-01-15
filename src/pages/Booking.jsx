import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Row from "../components/Row";
import { useNavigate } from "react-router-dom";
function Booking({ setTotalCost, totalCost }) {
  const navigate = useNavigate();
  const { rows } = useParams();
  const [error, setError] = useState("");
  const [seats, setSeats] = useState([]);
  const [seatSelected, setSeatSelected] = useState([]);
  const [totalBooked, setTotalBooked] = useState(0);
  const [dsiableAll, setDisablell] = useState(false);
  //fetching data from the api
  //   React.useEffect(() => {
  //     fetch(`https://codebuddy.review/seats?count=${rows}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //       });
  //   }, [rows]);

  //checking number of seats

  React.useEffect(() => {
    let num_row = Number(rows);
    if (num_row < 3 || num_row > 10) {
      setError(
        "The maximum number of rows will be 10 and mimimum number of rows will be 3."
      );
    }

    let num_seats = [
      ...[...Array(num_row).keys()].map((item) => item + 1),
    ].reverse();
    setSeats(num_seats);
  }, [rows]);
  React.useEffect(() => {
    if (totalBooked > 4) {
      alert("Can't Book More than 5 seats");
      setDisablell(true)
    }
  }, [totalBooked]);

  return (
    <React.Fragment>
      <div>
        {error ? (
          <p>{error}</p>
        ) : (
          <>
            {seats.map((item, index) => {
              return (
                <Row
                totalBooked={totalBooked}
                  setTotalBooked={setTotalBooked}
                  seatSelected={seatSelected}
                  num_of_seats={item}
                  row_num={item}
                  setTotalCost={setTotalCost}
                  setSeatSelected={setSeatSelected}
                  key={uuid()}
                  disable={dsiableAll}
                />
              );
            })}
          </>
        )}
      </div>
      <button
        onClick={() => {
          navigate("/payment");
        }}
        disabled={totalCost === 0}
        className="main"
      >
        Go To Payment Page
      </button>
    </React.Fragment>
  );
}

export default Booking;
