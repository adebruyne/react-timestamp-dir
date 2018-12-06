import React from "react";

const DateList = props => {
  return (
    <div>
      <ul className="date-list">{props.dates}</ul>
    </div>
  );
};

export default DateList;
