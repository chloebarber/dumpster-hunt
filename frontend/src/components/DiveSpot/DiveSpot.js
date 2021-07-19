import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './DiveSpot.css';

function DiveSpotPage(){
    return (
        <>
            <h1 className='placeholder'>Dive Spot Placeholder</h1>
            <img src='./images/demo_dumpster.jpg'/>
            <div>description look it's very long wooo</div>

        </>
    )
}

export default DiveSpotPage;