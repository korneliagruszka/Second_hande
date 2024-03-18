import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
// import Contact from "./components/common/Contact/contact";
import TopMenu from "./components/common/TopMenu/topMenu";
import HomeHeader from "./components/Home/HomeHeader/homeHeader";
import Statistics from "./components/Home/Statistics/statistics";

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
              </>
            }
          />
        </Routes>
        {/* <Contact /> */}
      </div>
    </BrowserRouter>
  )
}

export default App
