"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Dropdown, { Item, Selected } from "./Dropdown";

import styles from "./index.module.css";
import { useCallback } from "react";

type Option = {
    id: string;
    name: string;
};

interface PropsFilterDefault {
    defaultTitle: string;
    options: Option[];
    type: string;
    name: string;
}

const FilterDefault = ({
    defaultTitle,
    options,
    type,
    name,
}: PropsFilterDefault) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(
                searchParams as unknown as string
            );

            if (!value || value === "Не выбран" || value === "default") {
                params.delete(name);
            } else {
                params.set(name, value);
            }

            router.push(pathname + "?" + params.toString());
        },
        [searchParams]
    );

    const listItems = [
        <Item key="key-none" title="Не выбран" id="Не выбран" />,
        ...options.map((item) => (
            <Item key={item.id} title={item.name} id={item.id} />
        )),
    ];

    const checkDefault = options.find((op) => op.id === searchParams.get(type));

    console.info("CHECK", checkDefault);
    return (
        <label className={styles.labelDropdown}>
            <span className={styles.nameDropdown}>{name}</span>
            <Dropdown
                type={type}
                onChange={createQueryString}
                defaultValue={
                    checkDefault || { id: "default", name: defaultTitle }
                }
            >
                <Selected>{listItems}</Selected>
            </Dropdown>
        </label>
    );
};

export default FilterDefault;
