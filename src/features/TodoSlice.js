import { createSlice } from "@reduxjs/toolkit";

const initialTodos = {
    todos: [
        { id: 1, title: "finish course", description: "finish redux course" },
        {
            id: 2,
            title: "build todo app",
            description: "build todo app using redux toolkit",
        },
    ],
};

export const todoSlice = createSlice({
    name: "todos",
    initialState: initialTodos,
    reducers: {
        showTodos: (state) => state,
    },
});

export const { showTodos } = todoSlice.actions;
export default showTodos.reducers;
