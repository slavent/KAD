/**
 * @author Kozinets Svyatoslav
 */

const API = {
	GET_POSTS: "http://peremenka20.ru/wp-json/wp/v2/posts?filter[posts_per_page]=200",
	GET_ABOUT_ME: "http://peremenka20.ru/wp-json/acf/v2/page/71",
	GET_PHOTOS: "http://peremenka20.ru/wp-json/wp/v2/posts?filter[posts_per_page]=200",
	GET_PORTFOLIO: "http://peremenka20.ru/wp-json/acf/v2/page/57",
	GET_LINKS: "http://peremenka20.ru/wp-json/acf/v2/page/507",
	GET_CHILDREN: "http://peremenka20.ru/wp-json/wp/v2/posts?filter[posts_per_page]=200",
	GET_POLL: "http://peremenka20.ru/wp-json/acf/v2/page/507"
}

export default API