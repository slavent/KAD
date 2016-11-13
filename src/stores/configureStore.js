/**
 * @author Kozinetz Svyatoslav
 * Store
 */
import {
	createStore,
	combineReducers
} from "redux"
import rootReducer from "reducers/"

export default function configurateStore( initState ) {
	const store = createStore( rootReducer, initState )

	return store
}