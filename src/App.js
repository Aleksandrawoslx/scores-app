import ListEvents from "./components/ListEvents";
import Fuse from "fuse.js";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import {
  Box,
  Grommet,
  TextInput,
  Heading,
} from "grommet";
import "./App.css";

function App() {
  // relevant events and images states //
  const [events, setEvents] = useState();
  const [images, setImages] = useState();
  const [searchResults, setSearchResults] = useState();
  const [inputValue, setInputValue] = useState("");

  // fuzzy search options //
  const options = {
    keys: ["strHomeTeam", "strAwayTeam", "strVenue"],
    threshold: 0.0,
  };

  const fuse = new Fuse(events, options);

  const handleSearchInput = (e) => {
    setInputValue(e.target.value);
    let fuzzyResult = fuse.search(inputValue);
    fuzzyResult = fuzzyResult.map((element) => {
      return element.item;
    });

    inputValue.length < 2
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

  // Grommet global theme configuration //
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
// proxy from fuzzy search to props //
  let renderData = searchResults ? searchResults : events;

  return (
    <Grommet theme={theme}>
      <Box width="80%" margin="auto">
        <Heading>Latest events</Heading>
        <Box flex align="center">
          <Box width="400px">
            <TextInput
              placeholder="search for team or venue..."
              value={inputValue}
              onChange={handleSearchInput}
            ></TextInput>
          </Box>
        </Box>
        <Box>
          {events && images && <ListEvents data={renderData} images={images} />}
        </Box>
      </Box>
    </Grommet>
  );
}
export default App;
