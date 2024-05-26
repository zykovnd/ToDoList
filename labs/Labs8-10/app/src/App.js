import { Routes, Route } from "react-router-dom";
import "./App.css";
import { TimerStarter } from "./Timer";
import { ReversedTimerStarter } from "./ReversedTimer";
import { PrimeNumbers } from "./PrimeNumbers";
import { TrafficLight } from "./TrafficLight";
import { Revert } from "./Revert";

function App() {
  return (
    <Routes>
      <Route path="/timer" element={<TimerStarter />}></Route>
      <Route path="/reversed-timer" element={<ReversedTimerStarter />}></Route>
      <Route path="/prime-numbers" element={<PrimeNumbers/>}></Route>
      <Route path="/traffic-light" element={<TrafficLight/>}></Route>
      <Route path="/revert" element={<Revert t='Привет!'/>}></Route>
    </Routes>
  );
}

export default App;
