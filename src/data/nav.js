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
        active: false,
        children: [ {
            url: "/my-class/sheduler",
            title: "Расписание"
        }, {
            url: "/my-class/holidays",
            title: "Каникулы"
        }, {
            url: "/my-class/ads",
            title: "Объявления"
        }, {
            url: "/my-class/congratulations",
            title: "Поздравления"
        } ]
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
        } ]
    }, {
        url: "/gallery",
        title: "Фотогалерея",
        active: false
    },
    /*{
    url: "/guestbook",
    title: "Гостевая книга",
    active: false
},*/
    {
        url: "/links",
        title: "Полезные ссылки",
        active: false
    }, {
        url: "/sitemap",
        title: "Карта сайта",
        active: false
    }, {
        url: "/search",
        title: "Поиск",
        active: false
    }
]

export default data