import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./features/cart";
import { logger } from "./middleware/logger";
import { movieApi } from "./services/moviApi";
import { cinemaApi } from "./services/cinemaApi";
import { filterReducer } from "./features/filter";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        filter: filterReducer,
        [movieApi.reducerPath]: movieApi.reducer,
        [cinemaApi.reducerPath]: cinemaApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([movieApi.middleware, cinemaApi.middleware]),
    devTools: process.env.NODE_ENV !== 'production'
});
