import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../features/TodoSlice";

const store = configureStore({
    reducer: {
        todosReducer: todoSlice,
    },
});

export default store;
