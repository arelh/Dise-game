import "./App.css";
import Current from "./current";
import Die from "./die";
import RollDice from "./RollDice";
import StartScreen from "./startScreen";


function App() {
  return (
    <div>
      <StartScreen />
      <RollDice/>
      <div className="container">
     
        <div className="player1">player1  <Current/></div>
        <Die/>
        <div className="player2">player2  <Current/></div>
        {/* <h1 style={{backgroundColor: "lightblue"}}>Hello Style!</h1> */}
       
      </div>
    </div>
  );
}

export default App;
