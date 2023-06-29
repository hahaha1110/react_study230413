import "./App.css";
import Body from "./component/Body";
import Body2 from "./component/Body2";
import Body3 from "./component/Body3";
import StyledBody from "./component/StyledBody";
import Footer from "./component/Footer";
import Header from "./component/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Body2 />
      <Body3 />
      <StyledBody />
      <Footer />
    </div>
  );
}

export default App;
