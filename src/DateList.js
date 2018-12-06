import React from "react";

const DateList = props => {
  const dateAsListItems = props.listOfDates.map(dateString => {
    return <li>{dateString}</li>;
  });
  return (
    <div>
      <ul className="date-list">{dateAsListItems}</ul>
    </div>
  );
};

export default DateList;
