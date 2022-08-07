import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateTodo } from "../features/TodoSlice";

const EditTodo = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log(location);
    const [id] = useState(location.state.id);
    const [title, setTitle] = useState(location.state.title);
    const [description, setDescription] = useState(location.state.description);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateTodo({ id, title, description }));
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
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditTodo;
