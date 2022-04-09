
import ListEvents from "./components/ListEvents";
import Fuse from "fuse.js";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import {
  Box,
  DateInput,
  Grommet,
  Text,
  TextInput,
  RangeSelector,
  Stack,
  Heading,
} from "grommet";
import "./App.css";

function App() {
  // relevant events and images states //
  const [events, setEvents] = useState();
  const [images, setImages] = useState();
  const [searchResults, setSearchResults] = useState();
  const [inputValue, setInputValue] = useState("");

  const options = {
    keys: ["strHomeTeam", 
            "strAwayTeam",
            "strVenue"
      ]
  }

  const fuse = new Fuse (events, options);

  const handleSearchInput = (e) => {
    setInputValue(e.target.value);
    const fuzzyResult = fuse.search(inputValue);
    console.log(fuzzyResult);
    inputValue.length == 0
      ? setSearchResults(events)
      : setSearchResults(fuzzyResult);
  };

  // endpoint for events //
  const urlEvents =
    "https://www.thesportsdb.com/api/v1/json/2/eventsseason.php?id=4328&s=2021-2022";

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
  const urlImages =
    "https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=English%20Premier%20League";

  useEffect(() => {
    axios
      .get(urlImages)
      .then((response) => {
        // access to the right team badge //
        let imagesArr = {};
        response.data.teams.map((element) => {
          imagesArr[element.strTeam] = element.strTeamBadge;
        });
        setImages(imagesArr);
      })
      .then()
      .catch((err) => {
        console.log(err);
      });
  }, []);




  const theme = {
    notification: { container: { background: "brand" } },
    global: {
      font: {
        family: "Helvetica",
        size: "14px",
        height: "20px",
      },
    },
  };


  // console.log(events)

  return (
    
      <Grommet theme={theme}>
        <Box width="60vw" flex margin="auto">
        <Box>
        <TextInput value={inputValue} onChange={handleSearchInput}></TextInput>
      </Box>
      <Box>
      {events && images &&<ListEvents data={events} images={images} />}
      </Box>

        </Box>
     
      </Grommet>
     
   
  );
}
export default App;
