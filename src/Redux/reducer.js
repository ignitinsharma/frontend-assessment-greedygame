const initialState = {
  data: [],
  name: [],
  visibleColumns: [
    "Date",
    "App Name",
    "Clicks",
    "AD Request",
    "Revenue",
    "Impression",
  ],
  // ... other initial state properties
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
    case "TOGGLE_COLUMN":
      return {
        ...state,
        visibleColumns: state.visibleColumns.includes(action.payload)
          ? state.visibleColumns.filter((col) => col !== action.payload)
          : [...state.visibleColumns, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
