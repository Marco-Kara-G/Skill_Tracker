import "./App.css";
import { UserAccesPage } from "./components/login-registration-page";
import { MainPage } from "./components/main-landing-page";
import { WelcomePage } from "./components/welcome-page";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/access" element={<UserAccesPage />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
