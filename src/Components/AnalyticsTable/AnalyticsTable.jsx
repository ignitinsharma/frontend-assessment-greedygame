import React, { useEffect } from "react";
import { formatDate } from "./formatDate";
import { useDispatch, useSelector } from "react-redux";
import { fetchNames } from "../../Redux/action";

const AnalyticsTable = ({ data, visibleColumns }) => {
  const dispatch = useDispatch();
  const dataNames = useSelector((store) => store.data.name.data);
  console.log('dataNames:', dataNames)
  // console.log("data: from names", dataNames.name.data);
  useEffect(() => {
    dispatch(fetchNames());
  }, []);
  return (
    <table className="w-full border-collapse border">
      <thead>
        <tr>
          {visibleColumns?.map((column) => (
            <th key={column} className="border p-2">
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.data.data?.map((row, index) => (
          <tr key={index} className="border text-center">
            <td>{formatDate(row.date)}</td>
            <td>{}name</td>
            <td>{row.clicks}</td>
            <td>{row.requests}</td>
            <td>$ {Math.floor(row.revenue)}</td>
            <td>{row.impressions}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AnalyticsTable;
