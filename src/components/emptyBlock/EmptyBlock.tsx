import React, { ReactElement } from "react";

import styles from "./index.module.css";

interface PropBlock {
    children: ReactElement;
}

const EmptyBlock = ({ children }: PropBlock) => {
    return <div className={styles.block}>{children}</div>;
};

export default EmptyBlock;
