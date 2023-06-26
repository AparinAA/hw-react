type Store = any;
type Next = any;
type Action = any;


export const logger = (store: Store) => (next: Next) => (action: Action) => {
    console.log(action);
    next(action);
}