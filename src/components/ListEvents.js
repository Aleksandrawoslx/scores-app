import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ListEvents(props) {
  let eventsArr = props.data;

  return (
    <div>
      <h1>Latest events</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Home Team</th>
            <th>Score</th>
            <th>Away Team</th>
            <th>Venue</th>
          </tr>
        </thead>
        <tbody>
          {eventsArr.map((element) => {
            return (
              <tr key={element.idEvent}>
                <td>{element.dateEvent}</td>
                <td>
                  <img width="30px" src={props.images[element.strHomeTeam]} />
                  {element.strHomeTeam}
                </td>
                <td>
                  {element.intHomeScore} - {element.intAwayScore}
                </td>            
                <td> <img width="30px" src={props.images[element.strAwayTeam]} />{element.strAwayTeam}</td>
                <td>{element.strVenue}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
