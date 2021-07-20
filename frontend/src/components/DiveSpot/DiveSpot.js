import React, { useState, useEffect } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams, Link } from 'react-router-dom';
import {getSpot, getAllSpots} from '../../store/diveSpot.js'
import './DiveSpot.css';

function DiveSpotPage(){
    const {diveId} = useParams();
    const selectedSpot = useSelector((state) => state.spots.currSpot);
    const allSpots = useSelector((state) => state.spots.allSpots);
    
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getAllSpots());
    },[dispatch])
    
    useEffect(()=>{
        dispatch(getSpot(diveId));
    },[diveId])


    
    if(selectedSpot){
        return (
            <>
                <h1>Selected Spot is:  {selectedSpot.id}</h1>
                <h1 className='title'>{selectedSpot.title}</h1>
                <img src='./images/demo_dumpster.jpg'/>
                <div className="discovery">
                    <span>Discovered by: </span>
                    <a href='/'>{selectedSpot.User.username}</a>
                </div>
                <div>{selectedSpot.description}</div>
                <h1>Reviews</h1>
                <div className='reviews-div'>
                    <ul>
                        <li>Review 1</li>
                        <li>Review 2</li>
                    </ul>
                </div>

            </>
        )
    }
    else if (allSpots){
        return (
        <>
            <h1>All Spots:</h1>
            <ul>
                {allSpots.map((spot) => {
                    return (
                        <li>
                        <Link to={`/diveSpots/${spot.id}`}>{spot.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )}
    else
        return (<h1>Loading...</h1>)
}

export default DiveSpotPage;