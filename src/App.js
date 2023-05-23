
import Homepage from "./components/Homepage/Homapage";
import AboutUs from "./components/AboutUsPage/AboutUs";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import TutorPage from "./components/turorpage/TutorPage";
import RewiewPage from "./components/ReviewPage/ReviewPage";
import { AuthContext } from "./components/context/context";
import { useState } from "react";
function App() {
  const [isAuth, setIsAuth] = useState()
  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      <div className="App">
        <HashRouter>
          <div className="content">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/turots" element={<TutorPage />} />
              <Route path="/reviews" element={<RewiewPage />} />
              <Route path="/about" element={<AboutUs />} />
            </Routes>
          </div>
        </HashRouter>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
