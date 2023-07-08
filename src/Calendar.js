import React, { Component } from 'react';
import CalendarDays from './calendar-days';
import './calendar.css';
import MonthPagination from './MonthPagination';
export default class Calendar extends Component {
  constructor() {
    super();
    this.weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    this.months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    this.state = {
      currentDay: new Date(),
    };
  }

  changeCurrentDay = (day) => {
    this.setState({ currentDay: new Date(day.year, day.month, day.number) });
  };

  nextDay = () => {
    this.setState({
      currentDay: new Date(
        this.state.currentDay.setDate(this.state.currentDay.getDate() + 1)
      ),
    });
  };

  previousDay = () => {
    this.setState({
      currentDay: new Date(
        this.state.currentDay.setDate(this.state.currentDay.getDate() - 1)
      ),
    });
  };
  changeDate = (monthNumber, year) => {
    this.setState({ currentDay: new Date(year, monthNumber) });
  };

  render() {
    return (
      <div className="calendar">
        <div className="calendar-header">
          <MonthPagination
            currentMonth={this.state.currentDay.getMonth()}
            currentYear={this.state.currentDay.getFullYear()}
            changeDate={this.changeDate}
          />
          <div className="title">
            <h2>
              {/* {this.months[this.state.currentDay.getMonth()]}{' '} */}
              {this.state.currentDay.getFullYear()}
            </h2>
          </div>
          <div className="tools">
            <button onClick={this.previousDay}>
              <span className="material-icons">&#9754;</span>
            </button>
            <p>
              {this.months[this.state.currentDay.getMonth()].substring(0, 3)}{' '}
              {this.state.currentDay.getDate()}
            </p>
            <button onClick={this.nextDay}>
              <span className="material-icons">&#9755;</span>
            </button>
          </div>
        </div>
        <div className="calendar-body">
          <div className="table-header">
            {this.weekdays.map((weekday) => {
              return (
                <div className="weekday">
                  <p>{weekday}</p>
                </div>
              );
            })}
          </div>
          <CalendarDays
            day={this.state.currentDay}
            changeCurrentDay={this.changeCurrentDay}
          />
        </div>
      </div>
    );
  }
}
