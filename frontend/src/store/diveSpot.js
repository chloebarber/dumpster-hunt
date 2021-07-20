


const LOAD_ONE = '/diveSpot/LOAD_ONE';
const LOAD_ALL = '/diveSpot/LOAD_ALL';

const loadSpot = (spot) => ({
    type: LOAD_ONE,
    spot
})

const loadAll = (allSpots) => ({
    type: LOAD_ALL,
    allSpots
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


const diveSpotReducer = (state = {}, action) => {
	let newState;
    switch (action.type) {
        case LOAD_ONE: {
            newState = Object.assign({}, state);
            newState.currSpot = action.spot;
            return newState;
		}
        case LOAD_ALL: {
            console.log('u tried');
            newState = Object.assign({}, state);
            newState.allSpots = action.allSpots;
            return newState;
        }
		default:
			return state;
	}
};

export default diveSpotReducer;