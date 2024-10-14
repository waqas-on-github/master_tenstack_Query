import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type pokeStateType = {
  characterStatus: "alive" | "dead" | "unknown";
};

const initialState: pokeStateType = {
  characterStatus: "alive",
};

export const pokeSlice = createSlice({
  name: "pokeSlice",
  initialState,
  reducers: {
    // Fix: PayloadAction type should match the type of characterStatus
    setCharacterStatus: (state, action: PayloadAction<pokeStateType>) => {
      state.characterStatus = action.payload.characterStatus;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCharacterStatus } = pokeSlice.actions;

export default pokeSlice.reducer;
