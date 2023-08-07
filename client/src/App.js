import "./App.css";
import Login from "./Components/Authentication/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Components/Authentication/Signup";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/signup" exact element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
