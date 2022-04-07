import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ListEvents(props) {
  let eventsArr = props.data;

  return (
    <div>
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
                <td>{element.strHomeTeam}</td>

                <td>
                  {element.intHomeScore} : {element.intAwayScore}
                </td>
                <td>{element.strAwayTeam}</td>
                <td>{element.strVenue}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
