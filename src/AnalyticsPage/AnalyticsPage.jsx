import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AnalyticsTable from "../Components/AnalyticsTable/AnalyticsTable";

const AnalyticsPage = () => {
  const { data } = useSelector((state) => state);
  const { visibleColumns } = useSelector((state) => state.data);

  return (
    <div className="p-4">
      <AnalyticsTable data={data} visibleColumns={visibleColumns} />
    </div>
  );
};

export default AnalyticsPage;
