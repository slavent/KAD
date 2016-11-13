import {
	combineReducers
} from "redux"
import {
	routerReducer
} from "react-router-redux"
import posts from "./posts"
import children from "./children"

export default combineReducers( {
	posts,
	children,
	routing: routerReducer
} )