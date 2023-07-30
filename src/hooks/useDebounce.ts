import { useCallback, useEffect, useRef } from "react";

function useDebounce<T>(fn: (...args: T[]) => any, t: number) {
    let refA = useRef<T[]>();
    let timer = useRef<NodeJS.Timeout>();

    function clean() {
        if (timer.current) {
            clearTimeout(timer.current);
        }
    }

    useEffect(() => clean, []);

    return useCallback(function (...args: T[]) {
        refA.current = args;
        clean();

        timer.current = setTimeout(() => {
            if (timer.current) {
                fn(...args);
            }
        }, t);
    }, []);
}

export default useDebounce;
