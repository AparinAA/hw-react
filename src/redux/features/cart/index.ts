import { createSlice } from "@reduxjs/toolkit";
import { StateProps } from "../types";

interface Action {
    payload: string
}

const initialState = {};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        increment: (state: StateProps, action: Action) => {
            const {payload} = action;
            const count = state[payload] || 0;

            if ( count === 30 ) {
                return;
            }

            state[payload] = count + 1;
        },
        decrement: (state: StateProps, action: Action) => {
            const {payload} = action;
            const count = state[payload] || 0;

            if ( !count ) {
                return;
            }

            if ( count === 1 ) {
                delete state[payload];
                return;
            }

            state[payload] = count - 1;
        },
        reset: (state: StateProps, action: Action) => {
            const { payload } = action;
            delete state[payload];
        },
    }
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;