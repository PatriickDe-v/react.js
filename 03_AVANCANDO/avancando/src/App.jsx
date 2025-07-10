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
        {/* props */}
        <ShowUserName name="Patrick" />
        {/* destructuring */}
        <CarDatail brand="VW" km={10000} color="red" newCar={false} />
        {/* reaproveitando components */}
        <CarDatail brand="Ford" km={0} color={"black"} newCar={true} />
        <CarDatail brand="Fiat" km={4800} color={"orange"} newCar={false} />
      </div>
    </>
  );
}

export default App;
