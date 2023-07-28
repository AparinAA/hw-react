function debounce(fn: Function, t: number) {
    let timer: NodeJS.Timeout;
    return function (...args: any[]) {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), t);
    };
}

export default debounce;
