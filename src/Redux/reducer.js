const initialState = {
  data: [],
  name: [],
  visibleColumns: [
    "date",
    "App Name",
    "clicks",
    "requests",
    "revenue",
    "responses",
    "impressions",
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        data: action.payload,
      };
    case "FETCH_NAMES_SUCCESS":
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
