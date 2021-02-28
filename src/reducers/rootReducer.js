const initialState = {
  number: 0
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENTHANDLER":
      return {
        number: state.number + 1
      };
    default:
      return state;
  }
};

export default rootReducer;