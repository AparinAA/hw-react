import { fetchCinemas } from "@/services/api";
import React from "react";
import { Filter } from "./Filter";

async function ContainerFilter() {
    const cinemas = await fetchCinemas();
    return <Filter cinemas={cinemas} />;
}

export default ContainerFilter;
