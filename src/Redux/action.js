import axios from "axios";

export const fetchData = (startDate, endDate) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://go-dev.greedygame.com/v3/dummy/report?startDate=${startDate}&endDate=${endDate}`
    );
    const data = response.data;

    dispatch({ type: "FETCH_DATA_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_DATA_ERROR", payload: error });
  }
};
export const fetchNames = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://go-dev.greedygame.com/v3/dummy/apps`
    );
    const data = response.data;

    dispatch({ type: "FETCH_NAMES_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_NAMES_ERROR", payload: error });
  }
};

export const toggleColumn = (columnName) => ({
  type: "TOGGLE_COLUMN",
  payload: columnName,
});
