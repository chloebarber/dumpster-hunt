import React, { useState, useEffect } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams, Link } from 'react-router-dom';
import {createSpot} from '../../store/diveSpot.js'

import './DiveSpot.css';


function NewDiveSpotPage(){
    
    const loggedUser = useSelector((state) => state.session.user);
    const [errors, setErrors] = useState([]);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("New Spot created successfully! Redirecting you to the Spots list now...");
        window.location.replace("/divespots");
        setErrors([]);
        return dispatch(createSpot({title, description, imageUrl, discoveredBy: loggedUser.id,}))
          .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
          });
      }
    if(loggedUser){
        return (
            <div className="diveSpotWrapper">
                <form onSubmit={handleSubmit}  id="newSpotForm">
                    <h1>New Spot:</h1>
                    <span>Title</span>
                    <input id="title" name="title" onChange={(e) => setTitle(e.target.value)}></input>
                    <span>Description</span>
                    <textarea id="description" name='description' onChange={(e) => setDescription(e.target.value)}/>
                    <span>Image URL</span>
                    <input id="imageUrl" name='imageUrl' onChange={(e) => setImageUrl(e.target.value)}/>
                    <button type='submit' id="submitbutton">Create New DiveSpot</button>
                </form>
            </div>
        )
    }
    else{
        return (
            <div className="diveSpotWrapper">
                <h1>While I appreciate your enthusiasm,</h1>
                <h2>you'll need to log in to post a new Spot</h2>
                <div>
                <Link to="/login">Log In</Link><span> or </span> <Link to="/signup">Sign Up</Link><span> here!</span>
                </div>
            </div>
        )
    }
      
}

export default NewDiveSpotPage;