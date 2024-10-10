import React, { useState, useEffect } from 'react';
// import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {getSpot, deleteSpot, editSpot, createReview, editReview, deleteReview} from '../../store/diveSpot.js'

import './individual.css';

function IndividualDiveSpotPage(){
    
    const {diveId} = useParams();
    const loggedUser = useSelector((state) => state.session.user);
    const selectedSpot = useSelector((state) => state.spots.currSpot);
    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setimageUrl] = useState("");
    const [newReview, setNewReview] = useState("");
    const [editedReview, setEditedReview] = useState("");
    const [errors, setErrors] = useState([]);
    
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getSpot(diveId));
    },[diveId])


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
        return dispatch(editSpot(diveId, {title, description, imageUrl}))
          .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
          });
    }

    function handleNewReview(e){
        e.preventDefault();
        return dispatch(createReview({content: newReview, spotId: diveId, userId: loggedUser.id,}))
          .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
          });
    }

    function handleEditReview(e, reviewId){ //need to figure out how to pass reviewId in here
        e.preventDefault();
        return dispatch(editReview({content: editedReview, spotId: diveId, reviewId})) //needed for the PUT here
          .catch(async (res) => { //backend>routes>api>review.js uses req.body.id for Review.findByPk
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
          });
    }

    function handleDeleteReview(e, reviewId){ //need to figure out how to pass reviewId in here
        e.preventDefault();
        return dispatch(deleteReview({spotId: diveId, reviewId: reviewId})) //needed for the PUT here
          .catch(async (res) => { //backend>routes>api>review.js uses req.body.id for Review.findByPk
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
          });
    }
    
    function ownerOptions(){
        if(loggedUser && loggedUser.id === selectedSpot.discoveredBy){ //loggedUser.id === selectedSpot.discoveredBy)
            return (
                <>
                <div className="useroptions">
                    <form onSubmit={handleEdit}  id="editSpotForm" >
                        <h1>Edit Spot:</h1>
                        <span>Title</span>
                        <input id="title" name="title" onChange={(e) => setTitle(e.target.value)}></input>
                        <span>Description</span>
                        <textarea id="description" name='description' onChange={(e) => setDescription(e.target.value)}/>
                        <span>New Image URL</span>
                        <input id="imageUrl" name="imageUrl" onChange={(e) => setimageUrl(e.target.value)}></input>
                        <button type='submit' id="submitbutton">Finalize Edits</button>
                    </form>
                    <button id="deleteSpotButton" onClick={handleDelete}>Delete Spot</button>
                </div>
                </>
            )
        }
    }
    
    function writeReview(){
        if(loggedUser){
            return (
            <div id="reviewWrapper">
                <form onSubmit={handleNewReview}  id="newReviewForm">
                    <h2>Write a review!</h2>
                    <textarea id="newReview" name='newReview' onChange={(e) => setNewReview(e.target.value)}/>
                    <button type='submit' id="submitReviewButton">Post New Review</button>
                </form>
            </div>)
        }
    }

    function reviewOwnerOptions(review){
        if(loggedUser && loggedUser.id === review.userId){ //loggedUser.id === selectedSpot.discoveredBy)
            return (
                <div className="reviewOwnerOptions">
                    <form onSubmit={(e) => handleEditReview(e, review.id)}  id="editReviewForm">
                        <label for="editedReview">Edit Review:</label>
                        <textarea id="editedReview" name='editedReview' onChange={(e) => setEditedReview(e.target.value)}/>
                        <button type='submit' id="submitEditButton">Finalize Edits</button>
                    </form>
                    <button id="deleteReviewButton" onClick={(e) => handleDeleteReview(e, review.id)}>Delete</button>
                </div>
            )
        }
    }
    if (selectedSpot){
        const discoveryDate = new Date(Date.parse(selectedSpot.updatedAt))
        return (
            <div className="diveSpotWrapper">
                <div className="titleWrapper">
                    <div className='title'>
                        <h1 id="individualIitle">{selectedSpot.title}</h1>
                        <h2 id="address">{selectedSpot.address}</h2>
                    </div>
                </div>
                <div className='wrapperForContentWrapper'>
                    <div className='contentWrapper'>
                        <div id='dumpInfo'>
                            <img src={selectedSpot.imageUrl} alt="imagine a dumpster here"/>
                            <div className="discovery">
                                <div className="discoveredBy">
                                    <span>Discovered by Possum: </span>
                                    <span>{selectedSpot.User.username}</span>
                                    <div>on {discoveryDate.toDateString()}</div>
                                </div>
                                <div>{selectedSpot.description}</div>
                                {ownerOptions()}
                            </div>
                        </div>
                        <div className='reviewsdiv'>
                            <h1 id="masterReviewsHeader">Reviews</h1>
                            {writeReview()}
                            {selectedSpot.Reviews.map((review) => {
                                const displayDate = new Date(Date.parse(review.updatedAt))
                                return (
                                    <div className="reviewInfo">
                                        <div className="reviewHeader">
                                            <span>Posted by user #: {review.userId}</span>
                                            <span>  ---  </span>
                                            <span>{displayDate.toDateString()}</span>
                                        </div>
                                        <div>{review.content}</div>
                                        {reviewOwnerOptions(review)}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </div>
            )
    }
    else
        return(<h1>Loading...</h1>)
}

export default IndividualDiveSpotPage;