
import { grommet } from "grommet";
import { Box, Heading, Table, TableHeader, TableRow,TableCell, TableBody } from "grommet";

export default function ListEvents(props) {
  let eventsArr = props.data;

  // data from the API mapped onto a table //
  return (
    <Box>
      <Heading>Latest events</Heading>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Home Team</TableCell>
            <TableCell>Score</TableCell>
            <TableCell>Away Team</TableCell>
            <TableCell>Venue</TableCell>
          </TableRow>
        </TableHeader>
        <tbody>
          {eventsArr.map((element) => {
            return (
              <tr key={element.idEvent}>
                <td>{element.dateEvent}</td>
                <td className="Teamhome">
                {element.strHomeTeam}
                  <img width="20px" src={props.images[element.strHomeTeam]} />
                  
                </td>
                <td>
                  {element.intHomeScore} - {element.intAwayScore}
                </td>            
                <td className="Teamaway"> <img width="20px" src={props.images[element.strAwayTeam]} />{element.strAwayTeam}</td>
                <td className="Venue"> <img width="20px" src="/tiny_venue.png"></img> {element.strVenue}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      </Box>
  );
}
