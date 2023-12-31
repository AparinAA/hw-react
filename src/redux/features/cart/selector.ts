import { StateProps } from "../types";

const selectCartModule = (state: StateProps) => state.cart;
export const selectProductAmount = (state: StateProps, id: string) =>
    selectCartModule(state)[id] || 0;

export const selectTicketBooking = (state: StateProps) =>
    selectCartModule(state);

export const selectIdsBookingFilms = (state: StateProps) => {
    const cart = selectCartModule(state);

    return Object.keys(cart).join(";");
};
