/**
 * @author Kozinets Svyatoslav
 */

const API = {
	GET_POSTS: "http://peremenka20.ru/wp-json/wp/v2/posts?per_page=100&categories=2",
	GET_ABOUT_ME: "http://peremenka20.ru/wp-json/acf/v2/page/71",
	GET_PHOTOS: "http://peremenka20.ru/wp-json/wp/v2/posts?per_page=100&categories=3",
	GET_PORTFOLIO: "http://peremenka20.ru/wp-json/acf/v2/page/57",
	GET_LINKS: "http://peremenka20.ru/wp-json/acf/v2/page/507",
	GET_CHILDREN: "http://peremenka20.ru/wp-json/wp/v2/posts?per_page=100&categories=8",
	GET_POLL: "http://peremenka20.ru/wp-json/acf/v2/page/507",
	GET_SHEDULER: "http://peremenka20.ru/wp-json/acf/v2/page/642",
	GET_HOLIDAYS: "http://peremenka20.ru/wp-json/acf/v2/page/636",
	GET_CONGRATULATIONS: "http://peremenka20.ru/wp-json/wp/v2/posts?per_page=100&categories=10",
	GET_ADS: "http://peremenka20.ru/wp-json/wp/v2/posts?per_page=100&categories=9"
}

export default API