import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
// import Header from "./components/Home/Header/header";
// import Contact from "./components/common/Contact/contact";
// import Navigation from "./components/common/Navigation/navigation";
import Login from "./components/common/Login/login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Login />
        {/* <Navigation /> */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* <Header /> */}
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
