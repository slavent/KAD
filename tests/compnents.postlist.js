import {
    expect
} from "chai"
import React from "react"
import PostList from "../src/components/PostList/index.jsx"
import sd from "skin-deep"

describe( "PostList", () => {
    const postData = [
    {
        id: 0,
        category: "1 сентября",
        title: "Скоро в школу",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae atque quasi, aperiam eaque, corporis delectus consectetur consequuntur at maiores perferendis vel in illo, nemo cum ipsum officiis veritatis animi quis.",
        photo: "http://lorempixel.com/400/400"
    }, {
        id: 1,
        category: "1 сентября",
        title: "Скоро в школу",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere rem consequatur a quis laudantium, inventore asperiores? Fugiat doloribus odit ipsam quibusdam ipsa culpa omnis consectetur quos architecto, id nesciunt aliquid?",
        photo: "http://lorempixel.com/400/400"
    }, {
        id: 2,
        category: "1 сентября",
        title: "Скоро в школу",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, deserunt, error molestias at assumenda non. Nesciunt nisi nam suscipit saepe, beatae quod deserunt, hic quo qui doloribus, numquam ipsa, aliquam!",
        photo: "http://lorempixel.com/400/400"
    }, {
        id: 3,
        category: "1 сентября",
        title: "Скоро в школу",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus a rem minus temporibus doloremque. Esse in illum aliquid beatae nobis harum vero facilis, enim autem numquam nam perspiciatis consequatur error!",
        photo: "http://lorempixel.com/400/400"
    } ]

    it( "Рендер списка постов", () => {
        const tree = sd.shallowRender( React.createElement( PostList, {
            data: postData
        } ) )
        const items = tree.everySubTree( ".posts__item" )

        expect( items.length ).to.equal( postData.length )
    } )
} )