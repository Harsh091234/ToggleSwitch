// components/ToggleSwitch.jsx
import { useState } from "react";
import "./ToggleSwitch.css";

export const ToggleSwitch = () => {
  
  const [isOn, setOn] = useState(false);
  const handleToggleSwitch = () => {
    setOn(!isOn)
  }
  return (
    <div className="toggle-switch " style={{backgroundColor: isOn? "#4caf50" : "#f44336"}} onClick={handleToggleSwitch}>
      <div className={`switch ${isOn? "on" : "off"}`}>
        <span className="switch-state">{isOn? "ON" : "OFF"}</span>
      </div>
    </div>
  );
};
