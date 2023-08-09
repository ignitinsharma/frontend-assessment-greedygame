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
    <div className="w-[50%] h-[fit-content] m-auto">
      <div className="w-[100%] m-auto items-center">
        <div className="flex justify-center">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="Start Date"
            className="bg-white border-[1px] border-[gray] rounded-lg px-6 py-2 placeholder-center focus:outline-none"
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            placeholderText="End Date"
            className="ml-2 bg-white border-[1px] border-[gray] rounded-lg px-6 py-2 placeholder-center focus:outline-none "
          />
        </div>
        <div className="flex justify-center my-4">
          <button
            className="px-4 py-2 items-center bg-blue-500 text-white rounded"
            onClick={handleDateRangeChange}
          >
            Fetch Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default DateRangePicker;
