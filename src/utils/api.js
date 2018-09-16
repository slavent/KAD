const ROOT = "peremenka20.ru"

export default {
    GET_POSTS: "http://" + ROOT + "/wp-json/acf/v3/posts?categories=2",
    GET_POST: "http://" + ROOT + "/wp-json/acf/v3/posts/",
    GET_MESSAGES: "http://" + ROOT + "/wp-json/acf/v3/posts?categories=4",
    GET_GALLERY: "http://" + ROOT + "/wp-json/acf/v3/posts?categories=3"
}
