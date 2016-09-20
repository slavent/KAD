/**
 * @author Kozinets Svyatoslav
 */

let props = {
    data: [ {
            url: "/",
            title: "Главная",
            active: true
        }, {
            url: "/portfolio",
            title: "Портфолио",
            active: false
        }, {
            url: "/library",
            title: "Копилка знаний",
            active: false,
            children: [ {
                url: "/for-parents",
                title: "Для родителей"
            }, {
                url: "/for-teacher",
                title: "Для учителей"
            }, {
                url: "/for-children",
                title: "Ученикам"
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
        },
        /* {
                url: "/search",
                title: "Поиск",
                active: false
            }*/
    ]
}

export default props