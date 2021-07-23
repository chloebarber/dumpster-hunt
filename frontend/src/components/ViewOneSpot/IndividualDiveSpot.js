import React, { useState, useEffect } from 'react';
// import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {getSpot, deleteSpot, editSpot, createReview, editReview} from '../../store/diveSpot.js'

import './individual.css';

function IndividualDiveSpotPage(){
    
    const {diveId} = useParams();
    const loggedUser = useSelector((state) => state.session.user);
    const selectedSpot = useSelector((state) => state.spots.currSpot);
    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [newReview, setNewReview] = useState("");
    const [editedReview, setEditedReview] = useState("");
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
            return (
            <div className="reviewWrapper">
                <h2>Write a review!</h2>
                <form onSubmit={handleNewReview}  id="newReviewForm">
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
                    <button onClick={handleDelete}>Delete</button>
                    <form onSubmit={(e) => handleEditReview(e, review.id)}  id="editReviewForm">
                        <h1>Edit Review:</h1>
                        <textarea id="editedReview" name='editedReview' onChange={(e) => setEditedReview(e.target.value)}/>
                        <button type='submit' id="submitEditButton">Finalize Edits</button>
                    </form>
                </div>
            )
        }
    }
    
    if (selectedSpot){
        return (
            <div className="diveSpotWrapper">
                <div className="titleWrapper">
                    <div className='title'>
                        <h1>{selectedSpot.title}</h1>
                        <h2>Address</h2>
                    </div>
                </div>
                <div className='wrapperForContentWrapper'>
                    <div className='contentWrapper'>
                        <div id='dumpInfo'>
                            <img src={selectedSpot.imageUrl} alt="imagine a dumpster here"/>
                            <div className="discovery">
                                <span>Discovered by Possum: </span>
                                <a href='/'>{selectedSpot.User.username}</a>
                                <div>{selectedSpot.description}</div>
                                {ownerOptions()}
                            </div>
                        </div>
                        <div className='reviewsdiv'>
                            <h1>Reviews</h1>
                            {writeReview()}
                            {selectedSpot.Reviews.map((review) => {
                                return (
                                    <div>
                                        <div>Posted by user #: {review.userId}</div>
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