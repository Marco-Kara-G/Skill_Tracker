import "./App.css";
import { WelcomePage } from "./components/welcome-page";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
