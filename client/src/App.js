import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Password from "./components/Password";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/password" element={<Password />} />
            </Routes>
        </>
    );
}

export default App;
