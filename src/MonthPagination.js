import { months, days, monthsAbr } from './data';
import React, { useState, useEffect } from 'react';
export default function MonthPagination({
  currentMonth,
  currentYear,
  changeDate,
}) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  let previousMonth =
    currentMonth - 1 < 0 ? months.length + currentMonth - 1 : currentMonth - 1;
  let nextMonth = (currentMonth + 1) % months.length;

  const paginationMonths = [previousMonth, currentMonth, nextMonth];

  const handleChangeDate = (newMonth) => {
    let year = currentYear;
    if (currentMonth === 0 && newMonth === months.length - 1)
      year = currentYear - 1;
    if (currentMonth === months.length - 1 && newMonth === 0)
      year = currentYear + 1;
    changeDate(newMonth, year);
  };
  useEffect(() => {
    setDialogOpen(false);
  }, [currentMonth]);

  return (
    <div className="month-pagination-container">
      <button
        onClick={() => handleChangeDate(previousMonth)}
        className="month-pagination-button month-pagination-button-arrow"
      >
        {'<'}
      </button>
      {paginationMonths.map((month) => (
        <button
          key={month}
          className={`month-pagination-button ${
            month === currentMonth ? 'month-pagination-button-selected' : ''
          }`}
          onClick={() => handleChangeDate(month)}
        >
          {months[month]}
        </button>
      ))}
      <button
        onClick={() => handleChangeDate(nextMonth)}
        className="month-pagination-button month-pagination-button-arrow"
      >
        {'>'}
      </button>
      <div className="month-pagination-dialog-container">
        <button
          onClick={() => setDialogOpen((prevState) => !prevState)}
          className="month-pagination-button"
        >
          Full Year {currentYear}
        </button>
        <div
          className={`month-pagination-dialog ${!dialogOpen ? 'hide' : ''}`}
          onClick={() => setDialogOpen(true)}
          onMouseLeave={() => setHovered(null)}
        >
          {monthsAbr.map((month, i) => (
            <div
              className={`calendar-date ${
                hovered === i ? 'calendar-date-hovered' : ''
              }`}
              onMouseEnter={() => setHovered(i)}
              onClick={() => {
                changeDate(i, currentYear);
              }}
            >
              {month}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
