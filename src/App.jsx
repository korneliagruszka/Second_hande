import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import TopMenu from "./components/common/TopMenu/topMenu";
import HomeHeader from "./components/Home/HomeHeader/homeHeader";
import Statistics from "./components/Home/Statistics/statistics";
import SimpleSteps from "./components/Home/SimpleSteps/simpleSteps";
import AboutUs from "./components/Home/AboutUs/aboutUs";
import Contact from "./components/common/Contact/contact";
import Fundations from "./components/Home/Fundations/fundations";
import Login from "./components/Home/Login/login";
import Register from "./components/Home/Register/register";
import Logout from "./components/Home/Logout/logout";
import Dashboard from "./components/Home/Dashboard/dashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TopMenu />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomeHeader />
                <Statistics />
                <SimpleSteps />
                <AboutUs />
                <Fundations />
                <Contact />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;