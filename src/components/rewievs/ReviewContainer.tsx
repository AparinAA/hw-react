import { fetchReviews } from "@/services/api";
import React from "react";
import { Reviews } from "./Reviews";

async function ReviewContainer({ movieId }: { movieId: string }) {
    const reviews = await fetchReviews(movieId);
    return <Reviews reviews={reviews} />;
}

export { ReviewContainer };
