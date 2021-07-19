import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './DiveSpot.css';

function DiveSpotPage(){
    return (
        <h1 className='placeholder'>Dive Spot Placeholder</h1>
    )
}

export default DiveSpotPage;