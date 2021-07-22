import React, { useState, useEffect } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams, Link } from 'react-router-dom';
import {getSpot, getAllSpots, cleanupSpot, createSpot, deleteSpot, editSpot} from '../../store/diveSpot.js'

import './DiveSpot.css';
import './individual.css';

function IndividualDiveSpotPage(){
    
    const {diveId} = useParams();
    const loggedUser = useSelector((state) => state.session.user);
    const selectedSpot = useSelector((state) => state.spots.currSpot);
    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState([]);
    
    const dispatch = useDispatch();


    function handleDelete(e){
        e.preventDefault();
        return dispatch(deleteSpot(diveId))
          .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
          });
    }

    function handleEdit(e){
        e.preventDefault();
        return dispatch(editSpot(diveId, {title, description,}))
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
    
    function ownerOptions(){
        if(loggedUser && loggedUser.id === selectedSpot.discoveredBy){ //loggedUser.id === selectedSpot.discoveredBy)
            return (
                <div className="useroptions">
                <h1>User Options</h1>
                <button onClick={handleDelete}>Delete Spot</button>
                <form onSubmit={handleEdit}  id="editSpotForm">
                    <h1>Edit Spot:</h1>
                    <span>Title</span>
                    <input id="title" name="title" onChange={(e) => setTitle(e.target.value)}></input>
                    <span>Description</span>
                    <textarea id="description" name='description' onChange={(e) => setDescription(e.target.value)}/>
                    <button type='submit' id="submitbutton">Finalize Edits</button>
                </form>
                </div>
            )
        }
    }
    function writeReview(){
        if(loggedUser){
            return (<h2>Write a review!</h2>)
        }
    }
    
    if (selectedSpot){
        return (
            <div className="diveSpotWrapper">
                <div className='title'>
                    <h1>{selectedSpot.title}</h1>
                    <h2>Address</h2>
                </div>
                <div id='dumpInfo'>
                    <img src={selectedSpot.imageUrl} alt="imagine a dumpster here"/>
                    <div className="discovery">
                        <span>Discovered by Possum: </span>
                        <a href='/'>{selectedSpot.User.username}</a>
                        <div>{selectedSpot.description}</div>
                        {ownerOptions()}
                    </div>
                </div>
                <div className='reviews-div'>
                    <h1>Reviews</h1>
                    {writeReview()}
                    {selectedSpot.Reviews.map((review) => {
                        return (
                            <div>
                                <div>Posted by user #: {review.userId}</div>
                                <div>{review.content}</div>
                            </div>
                        )
                    })}
                </div>

            </div>
            )
    }
    else
        return(<h1>Loading...</h1>)
}

export default IndividualDiveSpotPage;