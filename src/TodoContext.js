import { createContext, useState, useEffect } from "react";
export const TodoContext = createContext();
export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState(() => {
        return JSON.parse(localStorage.getItem("todos")) || [];
    });
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    const addTodo = (todo) => {
        setTodos([...todos, { id: Date.now(), text: todo }]);
    };
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    const clearAllTodos = () => {
        setTodos([]);
    };
    return (
        <TodoContext.Provider value={{ todos, addTodo, deleteTodo, clearAllTodos }}>
            {children}
        </TodoContext.Provider>
    );
};
