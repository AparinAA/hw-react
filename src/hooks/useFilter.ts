import { selectFilterModule } from "@/redux/features/filter/selector";
import { useGetMoviesCinemaQuery, useGetMoviesQuery } from "@/redux/services/moviApi";
import { useSelector } from "react-redux";

function isCinemaFilter(property: string | undefined) {
    return (
        property &&
        property !== "Не выбран" &&
        property !== "Выберите кинотеатр"
    );
}

function useFilter() {
    const filters = useSelector((state) => selectFilterModule(state));

    const { data, isLoading, error } = isCinemaFilter(filters["cinema"])
        ? useGetMoviesCinemaQuery(filters["cinema"])
        : useGetMoviesQuery();

    if (isLoading) {
        return { isLoading };
    }

    if (!data || error) {
        return { error: "error" };
    }

    const filterData = data
        .filter((d) => {
            const name = filters["name"];
            if (name && name.toLowerCase() !== "Введите название") {
                return d.title.toLowerCase().startsWith(name.toLowerCase());
            }
            return true;
        })
        .filter((d) => {
            const genre = filters["genre"];

            if (genre && genre !== "Выберите жанр" && genre !== "Не выбран") {
                return d.genre === genre;
            }

            return true;
        });

    return { data: filterData };
}

export {useFilter};