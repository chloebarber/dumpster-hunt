import React, { useState, useEffect } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams, Link } from 'react-router-dom';
import {getSpot, getAllSpots, cleanupSpot, createSpot, deleteSpot, editSpot} from '../../store/diveSpot.js'

import './DiveSpot.css';

function DiveSpotPage(){
    
    const {diveId} = useParams();
    const loggedUser = useSelector((state) => state.session.user);
    const selectedSpot = useSelector((state) => state.spots.currSpot);
    const allSpots = useSelector((state) => state.spots.allSpots);
    
    const [errors, setErrors] = useState([]);
    
    const dispatch = useDispatch();


    function handleDelete(e){
        return dispatch(deleteSpot(diveId))
          .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
          });
    }

    function handleEdit(e){
        return dispatch(editSpot(diveId, {title: "placeholder", description: 'placeholder'}))
          .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
          });
    }
    
    useEffect(()=>{
        dispatch(getAllSpots());
        dispatch(cleanupSpot());
    },[dispatch])
    
    useEffect(()=>{
        dispatch(getSpot(diveId));
    },[diveId])

    function loggedInUserOptions(){
        if(true){ //loggedUser.id === selectedSpot.discoveredBy)
            return (
                <div className="useroptions">
                <h1>User Options</h1>
                <button onClick={handleDelete}>Delete Spot</button>
                <button onClick={handleEdit}>Edit Spot</button>
                </div>
            )
        }
    }
    
    if(selectedSpot){
        return (
            <div className="diveSpotWrapper">
                <h1 className='title'>{selectedSpot.title}</h1>
                <img src='./images/demo_dumpster.jpg' alt="imagine a dumpster here"/>
                <div className="discovery">
                    <span>Discovered by Possum: </span>
                    <a href='/'>{selectedSpot.User.username}</a>
                </div>
                {loggedInUserOptions()}
                <div>{selectedSpot.description}</div>
                <h1>Reviews</h1>
                <div className='reviews-div'>
                    <ul>
                        <li>Review 1</li>
                        <li>Review 2</li>
                    </ul>
                </div>

            </div>
        )
    }
    else if (allSpots){
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
    )}
    else
        return (<h1>Loading...</h1>)
}

export default DiveSpotPage;