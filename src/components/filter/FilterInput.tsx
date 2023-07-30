"use client";

import React, { ChangeEvent, useCallback, useState } from "react";
import styles from "./index.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import useDebounce from "./debounce";

const debounceTime = 200;

function FilterInput() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(
                searchParams as unknown as string
            );

            if (!value || value === "Не выбран") {
                params.delete(name);
            } else {
                params.set(name, value);
            }

            router.push(pathname + "?" + params.toString());
        },
        [searchParams]
    );

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        createQueryString("name", e?.target?.value);
    };

    return (
        <label className={styles.inputName}>
            <span>Название</span>
            <input
                className={styles.input}
                type="text"
                placeholder="Введите название"
                onChange={useDebounce(onChangeInput, debounceTime)}
                defaultValue={searchParams.get("name") ?? ""}
            />
        </label>
    );
}

export default FilterInput;
