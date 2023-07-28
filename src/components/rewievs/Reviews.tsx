import React from "react";

import styles from "./index.module.css";
import { Review } from "./Review";

type Params = any[];

function Reviews({ reviews }: { reviews: Params }) {
    return (
        <div className={styles.reviews}>
            {reviews?.map((review) => (
                <Review review={review} key={review.id} />
            ))}
        </div>
    );
}
export { Reviews };
