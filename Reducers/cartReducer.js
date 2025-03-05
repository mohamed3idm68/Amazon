export default function cartReducer(state = [], action) {
  switch (action.type) {
    case "cart/add":
      return [...state, action.payload];
    case "cart/remove":
      return [...state, action.payload];

    default:
      return state;
  }
}
