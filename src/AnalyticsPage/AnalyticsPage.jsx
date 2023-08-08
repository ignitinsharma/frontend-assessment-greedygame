import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Redux/action";
import DateRangePicker from "../Components/DateRangePicker/DateRangePicker";
import AnalyticsTable from "../Components/AnalyticsTable/AnalyticsTable";

const AnalyticsPage = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state);
  const { visibleColumns } = useSelector((state) => state.data);

  const handleDateRangeChange = (startDate, endDate) => {
    dispatch(fetchData(startDate, endDate));
  };

  useEffect(() => {
    handleDateRangeChange("2021-06-01", "2021-06-30");
  }, []);

  return (
    <div className="p-4">
      <DateRangePicker onDateRangeChange={handleDateRangeChange} />
      <AnalyticsTable data={data} visibleColumns={visibleColumns} />
    </div>
  );
};

export default AnalyticsPage;
