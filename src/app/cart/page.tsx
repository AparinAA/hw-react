import { fetchMovies } from "@/services/api";
import React from "react";
import PageContainer from "./PageContainer";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "CART",
    description: "CART OF BILETOPOISK",
};

async function PageCart() {
    const movies = await fetchMovies("");
    return <PageContainer movieOptions={movies} />;
}

export default PageCart;
