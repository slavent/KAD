/**
 * @author Kozinets Svyatoslav
 */

let data = [ {
    url: "/",
    title: "Главная",
    active: true
}, {
    url: "/my-class",
    title: "1Б",
    active: false
}, {
    url: "/portfolio",
    title: "Портфолио",
    active: false
}, {
    url: "/library",
    title: "Копилка знаний",
    active: false,
    children: [ {
        url: "/library/for-parents",
        title: "Для родителей"
    }, {
        url: "/library/for-teachers",
        title: "Для учителей"
    }, {
        url: "/library/for-children",
        title: "Ученикам"
    }, {
        url: "/library/links",
        title: "Полезные ссылки"
    } ]
}, {
    url: "/gallery",
    title: "Фотогалерея",
    active: false
}, {
    url: "/guestbook",
    title: "Гостевая книга",
    active: false
}, {
    url: "/sitemap",
    title: "Карта сайта",
    active: false
} ]

export default data