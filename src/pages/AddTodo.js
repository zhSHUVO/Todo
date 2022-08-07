import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../features/TodoSlice";

const AddTodo = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useDispatch("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const todo = { id: uuidv4(), title, description };
        dispatch(addTodo(todo));
        navigate("/home", { replace: true });
    };

    return (
        <div className="hero min-h-screen ">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                <form onSubmit={handleSubmit}>
                    <div className="card-body">
                        <div className="form-control">
                            <input
                                type="text"
                                placeholder="Todo Title"
                                className="input input-bordered"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-control">
                            <textarea
                                type="text-area"
                                placeholder="Description"
                                className="h-24 input input-bordered"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">
                                Add
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTodo;
