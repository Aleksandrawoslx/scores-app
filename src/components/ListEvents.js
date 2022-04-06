import React from 'react';
import { useState } from 'react';
import {useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ListEvents(props) {

let eventsArr = props.data

return (
  eventsArr.map(element => {
    return ( <p key={element.idEvent}>{element.strEvent}</p> )
  })
)
   
 
}