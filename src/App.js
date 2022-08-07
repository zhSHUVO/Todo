import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddTodo from "./pages/AddTodo";
import EditTodo from "./pages/EditTodo";
import Home from "./pages/Home";
import Nav from "./pages/Nav";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <div className="App">
            <Nav></Nav>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/add-todo" element={<AddTodo></AddTodo>}></Route>
                <Route
                    path="/edit-todo"
                    element={<EditTodo></EditTodo>}
                ></Route>
                <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
        </div>
    );
}

export default App;
