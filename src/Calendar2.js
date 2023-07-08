import React, { useState, useEffect } from 'react';
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
//const arr = new Array(30).fill().map((item, index) => index + 1);
export const Calendar2 = () => {
  const [year] = useState(2023);
  const [month] = useState(5);
  const [daysInMonth, setDaysInMonth] = useState([]);
  const [frontOffset, setFrontOffset] = useState(0);
  const [endOffset, setEndOffset] = useState(0);
  useEffect(() => {
    let date = new Date(year, month, 1);
    let currentMonth = date.getMonth();
    let daysInMonth = [];
    while (currentMonth === date.getMonth()) {
      daysInMonth.push(new Date(date)); // new
      date.setDate(date.getDate() + 1); //date.getDate() 2// date=Tue May 02 2023
    }
    setDaysInMonth(daysInMonth);
    //console.log(daysInMonth[0].getDay());
    setFrontOffset(daysInMonth[0].getDay());
    setEndOffset(6 - daysInMonth.at(-1).getDay()); // 6-x //[-1] not work in js. [length-1]
  }, [year, month]);
  const frontBoxes = () => {
    return new Array(frontOffset)
      .fill()
      .map((item, index) => <div className="date" key={index}></div>);
  };
  const endBoxes = () => {
    return new Array(endOffset)
      .fill()
      .map((item, index) => <div className="date" key={index}></div>);
  };
  return (
    <>
      <div className="calendar2">
        <div className="calender2-table">
          {days.map((item) => (
            <div className="date" key={item}>
              {item}
            </div>
          ))}
          {frontBoxes()}
          {daysInMonth.map((item) => (
            <div className="date" key={item.getTime()}>
              {item.getDate()}
            </div>
          ))}
          {endBoxes()}
        </div>
      </div>
    </>
  );
};
// { Calendar2 };
