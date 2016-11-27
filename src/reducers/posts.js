/**
 * @author Kozinetz Svyatoslav
 * Posts actions
 */
import CONST from "../constants"

const initState = {
	data: []
}

export default function posts( state = initState, action ) {
	switch ( action ) {
		case CONST.POSTS.GET:
			return action.payload
			break
	}

	return state
}