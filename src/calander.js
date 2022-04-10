import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
function Calander() {
  const [value, onChange] = useState(new Date());
  return (
    <div className="calanderMainDiv">
      <div>
        <Calendar onChange={onChange} value={value} />
      </div>
    </div>
  );
}

export default Calander;
