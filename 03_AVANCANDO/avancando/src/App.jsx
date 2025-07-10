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
  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "KIA", color: "Branco", newCar: false, km: 58745 },
    { id: 3, brand: "Renault", color: "Cinza", newCar: false, km: 55847 },
  ];

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
        {/* loop ejm array de objeto*/}
        {cars.map((car) => (
          <CarDatail
            brand={car.brand}
            color={car.color}
            km={car.km}
            newCar={car.newCar}
          />
        ))}
      </div>
    </>
  );
}

export default App;
