import "./App.css";
import Body from "./component/Body";
import Body2 from "./component/Body2";
import Body3 from "./component/Body3";
import Body4 from "./component/Body4";
import ChildComp from "./component/ChildComp";
import StyledBody from "./component/StyledBody";
import Footer from "./component/Footer";
import Header from "./component/Header";
import StateBody from "./component/StateBody";

function App() {
  const BodyProps = {
    name: "호호호",
    location: "영국",
    age: 80,
    foods: ["피자", "파스타"],
  };
  return (
    <div className="App">
      <Header />
      <StateBody />
      <Body {...BodyProps} />
      <Body2 />
      <Body3 />
      <Body4>
        <ChildComp />
      </Body4>
      <StyledBody />
      <Footer />
    </div>
  );
}

export default App;
