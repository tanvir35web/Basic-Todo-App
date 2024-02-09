import "./App.css";
import BasicTodo from "./components/BasicTodo";
import WelcomePage from "./components/WelcomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<WelcomePage />} />
                    <Route path="/todo" element={<BasicTodo />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
