
import Homepage from "./components/Homepage/Homapage";
import AboutUs from "./components/AboutUsPage/AboutUs";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import TutorPage from "./components/turorpage/TutorPage";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <div className="content">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/turots" element={<TutorPage />} />
            <Route path="/reviews" element={<Homepage />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
