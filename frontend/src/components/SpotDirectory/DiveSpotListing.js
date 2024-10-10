import React, { useEffect } from 'react';
// import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {getAllSpots, cleanupSpot} from '../../store/diveSpot.js'

import './listing.css';

function DiveSpotListingPage(){
    
    // const selectedSpot = useSelector((state) => state.spots.currSpot);
    const allSpots = useSelector((state) => state.spots.allSpots);
    // const allUSStates = ["Alaska",
    // "Alabama",
    // "Arkansas",
    // "American Samoa",
    // "Arizona",
    // "California",
    // "Colorado",
    // "Connecticut",
    // "District of Columbia",
    // "Delaware",
    // "Florida",
    // "Georgia",
    // "Guam",
    // "Hawaii",
    // "Iowa",
    // "Idaho",
    // "Illinois",
    // "Indiana",
    // "Kansas",
    // "Kentucky",
    // "Louisiana",
    // "Massachusetts",
    // "Maryland",
    // "Maine",
    // "Michigan",
    // "Minnesota",
    // "Missouri",
    // "Mississippi",
    // "Montana",
    // "North Carolina",
    // "North Dakota",
    // "Nebraska",
    // "New Hampshire",
    // "New Jersey",
    // "New Mexico",
    // "Nevada",
    // "New York",
    // "Ohio",
    // "Oklahoma",
    // "Oregon",
    // "Pennsylvania",
    // "Puerto Rico",
    // "Rhode Island",
    // "South Carolina",
    // "South Dakota",
    // "Tennessee",
    // "Texas",
    // "Utah",
    // "Virginia",
    // "Virgin Islands",
    // "Vermont",
    // "Washington",
    // "Wisconsin",
    // "West Virginia",
    // "Wyoming"];
    // const [errors, setErrors] = useState([]);
    
    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(getAllSpots());
        dispatch(cleanupSpot());
    },[dispatch])
    
    // let currIndex = 0;
    
    //list-by-state test code
    // if(allSpots){ 
    //     return (
    //     <div className="diveSpotWrapper">
    //             <h1>All Spots</h1>
    //         <div className="spotList">
    //             {allUSStates.map((state)=> {
    //                 return (
    //                 <div className='stateDiv'>
    //                     <h2 className='stateName'>{state}</h2>
    //                     {allSpots.map((spot) => {
    //                         return (
    //                             <li>
    //                             <Link to={`/divespots/${spot.id}`}>{spot.title}</Link>
    //                             </li>
    //                         )
    //                     })}
    //                 </div>)
    //             })}
    //         </div>
    //         <Link to="/divespots/new">Found a new dumpster, and wanna share? Click here!</Link>
    //     </div>
    //     )
    // }
    // else
    //     return(<h1>Loading...</h1>)
    
    if(allSpots){
        return (
        <div className="diveSpotWrapper">
            <div className="spotListWrapper">
                <h1 id="allSpotsHeader">All Spots:</h1>
                <div className="spotList">
                    {allSpots.map((spot) => {
                        return (
                            <Link className= "spotListingLink" to={`/divespots/${spot.id}`}>{spot.title}</Link>
                        )
                    })}
                </div>
                <Link id="newSpotLink" to="/divespots/new">Found a new dumpster, and wanna share? Click here!</Link>
            </div>
        </div>
        )
    }
    else
        return(<h1>Loading...</h1>)
}

export default DiveSpotListingPage;