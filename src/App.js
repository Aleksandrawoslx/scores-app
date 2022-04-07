import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import ListEvents from "./components/ListEvents";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [events, setEvents] = useState();

  const url =
    "https://www.thesportsdb.com/api/v1/json/2/eventsseason.php?id=4328&s=2020-2021";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setEvents(response.data.events);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div className="App">{events && <ListEvents data={events} />}</div>;
}

export default App;
