const ROOT = "peremenka20.ru"

const API = {
    GET_POSTS: "http://" + ROOT + "/wp-json/acf/v3/posts?categories=2",
    GET_MESSAGES: "http://" + ROOT + "/wp-json/acf/v3/posts?categories=4",
    GET_GALLERY: "http://" + ROOT + "/wp-json/acf/v3/posts?categories=3"
}

export default API
