import React from "react";

const AddTodo = () => {
    return (
        <div className="hero min-h-screen">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                <div className="card-body">
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Todo Title"
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control">
                        <textarea
                            type="text-area"
                            placeholder="Description"
                            className="h-24 input input-bordered"
                        />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTodo;
