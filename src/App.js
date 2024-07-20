import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import "./App.css";

const style = {
  backgroundColor: "yellow",
};

const AppLayout = () => {
  console.log("Body",<Body/>)
  return (
    <div className="container">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
