import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { formatDate } from "./formatDate";

const DateRangePicker = ({ onDateRangeChange }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const formattedStartDate = formatDate(startDate);
  const formattedEndDate = formatDate(endDate);

  const handleDateRangeChange = () => {
    if (formattedStartDate && formattedEndDate) {
      onDateRangeChange(formattedStartDate, formattedEndDate);
    }
  };
  return (
    <div className="flex items-center space-x-4">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        placeholderText="Start Date"
      />
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        placeholderText="End Date"
      />
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleDateRangeChange}
      >
        Fetch Data
      </button>
    </div>
  );
};

export default DateRangePicker;
