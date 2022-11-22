export interface Todo {
    description: string;
    date: string;
    priority: string;
}
export interface Todotableprops {
    todos: Todo[];
    deletetodo: (index: number) => void;
}