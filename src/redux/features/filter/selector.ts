import { StateProps } from "../types";

export const selectFilterModule = (state: StateProps) => state.filter;

// export const selectProductAmount = (state: StateProps, id: string) => selectCartModule(state)[id] || 0;

// export const selectTicketBooking = (state: StateProps) => selectCartModule(state);