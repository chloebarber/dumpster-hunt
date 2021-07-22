import React, { useState, useEffect } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams, Link } from 'react-router-dom';
import {getSpot, getAllSpots, cleanupSpot, createSpot, deleteSpot, editSpot} from '../../store/diveSpot.js'

import './DiveSpot.css';

function DiveSpotListingPage(){
    
    const {diveId} = useParams();
    const selectedSpot = useSelector((state) => state.spots.currSpot);
    const allSpots = useSelector((state) => state.spots.allSpots);
    
    const [errors, setErrors] = useState([]);
    
    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(getAllSpots());
        dispatch(cleanupSpot());
    },[dispatch])
    
    useEffect(()=>{
        dispatch(getSpot(diveId));
    },[diveId])
    if(allSpots){
        return (
        <div className="diveSpotWrapper">
            <div className="spotList">
                <h1>All Spots:</h1>
                {allSpots.map((spot) => {
                    return (
                        <li>
                        <Link to={`/divespots/${spot.id}`}>{spot.title}</Link>
                        </li>
                    )
                })}
            </div>
            <Link to="/divespots/new">Found a new dumpster, and wanna share? Click here!</Link>
        </div>
        )
    }
    else
        return(<h1>Loading...</h1>)
}

export default DiveSpotListingPage;