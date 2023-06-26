import Dropdown from "./Dropdown";

import styles from "./index.module.css";

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
    const listItem = [
        <Dropdown.Item key="key-none" title="Не выбран" id="Не выбран" />,
        ...options.map((item) => (
            <Dropdown.Item key={item.id} title={item.name} id={item.id} />
        )),
    ];
    return (
        <label className={styles.labelDropdown}>
            <span className={styles.nameDropdown}>{name}</span>
            <Dropdown type={type}>
                <Dropdown.Selected defaultTitle={defaultTitle}>
                    {listItem}
                </Dropdown.Selected>
            </Dropdown>
        </label>
    );
};

export default FilterDefault;
