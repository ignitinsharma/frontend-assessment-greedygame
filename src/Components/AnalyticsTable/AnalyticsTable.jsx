import React, { useEffect, useState } from "react";
import { formatDate } from "./formatDate";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, fetchNames } from "../../Redux/action";
import DateRangePicker from "../DateRangePicker/DateRangePicker";

const AnalyticsTable = ({ data, visibleColumns }) => {
  const [visibleColumnsState, setVisibleColumnsState] =
    useState(visibleColumns);
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const dataNames = useSelector((store) => store.data.name.data);

  const handleToggleColumn = (columnName) => {
    if (visibleColumnsState.includes(columnName)) {
      setVisibleColumnsState(
        visibleColumnsState.filter((col) => col !== columnName)
      );
    } else {
      setVisibleColumnsState([...visibleColumnsState, columnName]);
    }
  };

  const handleApplyChanges = () => {
    setToggle(false);
  };

  const handleDateRangeChange = (startDate, endDate) => {
    dispatch(fetchData(startDate, endDate));
  };

  useEffect(() => {
    dispatch(fetchNames());
  }, []);

  useEffect(() => {
    handleDateRangeChange("2021-06-01", "2021-06-30");
  }, []);

  const handlsetToggle = () => {
    setToggle(!toggle);
  };

  // Get Name from api matching the ID
  const getAppNameById = (appId) => {
    const matchedName = dataNames?.find((item) => item.app_id == appId);
    return matchedName ? matchedName.app_name : "";
  };

  return (
    <div>
      <div className="w-[95%] m-auto">
        <div className="flex justify-between">
          <h1 className="font-bold">Analytics</h1>
          <div className="font-bold cursor-pointer" onClick={handlsetToggle}>
            Settings
          </div>
        </div>
        <div
          className={`m-auto ${toggle ? "toggle-transition" : "toggle-hidden"}`}
        >
          {toggle ? (
            <>
              <p className="font-semibold mt-4 mb-[-6px] text-[13px]">
                Dimensions and Metrics
              </p>
              <div className="flex gap-6 py-4 text-transform: capitalize mb-[1rem]">
                {visibleColumns?.map((column) => (
                  <div
                    key={column}
                    className={`font-semibold p-1 border border-r-0 border-t-0 border-b-0 ${
                      visibleColumnsState.includes(column)
                        ? "border-l-[5px] border-blue-500 "
                        : "border-l-[5px] border-white"
                    } cursor-pointer`}
                    onClick={() => handleToggleColumn(column)}
                  >
                    {column}
                  </div>
                ))}
              </div>
              <div className="flex justify-end mb-[1rem]">
                <button
                  className="px-4 py-2 bg-white-500 text-blue-500 rounded border-2 border-grey-500 mr-2"
                  onClick={() => {
                    setVisibleColumnsState(visibleColumns);
                    setToggle(false);
                  }}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                  onClick={() => {
                    setToggle(false);
                    handleApplyChanges();
                  }}
                >
                  Apply Changes
                </button>
              </div>
            </>
          ) : null}
        </div>
      </div>

      <DateRangePicker onDateRangeChange={handleDateRangeChange} />
      <table className="w-full border-collapse border">
        <thead>
          <tr>
            {visibleColumns?.map((column) =>
              visibleColumnsState.includes(column) ? (
                <th
                  key={column}
                  className="border p-2 text-transform: capitalize"
                >
                  {column}
                </th>
              ) : null
            )}
          </tr>
        </thead>
        <tbody>
          {data.data.data?.map((row, index) => (
            <tr key={index} className="border text-center">
              {visibleColumns.map((column) =>
                visibleColumnsState.includes(column) ? (
                  <td key={column} className="border p-2">
                    {column === "date"
                      ? formatDate(row[column])
                      : column === "revenue"
                      ? `$ ${Math.floor(row[column])}`
                      : column === "App Name"
                      ? getAppNameById(row.app_id)
                      : row[column]}
                  </td>
                ) : null
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AnalyticsTable;
