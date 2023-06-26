"use client";

import React, { ChangeEvent } from "react";

import styles from "./index.module.css";
import { useDispatch } from "react-redux";
import { filterActions } from "@/redux/features/filter";

import FilterGenge from "./FilterGenge";
import FilterCinema from "./FilterCinema";

function debounce(fn: Function, t: number) {
    let timer: NodeJS.Timeout;
    return function (...args: any[]) {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), t);
    };
}

const debounceTime = 200;

const Filter = () => {
    const dispatch = useDispatch();

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(
            filterActions.addFilter({
                select: {
                    name: e?.target?.value,
                    id: e?.target?.value,
                },
                type: "name",
            })
        );
    };

    return (
        <div className={styles.filter}>
            <label className={styles.inputName}>
                <span>Название</span>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Введите название"
                    onChange={debounce(onChangeInput, debounceTime)}
                />
            </label>
            <FilterGenge />
            <FilterCinema />
        </div>
    );
};

export { Filter };
