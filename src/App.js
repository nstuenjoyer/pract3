
import Homepage from "./components/Homepage/Homapage";
import AboutUs from "./components/AboutUsPage/AboutUs";

import { BrowserRouter, HashRouter, Route, Routes, } from "react-router-dom";
import TutorPage from "./components/turorpage/TutorPage";
import RewiewPage from "./components/ReviewPage/ReviewPage";
import { AuthContext } from "./components/context/context";
import { useState } from "react";
import Login from "./components/login/login";
import NavBar from "./components/Homepage/NavBar/NavBar";
function App() {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      <div className="App">

        <BrowserRouter>
          <div className="content">
            <NavBar></NavBar>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/turots" element={<TutorPage />} />
              <Route path="/reviews" element={<RewiewPage />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Homepage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
