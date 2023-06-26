import { createSlice } from "@reduxjs/toolkit";
import type {StateProps} from "../types";

type Payload = {
    select: {
        name: string;
        id: string;
    };
    type?: string;
}
type Action = {
    payload: Payload;
    type: string;
};

const initialState = {};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        addFilter: (state: StateProps, action: Action) => {
            const {payload} = action;

            if ( !payload?.type ) {
                return;
            }

            state[payload.type] = payload?.select?.id;
        }
    }
});

export const filterReducer = filterSlice.reducer;
export const filterActions = filterSlice.actions;