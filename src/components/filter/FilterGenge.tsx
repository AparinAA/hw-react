import FilterDefault from "./FilterDefault";

const FilterGenge = () => {
    const GENRE = ["Комедия", "Триллер", "Ужасы", "Фэнтези"].map((g) => ({
        id: g,
        name: g,
    }));
    return (
        <FilterDefault
            defaultTitle="Выберите жанр"
            options={GENRE}
            type="genre"
            name="Жанр"
        />
    );
};

export default FilterGenge;
