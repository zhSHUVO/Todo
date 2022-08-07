import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTodo } from "../features/TodoSlice";

const Home = () => {
    const todos = useSelector((state) => state.todosReducer.todos);
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    };

    return (
        <div>
            <h1>Todos</h1>
            <div className="flex flex-wrap justify-evenly">
                {todos &&
                    todos.map((todo) => {
                        const { id, title, description } = todo;
                        console.log(todo);
                        return (
                            <div
                                key={id}
                                className="card w-96 bg-neutral text-neutral-content m-5"
                            >
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{title}</h2>
                                    <p>{description}</p>
                                    <div className="card-actions justify-end">
                                        <Link
                                            to="/edit-todo"
                                            state={{id, title, description }}
                                        >
                                            <button className="btn btn-sm btn-primary">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 1024 1024"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path>
                                                </svg>
                                            </button>
                                        </Link>
                                        <button
                                            onClick={() => {
                                                handleDelete(id);
                                            }}
                                            className="btn btn-sm btn-error"
                                        >
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth="0"
                                                version="1.2"
                                                baseProfile="tiny"
                                                viewBox="0 0 24 24"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M12 3c-4.963 0-9 4.038-9 9s4.037 9 9 9 9-4.038 9-9-4.037-9-9-9zm0 16c-3.859 0-7-3.14-7-7s3.141-7 7-7 7 3.14 7 7-3.141 7-7 7zM12.707 12l2.646-2.646c.194-.194.194-.512 0-.707-.195-.194-.513-.194-.707 0l-2.646 2.646-2.646-2.647c-.195-.194-.513-.194-.707 0-.195.195-.195.513 0 .707l2.646 2.647-2.646 2.646c-.195.195-.195.513 0 .707.097.098.225.147.353.147s.256-.049.354-.146l2.646-2.647 2.646 2.646c.098.098.226.147.354.147s.256-.049.354-.146c.194-.194.194-.512 0-.707l-2.647-2.647z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default Home;
