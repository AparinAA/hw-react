import React from "react";

import styles from "./index.module.css";
import type { movieOption } from "@/types/types";
import { FooterTotal, MainCartList } from "@/components";

function PageContainer({ movieOptions }: { movieOptions: movieOption[] }) {
    return (
        <>
            <div className={styles.cart}>
                <MainCartList movieOptions={movieOptions} />
                <FooterTotal />
            </div>
        </>
    );
}

export default PageContainer;
