import { csrfFetch } from './csrf';


const LOAD_ONE = '/diveSpot/LOAD_ONE';
const LOAD_ALL = '/diveSpot/LOAD_ALL';
const CLEANUP = '/diveSpot/CLEANUP';
const CREATE_SPOT ='/diveSpot/CREATE_ONE';
const DELETE = '/diveSpot/DELETE';

const loadSpot = (spot) => ({
    type: LOAD_ONE,
    spot
})

const loadAll = (allSpots) => ({
    type: LOAD_ALL,
    allSpots
})

const cleanup = () => ({
    type: CLEANUP
})

export const getSpot = (spotId) => async (dispatch) => {
	const response = await fetch(`/api/diveSpots/${spotId}`);

	if (response.ok) {
		const spot = await response.json();
		dispatch(loadSpot(spot));
	}
};

export const getAllSpots = () => async (dispatch) => {
	const response = await fetch(`/api/diveSpots`);

	if (response.ok) {
		const spots = await response.json();
        console.log(spots);
		dispatch(loadAll(spots));
	}
};

export const createSpot = (newSpot) => async (dispatch) => {
    const { title, description, discoveredBy } = newSpot;
	const response = await csrfFetch(`/api/diveSpots`,{
        method: "POST",
        body: JSON.stringify({
            title,
            description,
            discoveredBy
        }),
      });
	if (response.ok) {
		const spots = await response.json();
		dispatch(loadAll(spots));
	}
};

export const deleteSpot = (spotId) => async (dispatch) => {
	const response = await csrfFetch(`/api/diveSpots/${spotId}`,{
        method: "DELETE"
      });
    const spots = await response.json();
    dispatch(cleanupSpot(spotId));
    dispatch(loadAll(spots));
};

export const editSpot = (spotId, updatedData) => async (dispatch) => {
    const { title, description } = updatedData;
	const response = await csrfFetch(`/api/diveSpots/${spotId}`,{
        method: "PUT",
        body: JSON.stringify({
            title,
            description,
        }),
      });
      console.log("poop");
    const spots = await response.json();
    dispatch(cleanupSpot(spotId));
    dispatch(loadAll(spots));
};

export const cleanupSpot = () => async (dispatch) => {
		dispatch(cleanup());
};


const diveSpotReducer = (state = {}, action) => {
	let newState;
    switch (action.type) {
        case LOAD_ONE: {
            newState = Object.assign({}, state);
            newState.currSpot = action.spot;
            return newState;
		}
        case LOAD_ALL: {
            newState = Object.assign({}, state);
            newState.allSpots = action.allSpots;
            return newState;
        }
        case CLEANUP: {
            newState = Object.assign({}, state);
            newState.currSpot = null;
            return newState;
        }
		default:
			return state;
	}
};

export default diveSpotReducer;