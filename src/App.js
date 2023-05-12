import NavBar from "./components/NavBar/NavBar";

import Content from "./components/Content/Content";
function App() {
  return (
    <div className="App">
      <NavBar className="NavBarApp"></NavBar>
      <Content ></Content>
      <Footer className="FooterApp"></Footer>
    </div>
  );
}

export default App;
