import React, { useState } from "react";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";

const TheCalendar = () => {
  const [selected, setSelected] = useState(new Date());
  return (
    <div className="bg-white rounded shadow-lg">
      <DayPicker mode="single" />
    </div>
  );
};

export default TheCalendar;
