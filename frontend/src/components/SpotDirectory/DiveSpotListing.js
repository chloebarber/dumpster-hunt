import React, { useEffect } from 'react';
// import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {getAllSpots, cleanupSpot} from '../../store/diveSpot.js'

import './listing.css';

function DiveSpotListingPage(){
    
    // const selectedSpot = useSelector((state) => state.spots.currSpot);
    const allSpots = useSelector((state) => state.spots.allSpots);
    
    // const [errors, setErrors] = useState([]);
    
    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(getAllSpots());
        dispatch(cleanupSpot());
    },[dispatch])
    
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