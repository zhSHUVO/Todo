const { createSlice } = require("@reduxjs/toolkit");

const initialTodos = {
    todos: [
        { id: 1, title: "Demo", description: "This is a demo todo." },
        { id: 2, title: "How to", description: "Go to add todo directory." },
    ],
};

export const todoSlice = createSlice({
    name: "todos",
    initialState: initialTodos,
    reducers: {
        showTodos: (state) => state,
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        deleteTodo: (state, action) => {
            const id = action.payload;
            state.todos = state.todos.filter((todo) => todo.id !== id);
        },
    },
});

export const { showTodos, addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
