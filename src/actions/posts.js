/**
 * @author Kozinets Svyatoslav
 * Экшены для статей
 */
import CONST from "../constants"

export function getPosts( data ) {
	return {
		type: CONST.POSTS.GET,
		payload: data
	}
}