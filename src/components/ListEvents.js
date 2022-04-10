import { grommet } from "grommet";
import {
  Box,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
} from "grommet";

export default function ListEvents(props) {
  let eventsArr = props.data;

  // data from the API mapped onto a table //
  return (
    <Box margin="medium">
     
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Home Team</TableCell>
            <TableCell align="center">Score</TableCell>
            <TableCell align="left">Away Team</TableCell>
            <TableCell>Venue</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {eventsArr.map((element) => {
            return (
              <TableRow key={element.idEvent}>
                <TableCell>{element.dateEvent}</TableCell>
                <TableCell align="right" className="Teamhome">
                  {element.strHomeTeam}
                  <img width="20px" src={props.images[element.strHomeTeam]} />
                </TableCell>
                <TableCell align="center">
                  {element.intHomeScore} - {element.intAwayScore}
                </TableCell>
                <TableCell align="left" className="Teamaway">
                  {" "}
                  <img width="20px" src={props.images[element.strAwayTeam]} />
                  {element.strAwayTeam}
                </TableCell>
                <TableCell className="Venue">
                  {" "}
                  <img width="20px" src="/tiny_venue.png"></img>{" "}
                  {element.strVenue}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Box>
  );
}
