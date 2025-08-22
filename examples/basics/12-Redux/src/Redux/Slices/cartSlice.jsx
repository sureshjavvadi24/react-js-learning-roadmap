import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // In Vanilla (older) Redux not to mutate the state

    // addItem: (state, action) => {
    //   const newState = state;
    //   newState.items.push(action.payload);
    //   return newState;
    // },

    // have to mutate our state
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    // initialState: { items: [] }
    clearCart: (state) => {
      console.log(current(state));
      console.log("normal", state); // gives proxy object
      state = []; // it wont work, your are just changing the reference of local variable

      // state.items.length = 0; // mutating the initial state or

      return { items: [] }; //  return new object as lek initial structure
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
