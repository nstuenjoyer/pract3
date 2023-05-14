import NavBar from "./components/NavBarSelect/NavBarSelect";
import Footer from "./components/footer/Footer"
import Content from "./components/Content/Content";
import Homepage from "./components/Homepage/Homapage";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <div className="content">
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
