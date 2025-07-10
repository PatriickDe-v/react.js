import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ManageData from "../components/ManageData";
import ListRender from "../components/ListRender";
import DeletUserList from "../components/DeletUserList";

function App() {
  return (
    <>
      <div>
        <ManageData />
        <ListRender />
        <DeletUserList />
      </div>
    </>
  );
}

export default App;
