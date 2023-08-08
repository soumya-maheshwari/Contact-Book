import "./App.css";
import Login from "./Components/Authentication/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Components/Authentication/Signup";
import ContactPage from "./Components/HomePage/ContactPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/contactPage" exact element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
