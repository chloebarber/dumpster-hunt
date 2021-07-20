import React, { useState, useEffect } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import {getSpot} from '../../store/diveSpot.js'
import './DiveSpot.css';

function DiveSpotPage(){
    const diveId = useParams();
    const selectedSpot = useSelector((state) => state.spot[diveId]);

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getSpot(diveId));
    },[diveId])

    return (
        <>
            <h1>Selected Spot is:  {selectedSpot.id}</h1>
            <h1 className='placeholder'>Dive Spot Placeholder</h1>
            <img src='./images/demo_dumpster.jpg'/>
            <div className="discovery">
                <span>Discovered by: </span>
                <a href='/'>User Link</a>
            </div>
            <div>description look it's very long wooo</div>
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

export default DiveSpotPage;