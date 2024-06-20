import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./images/logo.svg";
import userIcon from "./images/woman.png";
import "./index.css";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);
console.log("heading...", heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

const Title = () => {
  return <h1 className="head">This is Title using JSX 🚀</h1>;
};
const number = 10000;
const HeadingComponent = () => {
  return (
    <div>
      <h1>Namaste React from Functional Component🚀 </h1>
      <h2>{Title()}</h2>
    </div>
  );
};

const HeadingComponent2 = () => {
  return (
    <div>
     <span><img className="logo" src={logo} height={"40px"} /></span> 

      <input className="search" type="text" placeholder="search.."></input>

      <span className="user"><img src={userIcon} height={"40px"} /></span>
    </div>
  );
};

root.render(<HeadingComponent2 />);
