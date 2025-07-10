import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ManageData from "../components/ManageData";
import ListRender from "../components/ListRender";
import DeletUserList from "../components/DeletUserList";
import ConditionalRender from "../components/ConditionalRender";
import ShowUserName from "../components/ShowUserName";
import CarDatail from "../components/CarDatail";

function App() {
  return (
    <>
      <div>
        <ManageData />
        <ListRender />
        <DeletUserList />
        <ConditionalRender />
        <ShowUserName name="Patrick" />
        <CarDatail brand="VW" km={10000} color="red" />
      </div>
    </>
  );
}

export default App;
