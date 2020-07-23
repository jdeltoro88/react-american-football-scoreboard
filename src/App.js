//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import BottomRow from "./BottomRow";
import "./App.css";

f
unction App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomescore] = useState(0);
  const [awayScore, setAwayscore] = useState(0);
  //const [initialQuarter, setInitialQuarter]= useState(0);
  const touchDown = value => value + 7;
  const fieldGoal = value => value + 3;
  //const quarterNum = value => value + 1;



  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Broncos</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
  <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">cowboys</h2>
            <div className="away__score">{awayScore}</div>
          </div>

       
      
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick = {()=> {setHomescore(touchDown(homeScore))}}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick = {()=> {setHomescore(fieldGoal(homeScore))}}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown"onClick = {()=> {setAwayscore(touchDown(homeScore))}}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal"onClick = {()=> {setAwayscore(fieldGoal(awayScore))}}>Away Field Goal</button>

          
        </div>
      </section>
    </div>
  );
}

export default App;
