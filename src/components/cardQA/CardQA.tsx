"use client";

import React, { useState } from "react";

import styles from "./index.module.css";

interface Props {
    question: string;
    answer: string;
}

function CardQA({ question, answer }: Props) {
    const [isOpen, setOpen] = useState(false);

    const changeState = (event: any) => {
        setOpen(event.target.checked);
    };

    return (
        <div className={styles.cardCollapse}>
            <div className={styles.outerField}>
                <div>{question}</div>
                <button
                    type="button"
                    className={
                        !isOpen ? styles.checkboxClose : styles.checkboxOpen
                    }
                    onClick={() => setOpen(!isOpen)}
                ></button>
            </div>
            {isOpen && (
                <div className={styles.visibleCardCollapse}>{answer}</div>
            )}
        </div>
    );
}

export { CardQA };
