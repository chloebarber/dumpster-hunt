import React, { useState, useEffect } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams, Link } from 'react-router-dom';
import {getSpot, getAllSpots, cleanupSpot, createSpot, deleteSpot, editSpot} from '../../store/diveSpot.js'

import './DiveSpot.css';

function DiveSpotPage(){
    
    const {diveId} = useParams();
    const selectedSpot = useSelector((state) => state.spots.currSpot);
    const allSpots = useSelector((state) => state.spots.allSpots);
    const [errors, setErrors] = useState([]);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors([]);
        return dispatch(createSpot({title, description}))
          .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
          });
      }

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


    
    if(selectedSpot){
        return (
            <div className="diveSpotWrapper">
                <h1>Selected Spot is:  {selectedSpot.id}</h1>
                <button onClick={handleDelete}>Delete Spot</button>
                <button onClick={handleEdit}>Edit Spot</button>
                <h1 className='title'>{selectedSpot.title}</h1>
                <img src='./images/demo_dumpster.jpg'/>
                <div className="discovery">
                    <span>Discovered by Possum: </span>
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
                        <Link to={`/diveSpots/${spot.id}`}>{spot.title}</Link>
                        </li>
                    )
                })}
            </div>
            <form onSubmit={handleSubmit}  id="newSpotForm">
                <h1>New Spot:</h1>
                <span>Title</span>
                <input id="title" name="title" onChange={(e) => setTitle(e.target.value)}></input>
                <span>Description</span>
                <textarea id="description" name='description' onChange={(e) => setDescription(e.target.value)}/>
                <button type='submit' id="submitbutton">Create New DiveSpot</button>
            </form>
        </div>
    )}
    else
        return (<h1>Loading...</h1>)
}

export default DiveSpotPage;