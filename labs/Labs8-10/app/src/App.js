import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { TimerStarter } from "./Timer";
import { ReversedTimerStarter } from "./ReversedTimer";
import { PrimeNumbers } from "./PrimeNumbers";
import { TrafficLight } from "./TrafficLight";
import { Revert } from "./Revert";
import { Cities } from "./Cities";
import { Calculator } from "./Calculator";
import { BaseCalculator } from "./BaseCalculator";
import { SecondsLiving } from "./SecondsLiving";
import { NumberFilter } from "./NumberFilter";
import { RegistrationForm } from "./RegistrationForm";
import { ProfileEditForm } from "./ProfileEditForm";
import { RegistrationFormAntD } from "./RegistrationFormAntD";
import { LoginForm } from "./LoginForm";

function App() {
  return (
    <Routes>
      <Route path="/timer" element={<TimerStarter />}></Route>
      <Route path="/reversed-timer" element={<ReversedTimerStarter />}></Route>
      <Route path="/prime-numbers" element={<PrimeNumbers />}></Route>
      <Route path="/traffic-light" element={<TrafficLight />}></Route>
      <Route path="/revert" element={<Revert t="Привет!" />}></Route>
      <Route path="/cities" element={<Cities />}></Route>
      <Route path="/calculator" element={<Calculator />}></Route>
      <Route path="/base-calculator" element={<BaseCalculator />}></Route>
      <Route path="/seconds-living" element={<SecondsLiving />}></Route>
      <Route path="/number-filter" element={<NumberFilter />}></Route>
      <Route path="/registration" element={<RegistrationForm />}></Route>
      <Route path="/login" element={<LoginForm />}></Route>
      <Route path="/profile-edit" element={<ProfileEditForm />}></Route>
      <Route path="/registration-antd" element={<RegistrationFormAntD />}></Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
