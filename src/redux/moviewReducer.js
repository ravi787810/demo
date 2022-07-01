const INITIAL_STATE = {
  movies: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_LIST":
      return {
        ...state,
        movies: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
