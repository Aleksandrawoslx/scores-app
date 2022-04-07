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
  const [images, setImages] = useState()
  

  // endpoint for events //
  const urlEvents =
    "https://www.thesportsdb.com/api/v1/json/2/eventsseason.php?id=4328&s=2020-2021";

  useEffect(() => {
    axios
      .get(urlEvents)
      .then((response) => {
        setEvents(response.data.events);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  
  // endpoint for images //
  const urlImages = "https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=English%20Premier%20League";

  useEffect(() => {
    axios
      .get(urlImages)
      .then((response) => {
        let imagesArr = {};
        (response.data.teams).map(element => {
          imagesArr[element.strTeam] = element.strTeamBadge
        })

        setImages(imagesArr)
        
      })
      .then()
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div className="App">{events && images && <ListEvents data={events} images={images}/>}</div>;
}

export default App;
