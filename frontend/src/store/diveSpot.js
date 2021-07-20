


const LOAD = '/diveSpot/LOAD'

const loadSpot = (spot) => ({
    type: LOAD,
    spot
})

export const getSpot = (spotId) => async (dispatch) => {
	const response = await fetch(`/api/diveSpot/${spotId}`);

	if (response.ok) {
		const spot = await response.json();
		dispatch(loadSpot(spot));
	}
};

const initialState = {
	list: [],
	types: [],
};

const diveSpotReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD: {
			return {
				...state,
				selectedSpot: action.selectedSpot,
			};
		}
		default:
			return state;
	}
};

export default diveSpotReducer;