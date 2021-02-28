const productsReducer = (state = [], action) => {
    switch (action.type) {
      case "ADDPRODUCT":
        console.log(action.text);
        return [...state,action.text];
      default:
        return state;
    }
  };

export default productsReducer;  